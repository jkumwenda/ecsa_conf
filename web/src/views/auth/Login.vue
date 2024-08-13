<template>
    <div class="sm:flex sm:flex-row flex flex-col flex-1 justify-center items-center">
        <div class="sm:w-7/12 w-11/12  flex flex-col sm:space-y-4 space-y-2 rounded-md p-8 bg-ghost-300">
            <div class="sm:font-roboto-thin font-roboto text-ghost-900 sm:text-4xl text-xl">Sign in</div>
            <div v-if="message" class="text-flamingo-500">{{ message }}</div> <!-- Display error message -->
            <SpinnerComponent v-if="isLoading" />
            <form v-else class="flex flex-col space-y-4" @submit.prevent="submitLoginForm" method="POST">
                <label class="block">
                    <input type="email" name="email" v-model="userData.username"
                        class="mt-2 px-4 py-3 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Email" required />
                </label>
                <label class="block">
                    <input type="password" name="password" v-model="userData.password"
                        class="mt-2 px-4 py-3 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Password" required />
                </label>
                <div class="flex sm:flex-row flex-col sm:space-x-4 space-y-2">
                    <button type="submit"
                        class="flex-1 px-4 py-3 text-white-50 rounded-md bg-bondi-blue text-stone-100 hover:bg-bondi-blue-600">
                        Sign in
                    </button>
                </div>
                <div class="flex flex-row sm:space-x-4 justify-center items-center">
                    <router-link :to="{ name: 'ResetPassword' }"
                        class="cursor-poiter text-bondi-blue-500 cursor-pointer">
                        Forgot your password?
                    </router-link>
                </div>
                <div class="flex sm:flex-row flex-col sm:space-x-4 space-y-2 justify-center items-center">
                    <p class="">
                        New to this website <router-link :to="{ name: 'Register' }"
                            class="cursor-poiter text-bondi-blue-500 cursor-pointer">Register</router-link>
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
    name: "LoginView",
    components: {
        SpinnerComponent
    },
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
};
</script>