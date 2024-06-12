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
            <UserGroupIcon class="w-5 h-5" /><span class="font-bold">:</span><span>{{ event.organiser }}</span>
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
        <div @click="downloadCSV"
          class="mt-2 flex space-x-2 px-4 py-2 text-white bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl cursor-pointer">
          Download CSV
        </div>
        <div @click="downloadPDF"
          class="mt-2 flex space-x-2 px-4 py-2 text-white bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl cursor-pointer">
          <PrinterIcon class="w-5 h-5" /><span>Download PDF</span>
        </div>
      </span>
    </div>

    <div class="flex flex-col space-y-4">
      <SpinnerComponent v-if="isLoading" />

      <div v-else class="rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500">
        <div class="flex flex-row bg-shuttle-gray-300 p-2 text-sm font-bold">
          <div class="sm:w-4/12">Name</div>
          <div class="sm:w-2/12">Institution</div>
          <div class="sm:w-2/12">Role</div>
          <div class="sm:w-2/12">Country</div>
          <div class="sm:w-1/12">Reg Date</div>
          <div class="sm:w-1/12 text-end">Action</div>
        </div>

        <div v-for="(participant, index) in participants" :key="participant.id" :class="getRowClass(index)"
          class="flex flex-row p-2 text-sm items-center">
          <div class="sm:w-4/12">{{ participant.title }} {{ participant.firstname }} {{ participant.lastname }}</div>
          <div class="sm:w-2/12">{{ participant.institution }}</div>
          <div class="sm:w-2/12">{{ participant.participant_category }}</div>
          <div class="sm:w-2/12">{{ participant.country }}</div>
          <div class="sm:w-1/12">{{ formatDate(participant.created_date) }}</div>
          <div class="flex space-x-1 sm:w-1/12 justify-end">
            <div v-if="permissions.includes('VIEW_EVENT')" class="p-1 bg-bondi-blue-50 rounded-full cursor-pointer">
              <EyeIcon class="w-5 h-5 text-bondi-blue-600" @click="showParticipant(participant)" />
            </div>
          </div>
        </div>

        <pagination-component :currentPage="currentPage" :totalPages="totalPages" @page-change="handlePageChange" />
        <participant-modal :show="showParticipantModal" @confirmed="confirmParticipant" @closed="cancelParticipant"
          :event="event" :participant="participant" @file-uploaded="refreshItems" />
      </div>
    </div>

    <div v-if="!isLoading" id="pdf-content">
      <div v-for="participant in participants" :key="participant.id"
        class="flex flex-col items-center justify-center w-6/12 p-1">
        <div class="flex flex-col space-y-1 py-4 items-center justify-center border-4 border-bondi-blue-600">
          <div><img src="@/assets/images/logo.png" class="w-20 pb-2" /></div>
          <div v-if="!participant.picture"><img src="@/assets/images/profile.png"
              class="w-32 h-32 border border-bondi-blue-500" /></div>
          <div v-else><img :src="getFullImageUrl(participant.picture)" class="w-32 h-32 border border-bondi-blue-500" />
          </div>
          <div class="text-md px-2 font-semibold text-neon-carrot-600 text-center pb-2">{{ event.event }}</div>
          <div class="w-full flex-1 bg-bondi-blue-300 p-2 font-bold text-white text-center">{{
            participant.participant_category }}</div>
          <div class="px-2">{{ participant.title }} {{ participant.firstname }} {{ participant.lastname }}</div>
          <div class="px-2">{{ participant.institution }}</div>
          <div class="px-2 pb-2">{{ participant.country }}</div>
          <qrcode-vue :value="qrCodeValue" :size="80" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchItem } from "@/services/apiService";
import { PrinterIcon, MapPinIcon, CalendarDaysIcon, UserGroupIcon, EyeIcon } from '@heroicons/vue/24/solid';
import HeaderView from '@/includes/Header.vue';
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";
import PaginationComponent from '@/components/PaginationComponent.vue';
import ParticipantModal from '@/components/ParticipantModal.vue';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import QrcodeVue from 'qrcode.vue';

export default {
  name: "EventView",
  components: {
    PrinterIcon, MapPinIcon, CalendarDaysIcon, UserGroupIcon, EyeIcon,
    HeaderView, SpinnerComponent, PaginationComponent, ParticipantModal, QrcodeVue
  },
  data() {
    return {
      headerTitle: "Event details",
      id: this.$route.params.id,
      isLoading: true,
      event: {},
      participants: [],
      currentPage: 1,
      totalPages: 0,
      pageSize: process.env.VUE_APP_PAGE_SIZE,
      apiUrl: process.env.VUE_APP_API_URL,
      searchPhrase: "",
      showParticipantModal: false,
      qrCodeValue: "http://example.com/userprofile/johndoe", // This should be dynamically generated based on user details
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
        const response = await fetchItem("events", this.id);
        this.event = response.event;
        this.participants = response.participants;
        this.totalPages = Math.ceil(response.participants.length / this.pageSize);
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching event:", error);
        this.isLoading = false;
      }
    },
    async getParticipants(page = 1) {
      // Fetch participants logic for the specified page
      console.log(page)
    },
    getRowClass(index) {
      return index % 2 === 0 ? 'bg-athens-gray-400' : 'bg-athens-gray-100';
    },
    handleSearch(searchQuery) {
      this.searchPhrase = searchQuery;
      this.getParticipants();
    },
    handlePageChange(newPage) {
      this.currentPage = newPage;
      this.getParticipants();
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
    async downloadPDF() {
      const element = document.getElementById("pdf-content");

      // Ensure all images are loaded
      const images = element.querySelectorAll('img');
      const imageLoadPromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = img.onerror = resolve;
        });
      });

      await Promise.all(imageLoadPromises);

      // Give a small delay to ensure images are rendered
      setTimeout(async () => {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("download.pdf");
      }, 500); // 500ms delay to ensure images are fully loaded and rendered
    },
    downloadCSV() {
      // CSV download logic
    },
    getFullImageUrl(picturePath) {
      return `${this.apiUrl}/${picturePath}`;
    }
  },
};
</script>

<style>
#pdf-content {
  width: 210mm;
  /* A4 paper width */
  min-height: 297mm;
  /* A4 paper height */
  padding: 2mm;
  background-color: #fff;
}
</style>
