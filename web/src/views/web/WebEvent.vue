<template>
    <div class="flex flex-col space-y-6 flex-1 items-center">
        <div class="w-11/12 sm:text-left text-center">
            Already have an accout? <router-link :to="{ name: 'Login' }"
                class="font-bold text-bondi-blue-500">login</router-link>, or <router-link :to="{ name: 'Register' }"
                class="font-bold text-bondi-blue-500">create</router-link> an
            account to register
            for this event
        </div>
        <SpinnerComponent v-if="isLoading" />
        <div v-else class="flex flex-col w-11/12 justify-center items-center space-y-4">
            <div class="flex flex-col space-y-4 w-full">

                <div
                    class="flex flex-col sm:items-start items-center sm:text-start text-center space-y-1 w-full rounded-md p-4 border border-mercury-500">
                    <div class="flex flex-col space-y-0">
                        <div class="sm:text-3xl text-xl font-roboto-light">{{ event.event }}</div>
                    </div>
                    <div class="flex flex-col space-y-0">
                        <div class="text-md font-roboto">{{ event.description }}</div>
                    </div>
                    <div class="flex sm:flex-row flex-col sm:items-start items-center w-full text-sm space-x-4">
                        <div class="sm:w-2/12 w-full font-bold">Venue </div>
                        <div class="sm:w-10/12 w-full sm:text-left text-center">: {{ event.location }}</div>
                    </div>
                    <div class="flex sm:flex-row flex-col sm:items-start items-center w-full text-sm space-x-4">
                        <div class="sm:w-2/12 w-full font-bold">Organiser </div>
                        <div class="sm:w-10/12 w-full">: {{ event.organiser }}</div>
                    </div>
                    <div class="flex sm:flex-row flex-col sm:items-start items-center w-full text-sm space-x-4">
                        <div class="sm:w-2/12 w-full font-bold">Country </div>
                        <div class="sm:w-10/12 w-full">: {{ event.country }}</div>
                    </div>
                    <div class="flex sm:flex-row flex-col sm:items-start items-center w-full text-sm space-x-4">
                        <div class="sm:w-2/12 w-full font-bold">Event date </div>
                        <div class="sm:w-10/12 w-full">: {{ formatDate(event.start_date) }} - {{
                            formatDate(event.end_date) }}
                        </div>
                    </div>
                    <div class="flex sm:flex-row flex-col sm:items-start items-center w-full text-sm space-x-4">
                        <div class="sm:w-2/12 w-full font-bold">Registration date </div>
                        <div class="sm:w-10/12 w-full">: {{ formatDate(event.registration_start_date) }} - {{
                            formatDate(event.registration_end_date) }}
                        </div>
                    </div>
                    <router-link :to="{ name: 'Login' }"
                        class="sm:px-4 px-2 sm:py-2 py-1 rounded-md border-2  border-bondi-blue-500 text-stone-100 hover:bg-bondi-blue-600">
                        Login or Sign Up to register for this event
                    </router-link>
                </div>

            </div>
        </div>

        <h class="font-bold text-3xl font-roboto-thin text-abbey-500 w-11/12">Event resources</h>
        <div
            class="flex flex-col justify-between w-11/12 rounded-md p-4 border border-solid border-great-blue-300 bg-white-50 drop-shadow">
            <span class="text-md font-bold font-roboto">Files (Click the link to download
                file)</span>
            <div class="pb-4 px-2" v-if="resources.length > 0">
                <span v-for="(resource) in resources" :key="resource.id">
                    <a v-if="resource.access_level == 'public'" class="text-dodger-blue-600 hover:text-dodger-blue-400"
                        :href="getFullImageUrl(resource.filepath)" :download="file_name">{{
                            resource.file_name }}</a>
                </span>
            </div>
            <div v-else>
                <span class="italic">No files uploaded yet, check again later</span>
            </div>
            <span class="text-md font-bold font-roboto">Links (Click on a link to
                access)</span>
            <div class="pb-4 px-2" v-if="links.length > 0">
                <span class="flex flex.row" v-for="(link) in links" :key="link.id">
                    <a v-if="link.access_level == 'public'" class="text-dodger-blue-600 hover:text-dodger-blue-400"
                        :href="link.link">{{ link.link_name
                        }}</a>
                </span>
            </div>
            <div v-else>
                <span class="italic">No links have been added yet, check again later</span>
            </div>
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
            resources: {},
            links: {},
            appUrl: process.env.VUE_APP_BASE_URL,
            showParticipantModal: false,
            currentPage: 1,
            totalPages: "",
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            apiUrl: process.env.VUE_APP_API_URL,
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
                this.resources = response.resource_files;
                this.links = response.links;
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
        getFullImageUrl(filePath) {
            return `${this.apiUrl}/${filePath}`;
        }
    },
};
</script>