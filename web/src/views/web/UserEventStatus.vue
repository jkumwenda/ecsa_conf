<template>
    <div class="flex flex-col space-y-6 flex-1 items-center">
        <SpinnerComponent v-if="isLoading" />
        <div v-else class="flex flex-col w-11/12 justify-center items-center space-y-4">
            <div class="flex flex-row sm:w-10/12 w-full border-2 border-abbey-500 rounded-xl text-center py-2">
                <div class="flex flex-col w-full space-y-2">
                    <div class="font-roboto-light text-xl p-4">{{ userEvent.event }}</div>
                    <h1 class="px-4 py-2 bg-bondi-blue-500 font-bold text-white-100">User details</h1>
                    <div class="flex flex-col">
                        <span>{{ userEvent.title }} {{ userEvent.firstname }} {{ userEvent.lastname }}</span>
                        <span>{{ userEvent.email }}</span>
                        <span>{{ userEvent.institution }}</span>
                        <span>{{ userEvent.participant_country }}</span>
                        <span>{{ userEvent.participant_category }}</span>
                    </div>
                    <h1 class="px-4 py-2 bg-abbey-500 font-bold text-white-100">Payment Status</h1>
                    <div class="flex flex-col">
                        <span v-if="userEvent.event_payment" class="font-bold text-mountain-meadow-800">Paid</span>
                        <div v-else class="flex flex-col px-4 items-center justify-center">
                            <span class="italic text-bondi-blue-700 font-bold">Not paid</span>
                            <div class="p-1 px-4 rounded-md text-sm bg-bondi-blue-200 border border-bondi-blue-400 text-bondi-blue-800"
                                v-if="errorMsg">{{ errorMsg }}</div>
                            <div class="p-1 px-4 rounded-md text-sm bg-mountain-meadow-100 border border-mountain-meadow-400 text-mountain-meadow-800"
                                v-if="successMsg">
                                {{ successMsg
                                }}</div>
                            <form @submit.prevent="confirmPayment" method="POST"
                                class="sm:w-12/12 bg-ghost-300 p-2 px-6 rounded-xl my-4">
                                <span class="font-roboto-light text-sm">Enter key to confirm payment</span>
                                <input v-model="paymentConfirmData.private_key"
                                    class="mt-2 px-2 py-2 bg-white border border-1 shadow-sm border-abbey-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Private key" />
                                <button type="submit"
                                    class="mt-2 px-4 py-2 text-sm text-white-100 bg-abbey-600 hover:bg-abbey-400 rounded-md">
                                    Confirm Payment
                                </button>
                            </form>
                        </div>
                    </div>
                    <h1 class="px-4 py-2 bg-abbey-200 font-bold text-white-100">Attendance Register</h1>
                    <div class="flex flex-col pb-4">
                        <div v-if="attendances.length > 0" class="flex flex-col items-center">
                            <span v-for="attendance in attendances" :key="attendance.id"
                                class="flex flex-row space-x-2">
                                <span>{{ formatDate(attendance.date) }}</span>
                                <CheckCircleIcon class="w-5 h-5 text-mountain-meadow-800 cursor-pointer" />
                            </span>
                        </div>
                        <div v-else class="italic text-sm">Not attendance registered yet</div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>

</template>

<script>
import { fetchItemMultiple, createItem } from "@/services/apiService";
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
import SpinnerComponent from "@/components/Spinner.vue";

export default {
    name: "UserEventStatusView",
    components: {
        SpinnerComponent, CheckCircleIcon
    },
    data() {
        return {
            headerTitle: "User Event Status",
            userId: this.$route.params.userId,
            eventId: this.$route.params.eventId,
            userEvent: "",
            attendances: {},
            appUrl: process.env.VUE_APP_BASE_URL,
            apiUrl: process.env.VUE_APP_API_URL,
            isLoading: true,
            paymentConfirmData: {
                private_key: "",
                event_id: "",
                user_id: "",
            },
            errorMsg: null,
            successMsgMsg: null
        };
    },
    mounted() {
        this.getUserEvent();
    },
    methods: {
        async getUserEvent() {
            this.errorMsg = null
            try {
                const response = await fetchItemMultiple("events", "user", "event", this.userId, this.eventId,);
                this.userEvent = response.user_event;
                this.attendances = response.attendance;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching user event:", error);
                this.isLoading = false;
            }
        },
        async confirmPayment() {
            this.paymentConfirmData.event_id = this.eventId
            this.paymentConfirmData.user_id = this.userId
            console.log(this.paymentConfirmData.private_key, "JOEL KUMWENDA")
            if (this.paymentConfirmData.private_key == 202409) {
                this.isLoading = true;
                try {
                    const response = await createItem("events/confirm_event_payment/", this.paymentConfirmData);
                    this.events = response.data;
                    this.isLoading = false;
                    this.errorMsg = null;
                    this.successMsg = "Succefully confirmed attendance for today"
                    this.getUserEvent();
                } catch (error) {
                    console.error("Error fetching event payment:", error);
                    this.isLoading = false;
                }
            }
            this.errorMsg = "Invalid key, only secretariat can confirm payment"
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