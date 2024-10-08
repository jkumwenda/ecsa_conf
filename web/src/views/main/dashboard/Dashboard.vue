<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle" />
        <div class="flex sm:flex-row flex-col sm:space-x-4 sm:space-y-0 space-y-4 ">
            <div class="sm:w-4/12 w-12/12 space-y-1 rounded-xl border border-white-600 shadow-sm p-4 text-abbey-500">
                <div class="py-3 px-3 rounded-xl text-white-50 text font-roboto-thin bg-daintree-700">My Profile</div>
                <div class="flex items-center justify-center py-4">
                    <img v-if="!user_profile.picture" src="@/assets/images/profile.jpg"
                        class="rounded-xl border-4 border-st-tropaz-300 h-48" />
                    <img v-else :src="getFullImageUrl(user_profile.picture)" alt="Profile Picture"
                        class="rounded-xl border-4 border-st-tropaz-300 h-48" />
                </div>
                <input type="file" name="profilePicture" @change="uploadProfilePicture">
                <ProfileDetail label="Name"
                    :value="`${user_profile.title} ${user_profile.firstname} ${user_profile.lastname}`" />
                <ProfileDetail label="Phone" :value="user_profile.phone" />
                <ProfileDetail label="Email" :value="user_profile.email" />
                <ProfileDetail label="Designation" :value="user_profile.institution" />
                <ProfileDetail label="Country" :value="user_profile.country" />
            </div>
            <div class="flex-1 space-y-2 rounded-xl border border-white-600 shadow-sm p-4 text-abbey-500">
                <div class="py-3 px-3 rounded-xl text-white-50 text font-roboto-thin bg-daintree-700">Upcoming Events
                </div>
                <div v-if="message" class="my-4 rounded-xl text-mountain-meadow-800 py-2 bg-spray-600">
                    {{ message }}
                </div>
                <SpinnerComponent v-if="isLoading" />
                <div v-else class="flex flex-col space-y-2">
                    <EventItem v-for="(current_event, index) in current_events" :key="current_event.id"
                        :event="current_event" :index="index" :getRowClass="getRowClass"
                        :getRegistrationStatus="getRegistrationStatus" :getRegisteredStatus="getRegisteredStatus"
                        @register="registerForEvent" :getPaidStatus="getPaidStatus" @pay="payForEvent"
                        @deregister="showDeleteConfirmation" />
                </div>
            </div>
        </div>
        <DeleteConfirmationModal :show="showDeleteModal" @confirmed="deregisterForEvent(deleteEventId)"
            @canceled="cancelDelete" />
        <RegisterEventModal :show="showRegisterForEventModal" @closed="cancelRegisterEvent" :event_id="event_id"
            @registered="confirmRegisterEvent" />
        <PayEventModal :show="showPayForEventModal" @cancel="cancelPayEvent" :event_id="event_id"
            @paid="confirmPaidEvent" />

    </div>
</template>

<script>
import HeaderView from '@/includes/Header.vue';
import { fetchData, deleteItem, createItem } from '@/services/apiService';
import SpinnerComponent from '@/components/Spinner.vue';
import DeleteConfirmationModal from '@/components/DeleteConfirmationModal.vue';
import RegisterEventModal from '@/components/RegisterEventModal.vue';
import PayEventModal from '@/components/PayEventModal.vue';
import EventItem from '@/components/EventItem.vue';
import ProfileDetail from '@/components/ProfileDetail.vue';

export default {
    name: 'DashboardView',
    components: {
        HeaderView,
        SpinnerComponent,
        DeleteConfirmationModal,
        RegisterEventModal,
        PayEventModal,
        EventItem,
        ProfileDetail,
    },
    data() {
        return {
            headerTitle: 'Dashboard',
            current_events: [],
            user_events: [],
            user_profile: {},
            isLoading: true,
            showDeleteModal: false,
            deleteEventId: null,
            currentPage: 1,
            totalPages: '',
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            apiUrl: process.env.VUE_APP_API_URL,
            searchPhrase: '',
            event_id: null,
            showRegisterForEventModal: false,
            showPayForEventModal: false,
            message: null,
            file: null,
        };
    },
    mounted() {
        this.getDashboardData();
    },
    methods: {
        async getDashboardData() {
            try {
                const response = await fetchData('dashboard', this.currentPage, this.pageSize, this.searchPhrase);
                this.current_events = response.current_events;
                this.user_profile = response.user_details.user;
                this.user_events = response.user_details.user_events;
                this.isLoading = false;
            } catch (error) {
                console.error('Error fetching active events:', error);
                this.isLoading = false;
            }
        },
        getRowClass(index) {
            return index % 2 === 0 ? 'bg-st-tropaz-100' : 'bg-shuttle-gray-50';
        },
        getRegistrationStatus(registration_end_date) {
            const regDate = new Date(registration_end_date);
            const today = new Date();
            return regDate > today ? 'open' : 'closed';
        },
        getRegisteredStatus(event_id) {
            return this.user_events.some(event => event.event_id === event_id);
        },
        getPaidStatus() {
            return this.user_events.some(event => event.event_payment === true);
        },
        async deregisterForEvent(event_id) {
            this.isLoading = true;
            try {
                await deleteItem('events/deregister', event_id);
                this.showDeleteModal = false;
                this.isLoading = false;
                this.getDashboardData();
            } catch (error) {
                console.error('Error fetching events:', error);
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
        registerForEvent(event_id) {
            this.event_id = event_id;
            this.showRegisterForEventModal = true;
        },
        confirmRegisterEvent() {
            this.getDashboardData();
            this.message = 'Successfully registered for an event';
            this.showRegisterForEventModal = false;
        },
        cancelRegisterEvent() {
            this.showRegisterForEventModal = false;
        },
        payForEvent(event_id) {
            this.event_id = event_id;
            this.showPayForEventModal = true;
        },
        confirmPaidEvent() {
            this.getDashboardData();
            this.message = 'Successfully paid for an event';
            this.showPayForEventModal = false;
        },
        cancelPayEvent() {
            this.showPayForEventModal = false;
        },
        async uploadProfilePicture(e) {
            this.file = e.target.files[0];
            if (!this.file) {
                alert("Please select a file!");
                return;
            }
            const formData = new FormData();
            formData.append("profilePicture", this.file); // Ensure this matches FastAPI endpoint

            try {
                const response = await createItem("dashboard/upload_profile/", formData);
                this.profile = response;
                this.isLoading = false;
                this.getDashboardData();
            } catch (error) {
                console.error("Error uploading profile picture:", error);
                this.isLoading = false;
            }
        },
        getFullImageUrl(picturePath) {
            return `${this.apiUrl}/${picturePath}`;
        }
    },
};
</script>
