<template>
    <div class="flex flex-col space-y-6 flex-1 items-center">
        <SpinnerComponent v-if="isLoading" />
        <div v-else class="flex flex-col w-11/12 justify-center items-center space-y-4">
            <div class="flex flex-row sm:w-10/12 w-full border-2 border-abbey-500 rounded-xl text-center py-2">
                <div class="flex flex-col w-full space-y-2">
                    <div class="font-roboto-light text-bondi-blue-500 text-xl p-4">{{ event.event }}</div>
                    <div class="font-roboto-light text-md">
                        {{ formatDate(event.start_date) }} - {{ formatDate(event.end_date) }}
                    </div>
                    <div class="font-roboto-light text-md"><span class="font-bold">Reg date:</span>
                        {{ formattedDate }}
                    </div>
                    <h1 class="px-4 py-2 bg-abbey-500 font-bold text-white-100">Confirm Attendance</h1>
                    <div class="flex flex-col">
                        <div class="flex flex-col px-4 items-center justify-center">
                            <div class="p-1 px-4 rounded-md text-sm bg-bondi-blue-200 border border-bondi-blue-400 text-bondi-blue-800"
                                v-if="errorMsg">{{ errorMsg
                                }}</div>
                            <div class="p-1 px-4 rounded-md text-sm bg-mountain-meadow-100 border border-mountain-meadow-400 text-mountain-meadow-800"
                                v-if="successMsg">
                                {{ successMsg
                                }}</div>
                            <form @submit.prevent="confirmAttendance" method="POST"
                                class="sm:w-12/12 bg-ghost-300 p-2 px-6 rounded-xl my-4">
                                <span class="font-roboto-light text-sm">Enter ID # to confirm
                                    attendance</span>
                                <input v-model="attendanceConfirmData.user_id"
                                    class="mt-2 px-4 py-2 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Identification Number" />
                                <button type="submit"
                                    class="mt-2 px-4 py-2 text-sm text-white-100 bg-abbey-600 hover:bg-abbey-400 rounded-md">
                                    Confirm Attendance
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import { createItem, fetchItem } from "@/services/apiService";
import SpinnerComponent from "@/components/Spinner.vue";

export default {
    name: "AttendanceView",
    components: {
        SpinnerComponent
    },
    data() {
        return {
            headerTitle: "Event Attendance Register",
            eventId: this.$route.params.eventId,
            event: {},
            appUrl: process.env.VUE_APP_BASE_URL,
            apiUrl: process.env.VUE_APP_API_URL,
            isLoading: true,
            today: new Date(),
            attendanceConfirmData: {
                event_id: "",
                user_id: "",
            },
            errorMsg: null,
            successMsg: null
        };
    },
    computed: {
        formattedDate() {
            return this.today.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    },
    mounted() {
        this.getEventAttendance();
    },
    methods: {
        async getEventAttendance() {
            try {
                const response = await fetchItem("events/event", this.eventId);
                this.event = response.event;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching event:", error);
                this.isLoading = false;
            }
        },
        async confirmAttendance() {
            this.attendanceConfirmData.event_id = this.eventId
            this.isLoading = true;
            try {
                const response = await createItem("events/confirm_event_attendance/", this.attendanceConfirmData);
                this.events = response.data;
                this.isLoading = false;
                this.errorMsg = null;
                this.successMsg = "Succefully confirmed attendance for today"
                this.getEventAttendance();
            } catch (error) {
                this.successMsg = null
                this.errorMsg = error.response.data.detail
                this.isLoading = false;
            }
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