<template>
    <div class="flex flex-col space-y-6 flex-1 items-center">
        <div>
            <router-link :to="{ name: 'Login' }" class="font-bold">Login</router-link> or create and account to
            <router-link :to="{ name: 'Register' }" class="font-bold">Register</router-link> for this event
        </div>
        <SpinnerComponent v-if="isLoading" />
        <div v-else
            class="flex flex-col flex-1 space-y-2 text-white-400 justify-between w-11/12 p-4 rounded-3xl bg-great-blue-400 drop-shadow">
            <div class="flex flex-col space-y-0">
                <h1 class="text-xl font-roboto">{{ event.event }}</h1>
            </div>
            <div class="flex text-sm space-x-4">
                <div class="w-2/12 font-bold">Venue </div>
                <div>: {{ event.location }}</div>
            </div>
            <div class="flex text-sm space-x-4">
                <div class="w-2/12 font-bold">Organiser </div>
                <div>: {{ event.organiser }}</div>
            </div>
            <div class="flex text-sm space-x-4">
                <div class="w-2/12 font-bold">Location </div>
                <div>: {{ event.country }}</div>
            </div>
            <div class="flex text-sm space-x-4">
                <div class="w-2/12 font-bold">Event date </div>
                <div>: {{ formatDate(event.start_date) }} - {{ formatDate(event.end_date) }}</div>
            </div>
            <div class="flex text-sm space-x-4">
                <div class="w-2/12 font-bold">Registration date </div>
                <div>: {{ formatDate(event.registration_start_date) }} - {{ formatDate(event.registration_start_date) }}
                </div>
            </div>
        </div>
        <h class="font-bold text-xl text-bondi-blue-600 w-11/12">Event program</h>
        <div
            class="flex flex-row justify-between items-center w-11/12 rounded-3xl p-4 border border-solid border-great-blue-400 bg-great-blue-50 drop-shadow">
            <p class="italic">Program currently not available, please check again later</p>
        </div>
    </div>

</template>

<script>
import { fetchItem } from "@/services/apiService";
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";

export default {
    name: "EventView",
    components: {
        SpinnerComponent
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