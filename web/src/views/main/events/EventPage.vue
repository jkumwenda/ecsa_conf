<template>
  <div class="flex flex-col space-y-4 flex-1">
    <HeaderView :headerTitle="headerTitle"></HeaderView>
    <SpinnerComponent v-if="isLoading" />
    <div v-else class="rounded-2xl bg-catskill-white-100 shadow-sm pt-4">
      <div class="flex flex-col p-4 space-y-1 border border-bondi-blue-500 rounded-2xl">
        <div class="text-xl text-bondi-blue-700"><span class="font-bold">Event :</span><span>{{ event.event }}</span>
        </div>
        <div class="flex text-sm space-x-1 text-bondi-blue-700">
          <div class="rounded-sm flex-1 bg-st-tropaz-200 p-1 px-3 space-x-1"><span class="font-bold">Event
              type :</span><span>{{ event.event
              }}</span></div>
          <div class="rounded-sm flex-1 bg-st-tropaz-200 p-1 px-3 space-x-1"><span class="font-bold">Orbaniser
              :</span><span>{{
                event.event
              }}</span>
          </div>
        </div>

        <div class="flex text-sm space-x-1 text-bondi-blue-700">
          <div class="rounded-sm flex-1 bg-st-tropaz-200 p-1 px-3 space-x-1"><span class="font-bold">Location
              type :</span><span>{{ event.location
              }}</span></div>
          <div class="rounded-sm flex-1 bg-st-tropaz-200 p-1 px-3 space-x-1"><span class="font-bold">Country
              type :</span><span>{{ event.country
              }}</span></div>
        </div>

        <div class="flex text-sm space-x-1 text-bondi-blue-700">
          <div class="rounded-sm flex-1 bg-st-tropaz-200 p-1 px-3 space-x-1"><span class="font-bold">Event date
              :</span><span>{{ formatDate(event.start_date) }} - {{ formatDate(event.end_date) }}</span></div>
          <div class="rounded-sm flex-1 bg-st-tropaz-200 p-1 px-3 space-x-1"><span class="font-bold">Reg date
              :</span><span>{{ formatDate(event.registration_start_date) }} - {{ formatDate(event.registration_end_date)
              }}</span>
          </div>
        </div>

        <div class="flex text-sm space-x-1 text-bondi-blue-700">
          <div class="rounded-sm flex-1 bg-st-tropaz-200 p-1 px-3 space-x-1"><span class="font-bold">Capacity
              :</span><span>{{
                event.capacity
              }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row items-baseline text-sm font-semibold text-abbey-500">
      <div>Participants</div>
      <span class="flex justify-end flex-1 py-1 ">
        <search-component @search="handleSearch"></search-component>
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
        <div class="flex flex-row p-2 text-sm items-center" v-for="(participant, index) in participants"
          :key="participant.id" :class="getRowClass(index)">
          <div class="sm:w-4/12">{{ participant.title }} {{ participant.firstname }} {{ participant.lastname }}</div>
          <div class="sm:w-2/12">{{ participant.institution }}</div>
          <div class="sm:w-2/12">{{ participant.participant_category }}</div>
          <div class="sm:w-2/12">{{ participant.country }}</div>
          <div class="sm:w-1/12">{{ formatDate(participant.created_date) }}</div>
          <div class="flex space-x-1 sm:w-1/12 justify-end">
            <div v-if="permissions.includes('VIEW_EVENT')" class="p-1 bg-bondi-blue-50 rounded-full cursor-pointer">
              <PrinterIcon class="w-5 h-5 text-bondi-blue-600" @click="showParticipant(participant)">
              </PrinterIcon>
            </div>
          </div>
        </div>
        <pagination-component :currentPage="currentPage" :totalPages="totalPages" @page-change="handlePageChange">
        </pagination-component>
        <participant-modal :show="showParticipantModal" @confirmed="confirmParticipant" @closed="cancelParticipant"
          :event=event :participant=participant @file-uploaded="refreshItems">
        </participant-modal>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchItem } from "@/services/apiService";
import { PrinterIcon } from '@heroicons/vue/24/solid'
import HeaderView from '@/includes/Header.vue'
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";
import SearchComponent from '@/components/SearchComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import ParticipantModal from '@/components/ParticipantModal.vue'

export default {
  name: "EventPageView",
  components: {
    PrinterIcon,
    HeaderView, SpinnerComponent, SearchComponent, PaginationComponent, ParticipantModal
  },
  data() {
    return {
      headerTitle: "Event details",
      id: this.$route.params.id,
      isLoading: true,
      event: {},
      participants: {},
      currentPage: 1,
      totalPages: "",
      pageSize: process.env.VUE_APP_PAGE_SIZE,
      searchPhrase: "",
      showParticipantModal: false,
    };
  },
  mounted() {
    this.getEvent();
  },
  setup() {
    const authStore = useAuthStore()
    const permissions = authStore.permissions
    return { permissions }
  },
  methods: {
    async getEvent() {
      try {
        const response = await fetchItem("events", this.id);
        this.event = response.event;
        this.participants = response.participants;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching events:", error);
        this.isLoading = false;
      }
    },
    async getParticipants(page) { console.log(page, "This is the page") },
    getRowClass(index) {
      return index % 2 === 0 ? 'bg-athens-gray-400' : 'bg-athens-gray-100';
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const formattedDate = date.toLocaleString("en-UK", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      return formattedDate;
    },
    formartStatus(dateString) {
      const renewalDate = new Date(dateString);
      const today = new Date();
      if (renewalDate.getTime() > today.getTime()) {
        return "Active";
      } else {
        return "Expired";
      }
    },
    showParticipant(participant) {

      this.participant = participant
      console.log(participant, "Some data here")
      this.showParticipantModal = true;
    },
    confirmParticipant() {
      this.getUser();
      this.showParticipantModal = false;
    },
    cancelParticipant() {
      this.showParticipantModal = false;
    },
  },
};
</script>
