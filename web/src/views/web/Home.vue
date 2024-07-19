<template>
    <div class="flex flex-col space-y-8 flex-1 items-center">
        <div class="flex sm:flex-row flex-col justify-center items-center sm:space-x-10 space-y-4 sm:w-10/12">
            <div
                class="flex flex-col sm:items-normal items-center sm:w-8/12 w-full sm:space-y-4 space-x-2 sm:apercu font-roboto text-abbey-600">
                <div class="w-full items-center sm:text-start text-center sm:font-roboto-thin sm:text-6xl text-2xl">
                    Find events at ECSACONM
                </div>

                <div class="flex flex-col w-full flex-1 justify-start items-start">
                    <form class="w-full" @submit.prevent="addEvent" method="POST">
                        <div class="flex space-x-4 text-sm">
                            <input name="event" v-model="eventData.event"
                                class="sm:w-8/12 w-8/12 sm:p-3 p-2 border border-1 rounded-md shadow-sm border-abbey-300"
                                placeholder="example:'scientific'" />
                            <button
                                class="sm:w-4/12 w-4/12 text-sm sm:p-3 p-2 text-white-100 bg-bondi-blue hover:bg-bondi-blue-400 rounded-md">Search
                                events</button>
                        </div>
                    </form>
                </div>

            </div>
            <div class="bg-bondi-blue-300 sm:w-4/12 w-11/12">
                <img src="@/assets/images/ecsacon.jpeg">
            </div>
        </div>
        <div class="sm:w-12/12 w-12/12 sm:apercu font-roboto text-abbey-600 sm:text-4xl text-2xl">
            Upcoming Events
        </div>
        <SpinnerComponent v-if="isLoading" />
        <div class="flex flex-col w-10/12 justify-center items-center space-y-4" v-else>
            <div class="flex flex-col space-y-4 w-full">
                <div v-for="(event) in events" :key="event.id" class="flex flex-col w-full items-center">
                    <div class="flex flex-col w-full rounded-md pb-1 drop-shadow">
                        <router-link :to="{ name: 'WebEvent', params: { id: event.id } }"
                            class="font-roboto-light sm:text-4xl text-xl text-bondi-blue-600 capitalize">{{
                                event.event }}
                        </router-link>

                        <div class="flex pt-2">
                            <span>
                                {{ event.description }}
                            </span>
                        </div>
                        <div class="flex pl-2">
                            <span>
                                <CalendarDaysIcon class="w-5 h-5 text-abbey-700"></CalendarDaysIcon>
                            </span>
                            <span>: {{ formatDate(event.start_date) }} - {{ formatDate(event.start_date) }}</span>
                        </div>
                        <div class="flex pl-2">
                            <span>
                                <MapPinIcon class="w-5 h-5 text-abbey-700"></MapPinIcon>
                            </span>
                            <span>: {{ event.location }}</span>
                        </div>
                        <router-link :to="{ name: 'WebEvent', params: { id: event.id } }"
                            class="sm:px-8 px-2 sm:py-2 py-1 rounded-full border border-bondi-blue-500 text-stone-100 hover:bg-bondi-blue-600">
                            Register for event
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchData } from "@/services/apiService";
import { MapPinIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid'
import SpinnerComponent from "@/components/Spinner.vue";

export default {
    name: "HomeView",
    components: {
        MapPinIcon, CalendarDaysIcon, SpinnerComponent
    },
    data() {
        return {
            events: {},
            currentPage: 1,
            totalPages: "",
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            searchPhrase: "",
            isLoading: true,
            eventData: {
                event: "",
                event_type_id: "",
                country_id: "",
                organiser_id: "",
                location: "",
                capacity: "",
                description: "",
                start_date: "",
                end_date: "",
                registration_start_date: "",
                registration_end_date: "",
            },
        };
    },
    mounted() {
        this.getActiveEvents();
    },
    methods: {
        async getActiveEvents() {
            try {
                const response = await fetchData("events/active/", this.currentPage, this.pageSize, this.searchPhrase);
                this.events = response.data;
                this.totalPages = response.pages;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching events:", error);
                this.isLoading = false;
            }
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
    },
};
</script>