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
      <div>Event documents</div>
      <span class="flex justify-end flex-1 py-1 space-x-2 font-light">
        <p>Program</p>
        <p>Download event program</p>
      </span>
    </div>

    <div class="rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500">

    </div>

  </div>
</template>

<script>
import { fetchItem } from "@/services/apiService";
import { MapPinIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid';
import HeaderView from '@/includes/Header.vue';
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";

export default {
  name: "AccessEvent",
  components: {
    MapPinIcon, CalendarDaysIcon,
    HeaderView, SpinnerComponent
  },
  data() {
    return {
      headerTitle: "Event details",
      id: this.$route.params.id,
      isLoading: true,
      event: {},
      participants: [],
      currentPage: 1,
      pageSize: process.env.VUE_APP_PAGE_SIZE,
      apiUrl: process.env.VUE_APP_API_URL,
      appUrl: process.env.VUE_APP_BASE_URL,
      searchPhrase: "",
      showParticipantModal: false,
      itemsPerPage: 4
    };
  },
  computed: {
    paginatedParticipants() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.participants.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.participants.length / this.itemsPerPage);
    },
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
    handlePageChange(newPage) {
      this.currentPage = newPage;
    },
    getRowClass(index) {
      return index % 2 === 0 ? 'bg-athens-gray-400' : 'bg-athens-gray-100';
    },
    handleSearch(searchQuery) {
      this.searchPhrase = searchQuery;
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
    }
  },
};
</script>