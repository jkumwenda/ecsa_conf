<template>
    <div class="flex flex-col space-y-6 flex-1 items-center">
        <div class="s:w-12/12 w-12/12 sm:font-archivo font-roboto text-abbey-500 sm:text-3xl">Discover the
            Latest
            Events at
            ECSA-HC
        </div>
        <div class="text-md">Click on the event <span class="font-bold">title</span> to register or confirm your
            participation</div>
        <SpinnerComponent v-if="isLoading" />
        <div class="flex flex-col w-10/12 justify-center items-center space-y-4" v-else>
            <div v-for="(event) in events" :key="event.id" class="flex flex-col w-full items-center">
                <div
                    class="flex flex-col border w-full rounded-3xl p-4 border-solid border-great-blue-400 bg-great-blue-50 drop-shadow">
                    <router-link :to="{ name: 'WebEvent', params: { id: event.id } }"
                        class="font-archivo text-md text-bondi-blue-600">{{ event.event }}</router-link>
                    <div class="flex">
                        <span>
                            <CalendarDaysIcon class="w-5 h-5 text-neon-carrot-700"></CalendarDaysIcon>
                        </span>
                        <span>: {{ event.start_date }} - {{ event.start_date }}</span>
                    </div>
                    <div class="flex">
                        <span>
                            <MapPinIcon class="w-5 h-5 text-neon-carrot-700"></MapPinIcon>
                        </span>
                        <span>: {{ event.location }}</span>
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