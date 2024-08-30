<template>
    <div class="flex flex-col space-y-8 flex-1 items-center">
        <div class="flex sm:flex-row flex-col justify-center items-center sm:space-x-10 space-y-4 sm:w-11/12">
            <div
                class="flex flex-col sm:items-normal items-center sm:w-8/12 w-full sm:space-y-4 space-x-2 sm:apercu font-roboto text-abbey-600">
                <div class="sm:w-11/12 w-full sm:text-left text-center font-roboto text-abbey-600 sm:text-4xl text-2xl">
                    Upcoming Events
                </div>
                <SpinnerComponent v-if="isLoading" />
                <div class="flex flex-col w-11/12 justify-center items-center space-y-4" v-else>
                    <div class="flex flex-col space-y-4 w-full">
                        <div v-for="(event) in events" :key="event.id" class="flex flex-col w-full items-center">
                            <div
                                class="flex flex-col sm:items-start items-center sm:text-start text-center space-y-2 w-full rounded-md pb-1 drop-shadow">
                                <router-link :to="{ name: 'WebEvent', params: { id: event.id } }"
                                    class="font-roboto-light sm:text-3xl text-xl text-bondi-blue-600 normal-case">{{
                                        event.event }}
                                </router-link>
                                <div class="flex pt-2">
                                    <span>
                                        {{ event.description }}
                                    </span>
                                </div>
                                <div class="flex">
                                    <span>
                                        <CalendarDaysIcon class="w-5 h-5 text-abbey-700"></CalendarDaysIcon>
                                    </span>
                                    <span>: {{ formatDate(event.start_date) }} - {{ formatDate(event.start_date)
                                        }}</span>
                                </div>
                                <div class="flex">
                                    <span>
                                        <MapPinIcon class="w-5 h-5 text-abbey-700"></MapPinIcon>
                                    </span>
                                    <span>: {{ event.location }}</span>
                                </div>
                                <router-link :to="{ name: 'Login' }"
                                    class="sm:px-4 px-2 sm:py-2 py-1 rounded-md border  border-bondi-blue-500 text-bondi-blue-600 hover:text-bondi-blue-100  hover:bg-bondi-blue-600">
                                    Login or Sign Up to register for this event
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="bg-bondi-blue-300 sm:w-4/12 w-11/12">
                <img src="@/assets/images/ecsacon.png">
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