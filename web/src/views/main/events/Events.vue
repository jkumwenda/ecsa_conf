<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle"></HeaderView>
        <div class="flex flex-col space-y-4">
            <div class="flex justify-between items-center">
                <search-component @search="handleSearch"></search-component>
                <router-link :to="{ name: 'AddEvent' }" v-if="permissions.includes('ADD_EVENT')"
                    class="mt-2 px-4 py-2 text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400 rounded-2xl">
                    Add Event</router-link>
            </div>
            <SpinnerComponent v-if="isLoading" />
            <div v-else class="rounded-2xl border border-white-600 shadow-sm text-abbey-500">
                <div class="flex">
                    <div class="sm:w-4/12" v-for="(event) in events" :key="event.id">
                        <div class="flex flex-col flex-1 m-4 text-sm rounded-2xl border-2 border-bondi-blue-500">
                            <router-link :to="{ name: 'Event', params: { id: event.id } }" class="p-3" title="Event">
                                <div>{{ event.event }}</div>
                            </router-link>
                            <div class="bg-bondi-blue-500 rounded-b-xl">
                                <div
                                    class="flex flex-col space-y-2 text-white font-roboto-thin border-b border-bondi-blue-400 p-3">
                                    <div class="flex flex-row items-center space-x-3" title="Event date">
                                        <CalendarDaysIcon class="w-5 h-5 text-bondi-blue-50"></CalendarDaysIcon>
                                        <span>{{ event.start_date }}</span>
                                    </div>
                                    <div class="flex flex-row items-center space-x-3" title="Location">
                                        <MapPinIcon class="w-5 h-5 text-bondi-blue-50"></MapPinIcon><span>{{
                                            event.location
                                        }}</span>
                                    </div>
                                    <div class="flex flex-row items-center space-x-3" title="Organiser">
                                        <UserIcon class="w-5 h-5 text-bondi-blue-50"></UserIcon><span>{{
                                            event.organiser.organiser
                                        }}</span>
                                    </div>
                                </div>

                                <div class="flex space-x-2 px-4 p-1 font-semibold font-roboto-thin sm:w-2/12">
                                    <router-link title="Edit" v-if="permissions.includes('UPDATE_EVENT')"
                                        class="p-1 px-3 text-mountain-meadow-900 bg-mountain-meadow-300 border border-mountain-meadow-800  rounded-xl"
                                        :to="{ name: 'EditEvent', params: { id: event.id } }">Edit
                                    </router-link>
                                    <div title="Delete" v-if="permissions.includes('DELETE_EVENT')"
                                        @click="showDeleteConfirmation(event.id)"
                                        class="p-1 px-3 border text-flamingo-900 border-flamingo-700 bg-flamingo-400 rounded-xl cursor-pointer">
                                        Delete
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-4">
                    <pagination-component :currentPage="currentPage" :totalPages="totalPages"
                        @page-change="handlePageChange">
                    </pagination-component>
                </div>
            </div>
        </div>
        <delete-confirmation-modal :show="showDeleteModal" @confirmed="deleteEvent(deleteEventId)"
            @canceled="cancelDelete"></delete-confirmation-modal>
    </div>
</template>

<script>
import HeaderView from '@/includes/Header.vue'
import { MapPinIcon, CalendarDaysIcon, UserIcon } from '@heroicons/vue/24/solid'
import PaginationComponent from '@/components/PaginationComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'

import { fetchData, deleteItem } from "@/services/apiService";
import SpinnerComponent from "@/components/Spinner.vue";
import DeleteConfirmationModal from "@/components/DeleteConfirmationModal.vue";
import { useAuthStore } from "@/store/authStore";

export default {
    name: 'EventsView',
    components: {
        MapPinIcon, CalendarDaysIcon, UserIcon, PaginationComponent, SearchComponent, HeaderView, SpinnerComponent, DeleteConfirmationModal
    },
    data() {
        return {
            headerTitle: "Events",
            events: {},
            isLoading: true,
            showDeleteModal: false,
            deleteEventId: null,
            currentPage: 1,
            totalPages: "",
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            searchPhrase: ""
        };
    },
    mounted() {
        this.getEvents();
    },
    setup() {
        const authStore = useAuthStore()
        const permissions = authStore.permissions
        return { permissions }
    },
    methods: {
        async getEvents() {
            try {
                const response = await fetchData("events", this.currentPage, this.pageSize, this.searchPhrase);
                this.events = response.data;
                this.totalPages = response.pages;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching events:", error);
                this.isLoading = false;
            }
        },
        async handleSearch(searchQuery) {
            this.searchPhrase = searchQuery
            this.getEvents();
        },
        async handlePageChange(newPage) {
            this.currentPage = newPage;
            this.getEvents();
        },
        async deleteEvent(id) {
            this.isLoading = true;
            try {
                await deleteItem("events", id);
                const index = this.events.findIndex((event) => event.id === id);
                if (index !== -1) {
                    this.events.splice(index, 1);
                }
                this.showDeleteModal = false;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching events:", error);
                this.isLoading = false;
                this.showDeleteModal = false;
            }
        },
        showDeleteConfirmation(id) {
            this.deleteEventId = id;
            this.showDeleteModal = true;
        },
        cancelDelete() {
            this.showDeleteModal = false;
        },
        getRowClass(index) {
            return index % 2 === 0 ? 'bg-st-tropaz-100' : 'bg-shuttle-gray-50';
        },
    }
}
</script>