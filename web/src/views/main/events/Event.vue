<template>
  <div class="flex flex-col space-y-4 flex-1">
    <HeaderView :headerTitle="headerTitle" />

    <SpinnerComponent v-if="isLoading" />

    <div v-else class="rounded-2xl bg-catskill-white-100 shadow-sm pt-4">
      <div
        class="flex flex-col p-4 space-y-1 text-neon-carrot-50 bg-bondi-blue-500 border border-bondi-blue-500 rounded-2xl">
        <div class="text-xl">
          <span class="font-bold">Event :</span><span>{{ event.event }}</span>
        </div>
        <div class="flex text-sm space-x-1">
          <div class="rounded-sm flex flex-1 py-1 space-x-1">
            <UserGroupIcon class="w-5 h-5" /><span class="font-bold">:</span><span>{{ event.organiser
              }}</span>
          </div>
        </div>
        <div class="flex text-sm space-x-1">
          <div class="rounded-sm flex flex-1 py-1 space-x-1">
            <MapPinIcon class="w-5 h-5" /><span class="font-bold">:</span><span>{{ event.location }}</span>
          </div>
        </div>
        <div class="flex text-sm space-x-1">
          <div class="rounded-sm flex flex-1 py-1 space-x-1">
            <CalendarDaysIcon class="w-5 h-5" /><span class="font-bold">:</span><span>{{ formatDate(event.start_date) }}
              - {{ formatDate(event.end_date) }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-row items-baseline text-sm font-semibold text-abbey-500">
      <div>Participants</div>
      <span class="flex justify-end flex-1 py-1 space-x-2 font-light">
        <search-component @search="handleSearch"></search-component>
        <div @click="printA4Section"
          class="mt-2 flex space-x-2 px-4 py-2 text-white bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl cursor-pointer">
          <PrinterIcon class="w-5 h-5" /><span>Download PDF</span>
        </div>
        <div @click="exportToExcel"
          class="mt-2 flex space-x-2 px-4 py-2 text-white bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl cursor-pointer">
          <PrinterIcon class="w-5 h-5" /><span>Download CSV</span>
        </div>
      </span>
    </div>

    <div class="rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500">
      <div v-if="!isLoading" class="flex flex-wrap print-a4 bg-bondi-blue-600" id="pdf-content">
        <div v-for="(participant) in participants" :key="participant.id" class="w-1/2 p-2 h-1/2 page-break">
          <div
            class="flex flex-col space-y-6 py-4 items-center justify-center border-8 bg-white-50 border-bondi-blue-600">
            <div><img src="@/assets/images/50years.png" class="w-48 pb-2" /></div>
            <div
              class="flex-1 w-full p-3 font-bold text-2xl text-center justify-center text-white-50 flex flex-col items-center"
              :class="getParticipantClass(participant.participant_category)">{{ participant.participant_category }}
            </div>
            <div class="text-md px-2 font-semibold text-abbey-800 text-center pb-2">{{ event.event }}</div>
            <div class="px-2 text-4xl font-extrabold justify-center text-center ">{{ participant.title }} {{
              participant.firstname
            }}
              {{
                participant.lastname }}</div>
            <div class="px-2 text-md text-center">{{ participant.institution }}</div>
            <div class="px-3 rounded-md p-1 font-semibold m-b-2 text-white-100 bg-bondi-blue-700"
              :class="getParticipantClass(participant.participant_category)">{{ participant.country
              }}
            </div>
            <qrcode-vue :value="participantUrl(participant.user_id)" :size="120" />
          </div>
        </div>
      </div>
      <pagination-component :currentPage="currentPage" :totalPages="totalPages" @page-change="handlePageChange">
      </pagination-component>
    </div>
    <participant-modal :show="showParticipantModal" @confirmed="confirmParticipant" @closed="cancelParticipant"
      :event="event" :participant="participant" @file-uploaded="refreshItems" />
  </div>
</template>

<script>
import { fetchItem } from "@/services/apiService";
import { PrinterIcon, MapPinIcon, CalendarDaysIcon, UserGroupIcon } from '@heroicons/vue/24/solid';
import HeaderView from '@/includes/Header.vue';
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";
import PaginationComponent from '@/components/PaginationComponent.vue';
import SearchComponent from '@/components/SearchComponent';
import ParticipantModal from '@/components/ParticipantModal.vue';
import QrcodeVue from 'qrcode.vue';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default {
  name: "EventView",
  components: {
    PrinterIcon, MapPinIcon, CalendarDaysIcon, UserGroupIcon,
    HeaderView, SpinnerComponent, ParticipantModal, QrcodeVue, PaginationComponent, SearchComponent
  },
  data() {
    return {
      headerTitle: "Event details",
      id: this.$route.params.id,
      isLoading: true,
      event: {},
      participants: [],
      appUrl: process.env.VUE_APP_BASE_URL,
      showParticipantModal: false,
      currentPage: 1,
      totalPages: "",
      pageSize: 500,
      searchPhrase: ""
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
    printA4Section() {
      const doc = new jsPDF({ orientation: 'portrait', format: 'a4' });
      const printElement = document.getElementById('pdf-content');
      const width = printElement.offsetWidth;
      const height = printElement.offsetHeight;
      const scaleFactor = 210 / width;
      const dpi = 300;
      const scale = dpi / 96;

      html2canvas(printElement, {
        scale: scale,
        logging: false,
        useCORS: true,
        allowTaint: true
      })
        .then(canvas => {
          const imgData = canvas.toDataURL('image/jpeg', 1.0);
          doc.addImage(imgData, 'JPEG', 0, 0, 210, height * scaleFactor);
          doc.save('Participant.pdf');
        });
    },
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
    getFullImageUrl(picturePath) {
      return `${this.apiUrl}/${picturePath}`;
    },
    getParticipantClass(category) {
      switch (category) {
        case 'Presenter':
          return 'bg-bondi-blue-200';
        case 'Participant':
          return 'bg-mountain-meadow-600';
        case 'Delegate':
          return 'bg-flamingo-800';
        case 'Exhibitor':
          return 'bg-flamingo-600';
        case 'Secretariat':
          return 'bg-neon-carrot-600';
        case 'Student':
          return 'bg-neon-carrot-900';
        default:
          return 'bg-abbey-600';
      }
    },
    participantUrl(id) {
      return this.appUrl + "/WebParticipant/" + id;
    },
    exportToExcel() {
      // Extract headers from JSON keys
      const headers = [
        "ID", "Title", "First Name", "Last Name", "Email", "Phone",
        "Institution", "Country", "Picture URL", "Category",
        "Attendance Confirmed", "Badge Issued", "Payment Confirmed"
      ];

      // Map JSON data to an array of arrays for worksheet
      const worksheetData = [headers, ...this.participants.map(participant => [
        participant.id,
        participant.title,
        participant.firstname,
        participant.lastname,
        participant.email,
        participant.phone,
        participant.institution,
        participant.country,
        participant.picture,
        participant.participant_category,
        participant.confirm_attendance ? 'Yes' : 'No',
        participant.event_badge ? 'Yes' : 'No',
        participant.event_payment ? 'Yes' : 'No'
      ])];

      // Convert data to worksheet
      const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

      // Create a new workbook and append the worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Participants');

      // Generate Excel file and trigger download
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

      // Use FileSaver to save the file
      saveAs(blob, 'participants.xlsx');
    }
  },
};
</script>