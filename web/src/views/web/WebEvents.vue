<template>
    <div class="flex flex-col space-y-6 flex-1 items-center">
        <div class="flex flex-col space-y-4 w-11/12">
            <div
                class="s:w-10/12 w-12/12 sm:font-roboto font-roboto text-abbey-600 sm:text-4xl text-xl font-bold sm:text-left text-center">
                Discover the
                Latest
                Events at
                ECSACONM
            </div>
            <form class="sm:w-7/12 w-full" @submit.prevent="addEvent" method="POST">
                <div class="flex space-x-4 text-sm">
                    <input name="event" v-model="searchPhrase"
                        class="sm:w-8/12 w-8/12 sm:p-3 p-2 border border-1 rounded-md shadow-sm border-abbey-300"
                        placeholder="example:'scientific'" />
                    <button
                        class="sm:w-4/12 w-4/12 text-md sm:p-3 p-2 text-white-100 bg-bondi-blue hover:bg-bondi-blue-400 rounded-md">Search
                        events</button>
                </div>
            </form>
            <div class="w-11/12 sm:text-left text-center">
                Click the event title for event full details
            </div>
        </div>
        <SpinnerComponent v-if="isLoading" />
        <div v-else class="flex flex-col w-11/12 justify-center items-center space-y-4">
            <div class="flex flex-col space-y-4 w-full">
                <div v-for="(event) in events" :key="event.id" class="flex flex-col w-full items-center">
                    <div
                        class="flex flex-col items-start text-start space-y-1 w-full rounded-md p-4 border border-mercury-500">
                        <router-link :to="{ name: 'WebEvent', params: { id: event.id } }"
                            class="sm:text-3xl text-xl font-roboto-light text-bondi-blue-600 normal-case">{{
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
                            <span>: {{ formatDate(event.start_date) }} - {{ formatDate(event.start_date) }}</span>
                        </div>
                        <div class="flex">
                            <span>
                                <MapPinIcon class="w-5 h-5 text-abbey-700"></MapPinIcon>
                            </span>
                            <span>: {{ event.location }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchData } from "@/services/apiService";
import { MapPinIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid';
import SpinnerComponent from "@/components/Spinner.vue";

export default {
    name: "WebEventsView",
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
        };
    },
    mounted() {
        this.getEvents();
    },
    methods: {
        async getEvents() {
            try {
                const response = await fetchData("events/", this.currentPage, this.pageSize, this.searchPhrase);
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