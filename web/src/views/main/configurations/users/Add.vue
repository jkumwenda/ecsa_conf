<template>
  <div class="flex flex-col space-y-4 flex-1">
    <HeaderView :headerTitle="headerTitle"></HeaderView>
    <SpinnerComponent v-if="isLoading" />
    <div v-else class="rounded-2xl bg-catskill-white-100 shadow-sm p-4">
      <div v-if="message" class="p-4 mb-4 rounded-xl py-2 text bg-buttercup-300">
        {{ message }}
      </div>
      <form class="flex flex-col sm:w-5/12 w-full space-y-4" @submit.prevent="addUser" method="POST">
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Firtsname
          </span>
          <input type="input" name="firstname" v-model="userData.firstname"
            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
            placeholder="Firstname" />
        </label>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Lastname
          </span>
          <input type="input" name="lastname" v-model="userData.lastname"
            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
            placeholder="Lastname" />
        </label>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email address
          </span>
          <input type="email" name="email" v-model="userData.email"
            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
            placeholder="you@example.com" />
        </label>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Phone
          </span>
          <input type="text" name="phone" v-model="userData.phone"
            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
            title="Please enter a valid 10-digit phone number" placeholder="Phone number" required />
        </label>
        <div class="flex flex-row space-x-4">
          <button type="submit" class="mt-2 px-4 py-2 text-white-100 bg-bondi-blue hover:bg-bondi-blue-400 rounded-2xl">
            Add user
          </button>
          <router-link :to="{ name: 'Users' }"
            class="mt-2 px-4 py-2 boder border-2 border-abbey-400 hover:border-abbey-200 rounded-2xl">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { createItem } from "@/services/apiService";
import HeaderView from '@/includes/Header.vue'
import SpinnerComponent from "@/components/Spinner.vue";
import router from "@/router";

export default {
  name: "AddUserView",
  components: {
    HeaderView, SpinnerComponent
  },
  data() {
    return {
      headerTitle: "Add users",
      userData: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
      },
      message: "",
      isLoading: false,
    };
  },
  methods: {
    async addUser() {
      this.isLoading = true;
      try {
        const response = await createItem("users/", this.userData);
        this.users = response.data;
        this.isLoading = false;
        router.push("/users");
      } catch (error) {
        console.error("Error fetching users:", error.response.data.detail);
        this.message = error.response.data.detail
        this.isLoading = false;
      }
    },
  },
};
</script>
