<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="flex flex-col border border-abbey-600 border-t-8 bg-white-100 rounded-xl shadow-lg w-5/12 z-50">
      <div class="font-bold text-lg text-abbey-500 p-4 px-6 space-y-4 border-b border-abbey-600">
        Make Payment
      </div>
      <div v-if="message" class="p-4 m-6 m-y-4 rounded-xl text-mountain-meadow-800 py-2 text bg-spray-600">
        {{ message }}
      </div>
      <img class="w-48 pt-4" src="@/assets/images/visa.png">
      <form class="flex flex-col space-y-4 p-4 px-6" @submit.prevent="payForEvent" method="POST">
        <SpinnerComponent v-if="isLoading" />

        <label class="flex sm:flex-row flex-col sm:space-x-4 space-y-2">
          <input type="number" name="card_number" v-model="eventPaymentData.card_number"
            class="mt-2 w-10/12 py-3 px-3 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block rounded-xl sm:text-sm focus:ring-1"
            placeholder="Card Number" required />
          <input type="number" name="csv" v-model="eventPaymentData.csv"
            class="mt-2 w-2/12 py-3 px-3 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block rounded-xl sm:text-sm focus:ring-1"
            placeholder="CSV" required />
        </label>

        <label class="flex sm:flex-row flex-col sm:space-x-4 space-y-2">
          <input type="text" name="card_number" v-model="eventPaymentData.card_holder"
            class="mt-2 w-full py-3 px-3 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block rounded-xl sm:text-sm focus:ring-1"
            placeholder="Card Holder Name" required />
        </label>

        <label class="flex sm:flex-row flex-col sm:space-x-4 space-y-2">
          <input type="email" name="email" v-model="eventPaymentData.email"
            class="mt-2 w-full py-3 px-3 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block rounded-xl sm:text-sm focus:ring-1"
            placeholder="Email" required />
        </label>

        <label class="flex sm:flex-row flex-col sm:space-x-4 space-y-2">
          <input type="text" name="card_number" v-model="eventPaymentData.month"
            class="mt-2 w-5/12 py-3 px-3 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block rounded-xl sm:text-sm focus:ring-1"
            placeholder="Exp month" required />
          <input type="integer" name="csv" v-model="eventPaymentData.year"
            class="mt-2 w-7/12 py-3 px-3 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block rounded-xl sm:text-sm focus:ring-1"
            placeholder="Exp year" required />
        </label>

        <div class="flex flex-row space-x-4">
          <button type="submit" class="mt-2 px-4 py-1 text-white-100 bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl">
            Complete Payment ($150)
          </button>
          <div @click="cancel"
            class="mt-2 px-4 py-1 boder border-2 border-abbey-400 hover:border-abbey-200 rounded-2xl cursor-pointer">
            Close</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createItem } from "@/services/apiService";
import SpinnerComponent from "@/components/Spinner.vue";

export default {
  components: {
    SpinnerComponent
  },
  data() {
    return {
      eventPaymentData: {
        event_id: "",
        card_number: "",
        csv: "",
        email: "",
        card_holder: "",
        year: "",
        month: "",
      },
      isLoading: false,
      message: "",
    };
  },


  props: {
    show: {
      type: Boolean,
      required: true,
    },
    event_id: {
      type: Number,
      required: true,
    },
  },

  methods: {
    async payForEvent() {
      this.eventPaymentData.event_id = this.event_id
      this.isLoading = true;
      try {
        const response = await createItem("events/online_payment", this.eventPaymentData);
        this.participants = response.data;
        this.isLoading = false;
        this.$emit("paid")
        this.message = "Successfully paid for an event";
      } catch (error) {
        console.error("Error paying for event:", error);
        this.isLoading = false;
      }
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>
