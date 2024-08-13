<template>
  <div class="flex flex-col space-y-4 flex-1">
    <HeaderView :headerTitle="headerTitle" />
    <SpinnerComponent v-if="isLoading" />
    <div v-else class="rounded-2xl border border-mercury-500 p-3">
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

    <div class="flex flex-row items-baseline text-2xl font-roboto-light font-semibold text-abbey-500">
      Event resources
    </div>

    <div class="rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500">
      <span class="italic">No resources uploaded yet, check again later</span>
    </div>

  </div>
</template>

<script>
import { fetchItem } from "@/services/apiService";
import { MapPinIcon, CalendarDaysIcon, UserGroupIcon } from '@heroicons/vue/24/solid';
import HeaderView from '@/includes/Header.vue';
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";

export default {
  name: "EventView",
  components: {
    HeaderView, SpinnerComponent, MapPinIcon, CalendarDaysIcon, UserGroupIcon
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
      pageSize: process.env.VUE_APP_PAGE_SIZE,
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
  },
};
</script>