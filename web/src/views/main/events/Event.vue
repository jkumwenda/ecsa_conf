<template>
  <SpinnerComponent v-if="isLoading" />
  <div v-else class="flex flex-col space-y-4 flex-1">
    <HeaderView :headerTitle="headerTitle" />
    <div class="bg-catskill-white-100 border-b pb-4 border-mercury-500 pt-4">
      <div class="flex flex-col space-y-1">
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
    </div>
    <div class="flex sm:flex-row flex-col items-baseline text-sm font-semibold text-abbey-500">
      <div>Participants</div>
      <span class="flex sm:flex-row flex-col justify-end flex-1 py-1 sm:space-y-2 space-y-2 font-light">
        <search-component @search="handleSearch"></search-component>
        <DownloadComponent class="sm:ml-2 ml-0" @participants="handleParticipants()" @paid="handlePaid()"
          @notPaid="handleNotPaid()">
        </DownloadComponent>
      </span>
    </div>
    <div v-if="message">{{ message }}</div>
    <div class="rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500">
      <div class="flex flex-row bg-shuttle-gray-300 p-2 text-sm font-bold">
        <div class="sm:w-5/12">Participant</div>
        <div class="sm:w-2/12">Institution</div>
        <div class="sm:w-2/12">Country</div>
        <div class="sm:w-2/12">Paid</div>
        <div class="sm:w-1/12">Action</div>
      </div>
      <div class="flex sm:flex-row flex-col p-2 text-sm sm:items-center items-start"
        v-for="(participant) in participants" :key="participant.id" :class="getRowClass(index)">
        <div class="sm:w-5/12">
          {{ participant.title }}
          {{ participant.firstname }}
          {{ participant.lastname }}
        </div>
        <div class="sm:w-2/12">{{ participant.institution }}</div>
        <div class="sm:w-2/12"> {{ participant.country }}</div>
        <div class="sm:w-2/12">
          <span v-if="paidStatus(participant.event_payment)" class="flex space-x-2 items-center font-bold">
            <CheckCircleIcon class="w-6 h-6 text-mountain-meadow-800"></CheckCircleIcon>
            <span>Yes</span>
          </span>
          <span v-else class="flex space-x-2 items-center font-bold">
            <XCircleIcon class="w-6 h-6 text-flamingo-700"></XCircleIcon>
            <span>No</span>
          </span>
        </div>
        <div class="flex space-x-2 sm:w-1/12 items-start">
          <span v-if="!paidStatus(participant.event_payment)"
            class="p-1 border border-mountain-meadow-600 bg-flamingo-400  rounded-full">
            <CurrencyDollarIcon class="w-5 h-5 text-mountain-meadow-800 cursor-pointer"
              @click="paymentModal(participant.id)">
            </CurrencyDollarIcon>
          </span>
        </div>
      </div>
      <pagination-component :currentPage="currentPage" :totalPages="totalPages" @page-change="handlePageChange">
      </pagination-component>
    </div>
    <participant-modal :show="showParticipantModal" @confirmed="confirmParticipant" @closed="cancelParticipant"
      :event="event" :participant="participant" @file-uploaded="refreshItems" />
    <payment-modal :show="showPaymentModal" @paid="confirmPayment" @cancel="cancelPaymentModal" :userID="userID"
      :eventID="eventID">
    </payment-modal>
  </div>
</template>

<script>
import { fetchItem } from "@/services/apiService";
import { MapPinIcon, CalendarDaysIcon, UserGroupIcon, CheckCircleIcon, XCircleIcon, CurrencyDollarIcon } from '@heroicons/vue/24/solid';
import HeaderView from '@/includes/Header.vue';
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";
import PaginationComponent from '@/components/PaginationComponent.vue';
import SearchComponent from '@/components/SearchComponent';
import ParticipantModal from '@/components/ParticipantModal.vue';
import DownloadComponent from '@/components/DownloadComponent.vue';
import { exportToExcel } from '@/utils/exportToExcel';
import PaymentModal from "@/components/PaymentModal";

export default {
  name: "EventView",
  components: {
    MapPinIcon, CalendarDaysIcon, UserGroupIcon,
    HeaderView, SpinnerComponent, ParticipantModal,
    PaginationComponent, SearchComponent, DownloadComponent,
    CheckCircleIcon, XCircleIcon, CurrencyDollarIcon,
    PaymentModal
  },
  data() {
    return {
      headerTitle: "Event details",
      id: this.$route.params.id,
      isLoading: true,
      event: {},
      participants: [],
      allParticipants: [],
      appUrl: process.env.VUE_APP_BASE_URL,
      showParticipantModal: false,
      currentPage: 1,
      totalPages: "",
      pageSize: process.env.VUE_APP_PAGE_SIZE,
      searchPhrase: "",
      showPaymentModal: false,
      userID: "",
      message: "",
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
        this.totalPages = response.pages;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching event:", error);
        this.isLoading = false;
      }
    },
    async handleSearch(searchQuery) {
      this.searchPhrase = searchQuery
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
      return status === true ? true : false;
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
      this.participants = this.allParticipants
      exportToExcel(this.participants, 'AllParticipants');
    },
    handlePaid() {
      const participants = this.participants.filter(participant => participant.event_payment);
      this.participants = participants
      exportToExcel(this.participants, 'PaidParticipants');
    },
    handleNotPaid() {
      const participants = this.participants.filter(participant => !participant.event_payment);
      this.participants = participants
      exportToExcel(this.participants, 'NotPaidParticipants');
    },
    paymentModal(userID) {
      this.userID = userID;
      this.eventID = this.id;
      this.showPaymentModal = true;
    },
    confirmPayment() {
      this.message = "Payment confimartion was successful";
      this.showPaymentModal = false;
      this.getEvent()
    },
    cancelPaymentModal() {
      this.showPaymentModal = false;
    }
  },
};
</script>