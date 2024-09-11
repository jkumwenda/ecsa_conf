<template>
  <SpinnerComponent v-if="isLoading" />
  <div v-else class="flex flex-col space-y-4 flex-1">
    <HeaderView :headerTitle="headerTitle" />
    <div class="flex flex-row bg-catskill-white-100 border-b pb-4 border-abbey-400 pt-4 space-x-2">
      <div class="flex flex-col space-y-1 sm:w-10/12 w-12/12">
        <div class="text-3xl font-semibold font-roboto-thin text-bondi-blue-500">
          <span>{{ event.event }}</span>
        </div>
        <div class="flex text-sm items-center space-x-1">
          <div class="rounded-sm flex flex-1 py-1 space-x-1">
            <span>{{ event.description }}</span>
          </div>
        </div>
        <div class="flex text-sm items-center space-x-1">
          <div class="rounded-sm flex flex-1 py-1 space-x-1">
            <UserGroupIcon class="w-5 h-5 text-bondi-blue-500" />
            <span class="font-bold">:</span>
            <span>{{ event.organiser }}</span>
          </div>
        </div>
        <div class="flex text-md space-x-1">
          <div class="rounded-sm flex flex-1 py-1 space-x-1">
            <MapPinIcon class="w-5 h-5 text-bondi-blue-500" />
            <span class="font-bold">:</span>
            <span>{{ event.location }}</span>
          </div>
        </div>
        <div class="flex text-sm items-center space-x-1">
          <div class="rounded-sm flex flex-row flex-1 items-center py-1 space-x-1">
            <CalendarDaysIcon class="w-5 h-5 text-bondi-blue-500" />
            <span class="font-bold">:</span>
            <span>{{ formatDate(event.start_date) }} - {{ formatDate(event.end_date) }}</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col rounded-md items-center justify-center text-center space-y-2">
        <h2 class="text-roboto-thin font-bold">Attendance QR</h2>
        <span>
          <QRCodeVue :value="appUrl + '/#/attendance/' + id + '/'" :size="140" :color-dark="'#000000'"
            :color-light="'#ffffff'" />
        </span>
      </div>
    </div>

    <div class="flex sm:flex-row flex-col items-baseline text-sm font-semibold text-abbey-500">
      <div>Participants</div>
      <span class="flex sm:flex-row flex-col justify-end flex-1 py-1 sm:space-y-2 space-y-2 sm:space-x-2 font-light">
        <search-component @search="handleSearch"></search-component>
        <DownloadComponent v-if="permissions.includes('DOWNLOAD_PARTICIPANT_LIST')" class="sm:ml-2 ml-0"
          @participants="handleParticipants" @paid="handlePaid" @notPaid="handleNotPaid"
          @attendance="handleAttendance" />
        <span v-if="permissions.includes('PRINT_BADGE')" @click="openPrintBadgesModal"
          class="inline-flex cursor-pointer justify-center rounded-2xl border border-bondi-blue-600 bg-bondi-blue-500 hover:bg-bondi-blue-400 text-white-200 hover:text-white-500 shadow-sm px-4 py-2 text-sm">
          Print Badge</span>
        <span v-if="permissions.includes('BULK_UPLOAD')" @click="openBulkUploadParticipantsModal"
          class="inline-flex cursor-pointer justify-center rounded-2xl border border-bondi-blue-600 bg-bondi-blue-500 hover:bg-bondi-blue-400 text-white-200 hover:text-white-500 shadow-sm px-4 py-2 text-sm">
          Bulk Upload</span>
      </span>
    </div>
    <div class="p-3 px-4 rounded-2xl text-sm bg-bondi-blue-200 border border-bondi-blue-400 text-bondi-blue-800"
      v-if="errorMsg">{{ errorMsg
      }}</div>
    <div class="p-3 px-4 rounded-2xl text-sm bg-st-tropaz-200 border border-st-tropaz-600 text-st-tropaz-600"
      v-if="successMsg">
      {{ successMsg
      }}</div>
    <div v-if="message">{{ message }}</div>
    <div class="rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500">
      <div class="flex flex-row bg-shuttle-gray-300 p-2 text-sm font-bold">
        <div class="sm:w-5/12">Participant</div>
        <div class="sm:w-2/12">Institution</div>
        <div class="sm:w-2/12">Country</div>
        <div class="sm:w-1/12">Paid</div>
        <div class="sm:w-2/12 text-right">Action</div>
      </div>
      <div v-for="(participant, index) in participants" :key="participant.id" :class="getRowClass(index)"
        class="flex sm:flex-row flex-col p-2 text-sm sm:items-center items-start">
        <div class="sm:w-5/12">
          {{ participant.title }}<span class="uppercase">{{ participant.firstname }}</span> {{ participant.lastname }}
        </div>
        <div class="sm:w-2/12">{{ participant.institution }}</div>
        <div class="sm:w-2/12">{{ participant.country }}</div>
        <div class="sm:w-1/12">
          <span v-if="paidStatus(participant.event_payment)" class="flex space-x-2 items-center font-bold">
            <CheckCircleIcon class="w-6 h-6 text-mountain-meadow-800" />
            <span>Yes</span>
          </span>
          <span v-else class="flex space-x-2 items-center font-bold">
            <XCircleIcon class="w-6 h-6 text-flamingo-700" />
            <span>No</span>
          </span>
        </div>
        <div class="flex space-x-2 sm:w-2/12 justify-end">
          <span v-if="permissions.includes('PREVIEW_BADGE')">
            <div title="Preview Badge" class="p-1 border border-st-tropaz-600 bg-st-tropaz-200 rounded-full"
              @click="previewBadge(participant)">
              <IdentificationIcon class="w-5 h-5 text-st-tropaz-600" />
            </div>
          </span>
          <span v-if="permissions.includes('CONFIRM_EVENT_PAYMENT')">
            <div v-if="!paidStatus(participant.event_payment)" title="Confirm Payment"
              class="p-1 border border-mountain-meadow-600 bg-flamingo-400 rounded-full">
              <CurrencyDollarIcon class="w-5 h-5 text-mountain-meadow-800 cursor-pointer"
                @click="paymentModal(participant.id)" />
            </div>
          </span>
          <span v-if="permissions.includes('CANCEL_EVENT_REGISTRATION')">
            <div v-if="registrationStatus(participant.confirm_attendance)" title="Cancel Registration"
              class="p-1 border border-flamingo-600 bg-flamingo-400 rounded-full">
              <XCircleIcon class="w-5 h-5 text-flamingo-800 cursor-pointer"
                @click="cancelRegistration(participant.id)" />
            </div>
          </span>
        </div>
      </div>
      <pagination-component :currentPage="currentPage" :totalPages="totalPages" @page-change="handlePageChange" />
    </div>
    <participant-modal :show="showParticipantModal" @confirmed="confirmParticipant" @closed="cancelParticipant"
      :event="event" :participant="participant" @file-uploaded="refreshItems" />
    <payment-modal :show="showPaymentModal" @paid="confirmPayment" @cancel="cancelPaymentModal" :userID="userID"
      :eventID="eventID" />
    <badge-modal :show="showBadgeModal" @close="closeBadgeModal" :participant="participant" :event_id="id" />
    <print-badges-modal :show="showPrintBadgesModal" @close="closePrintBadgesModal" :participants="participants"
      :event_id="id" />
    <bulk-upload-participants-modal :show="showBulkUploadParticipantsModal" @close="closeBulkUploadParticipantsModal"
      :eventID="eventID" />
  </div>
</template>

<script>
import { fetchItem, createItem } from "@/services/apiService";
import {
  MapPinIcon, CalendarDaysIcon, UserGroupIcon, CheckCircleIcon,
  XCircleIcon, CurrencyDollarIcon, IdentificationIcon
} from '@heroicons/vue/24/solid';
import HeaderView from '@/includes/Header.vue';
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";
import PaginationComponent from '@/components/PaginationComponent.vue';
import SearchComponent from '@/components/SearchComponent';
import ParticipantModal from '@/components/ParticipantModal.vue';
import DownloadComponent from '@/components/DownloadComponent.vue';
import { exportToExcel } from '@/utils/exportToExcel';
import PaymentModal from "@/components/PaymentModal";
import BadgeModal from "@/components/BadgeModal";
import PrintBadgesModal from "@/components/PrintBadgesModal";
import BulkUploadParticipantsModal from "@/components/BulkUploadParticipantsModal";
import QRCodeVue from 'qrcode.vue';

export default {
  name: "EventView",
  components: {
    MapPinIcon, CalendarDaysIcon, UserGroupIcon,
    HeaderView, SpinnerComponent, ParticipantModal,
    PaginationComponent, SearchComponent, DownloadComponent,
    CheckCircleIcon, XCircleIcon, CurrencyDollarIcon,
    PaymentModal, IdentificationIcon, BadgeModal, PrintBadgesModal, BulkUploadParticipantsModal, QRCodeVue
  },
  data() {
    return {
      headerTitle: "Event details",
      id: this.$route.params.id,
      isLoading: true,
      event: {},
      participants: [],
      participant: {},
      attendance: [],
      allParticipants: [],
      appUrl: process.env.VUE_APP_BASE_URL,
      showParticipantModal: false,
      currentPage: 1,
      totalPages: "",
      pageSize: 10000,
      searchPhrase: "",
      showPaymentModal: false,
      userID: "",
      message: "",
      UserEventData: {
        user_id: "",
        event_id: ""
      },
      showBadgeModal: false,
      showPrintBadgesModal: false,
      showBulkUploadParticipantsModal: false,
      showTestBadgeModal: false,
      successMsg: "",
      errorMsg: "",
    };
  },
  mounted() {
    this.getEvent();
  },
  setup() {
    const authStore = useAuthStore();
    const permissions = authStore.permissions;
    return { permissions };
  },
  methods: {
    async getEvent() {
      try {
        const response = await fetchItem("events", this.id, this.currentPage, this.pageSize, this.searchPhrase);
        this.event = response.event;
        this.participants = response.data;
        this.attendance = response.attendance;
        this.totalPages = response.pages;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching event:", error);
        this.isLoading = false;
      }
    },
    async handleSearch(searchQuery) {
      this.searchPhrase = searchQuery;
      this.getEvent();
    },
    async handlePageChange(newPage) {
      this.currentPage = newPage;
      this.getEvent();
    },
    getRowClass(index) {
      return index % 2 === 0 ? 'bg-athens-gray-400' : 'bg-athens-gray-100';
    },
    paidStatus(status) {
      return status === true;
    },
    registrationStatus(status) {
      return status === true;
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString("en-UK", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },
    showParticipant(participant) {
      this.participant = participant;
      this.showParticipantModal = true;
    },
    confirmParticipant() {
      this.getEvent();
      this.showParticipantModal = false;
    },
    cancelParticipant() {
      this.showParticipantModal = false;
    },
    handleParticipants() {
      this.getEvent()
      this.allParticipants = this.participants;
      exportToExcel(this.allParticipants, 'AllParticipants');
    },
    handlePaid() {
      this.getEvent()
      this.participants = this.participants.filter(participant => participant.event_payment);
      exportToExcel(this.participants, 'PaidParticipants');
    },
    handleNotPaid() {
      this.getEvent()
      this.participants = this.participants.filter(participant => !participant.event_payment);
      exportToExcel(this.participants, 'NotPaidParticipants');
    },
    handleAttendance() {
      this.getEvent()
      this.allAttendance = this.attendance;
      exportToExcel(this.allAttendance, 'Attendance Register');
    },
    paymentModal(userID) {
      this.userID = userID;
      this.eventID = this.id;
      this.showPaymentModal = true;
    },
    confirmPayment() {
      this.message = "Payment confirmation was successful";
      this.showPaymentModal = false;
      this.getEvent();
    },
    cancelPaymentModal() {
      this.showPaymentModal = false;
    },
    async cancelRegistration(user_id) {
      this.UserEventData = { user_id, event_id: Number(this.id) };
      this.isLoading = true;
      try {
        await createItem("events/cancel_registration/", this.UserEventData);
        this.getEvent();
        this.errorMsg = null;
        this.successMsg = "Successfully canceled registrations for user ID # " + user_id;
      } catch (error) {
        this.successMsg = null
        this.errorMsg = error.response.data.detail
      } finally {
        this.isLoading = false;
      }
    },
    previewBadge(participant) {
      this.participant = participant;
      this.showBadgeModal = true;
    },
    closeBadgeModal() {
      this.showBadgeModal = false;
    },
    openPrintBadgesModal() {
      this.showPrintBadgesModal = true;
    },
    closePrintBadgesModal() {
      this.showPrintBadgesModal = false;
    },
    openBulkUploadParticipantsModal() {
      this.eventID = this.id;
      this.showBulkUploadParticipantsModal = true;
    },
    closeBulkUploadParticipantsModal() {
      this.getEvent()
      this.showBulkUploadParticipantsModal = false;
    },

  }
};
</script>
