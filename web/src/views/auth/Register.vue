<template>
    <div class="sm:flex sm:flex-row flex flex-col flex-1 justify-center items-center">
        <div class="w-7/12 flex flex-col sm:space-y-4 space-y-2 rounded-2xl p-8 bg-ghost-300 drop-shadow-md">
            <div class="font-bold font-archivo text-ghost-900 text-3xl">Sign up</div>
            <div
                class="p-4 text-md border border-solid border-great-blue-400 bg-great-blue-50 text-great-blue rounded-md font-roboto">
                Sign up to register for an event</div>
            <div v-if="message" class="text-flamingo-500">{{ message }}</div> <!-- Display error message -->
            <form class="flex flex-col space-y-4" @submit.prevent="submitLoginForm" method="POST">
                <label class="block">
                    <input type="text" name="title" v-model="userData.title"
                        class="mt-2 p-4 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Title" required />
                </label>
                <label class="flex flex-row space-x-4">
                    <input type="text" name="firstname" v-model="userData.firstname"
                        class="mt-2 p-4 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Firstname" required />
                    <input type="text" name="lastname" v-model="userData.lastname"
                        class="mt-2 p-4 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Lastname" required />
                </label>
                <label class="flex flex-row space-x-4">
                    <input type="text" name="phone" v-model="userData.phone"
                        class="mt-2 p-4 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Phone" required />
                    <input type="email" name="email" v-model="userData.email"
                        class="mt-2 p-4 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Email" required />
                </label>
                <label class="flex flex-row space-x-4">
                    <input type="text" name="institution" v-model="userData.institution"
                        class="mt-2 p-4 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Institution" required />
                    <input type="text" name="country" v-model="userData.country"
                        class="mt-2 p-4 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Country" required />
                </label>
                <div class="flex flex-row space-x-4">
                    <button type="submit"
                        class="flex-1 px-8 py-4 text-white-50 font-bold rounded-full bg-bondi-blue text-stone-100 hover:bg-bondi-blue-600">
                        Register
                    </button>
                </div>
                <div class="flex flex-row space-x-4 justify-center">
                    <p class="">
                        Already have an account? <router-link :to="{ name: 'Login' }">Sign in</router-link>
                    </p>
                    <p>|</p>
                    <p class="">Need help?
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { login } from "@/services/authService";
import SpinnerComponent from "@/components/Spinner.vue";
import router from "@/router";
import { useAuthStore } from "@/store/authStore";
import { setAuthToken } from "@/services/apiService"; // Adjust the path as needed

export default {
    name: 'RegisterView',
    data() {
        return {
            userData: {
                username: "",
                password: "",
            },
            SpinnerComponent,
            message: null,
            isLoading: false,
        };
    },
    methods: {
        async submitLoginForm() {
            this.isLoading = true;
            try {
                const response = await login("auth/login", this.userData);
                // saveTokenToLocalStorage(response.access_token);
                const authStore = useAuthStore();
                authStore.setUser(response.user);
                authStore.setPermissions(response.permissions);
                authStore.setAccessToken(response.access_token);
                setAuthToken();

                this.isLoading = false;

                this.$nextTick(() => {
                    router.push("/dashboard");
                });
            } catch (error) {
                this.message = "Invalid username or password!"; // Set the error message
                this.isLoading = false;
            }
        },
    },
}
</script>