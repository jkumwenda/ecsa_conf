<template>
    <div class="sm:flex sm:flex-row flex flex-col flex-1 justify-center items-center">
        <div class="sm:w-7/12 w-11/12  flex flex-col sm:space-y-4 space-y-2 rounded-md p-8 bg-ghost-300 drop-shadow-md">
            <div class="Unafanya kazi wapi sasa?? text-ghost-900 text-3xl">Reset Password</div>
            <div
                class="py-3 px-3 text-md border border-solid border-great-blue-400 bg-great-blue-50 text-great-blue rounded-md font-roboto">
                Use your registration email reset password</div>
            <div v-if="message" class="text-bondi-blue-500">{{ message }}</div> <!-- Display error message -->
            <div v-if="error" class="text-flamingo-500">{{ error }}</div> <!-- Display error message -->
            <SpinnerComponent v-if="isLoading" />
            <form v-else class="flex flex-col space-y-4" @submit.prevent="submitResetPasswordForm" method="POST">
                <label class="block">
                    <input type="email" name="email" v-model="userData.username"
                        class="mt-2 py-3 px-3 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Email" required />
                </label>
                <div class="flex sm:flex-row flex-col sm:space-x-4 space-y-2">
                    <button type="submit"
                        class="flex-1 px-4 py-3 text-white-50 font-bold rounded-md bg-bondi-blue text-stone-100 hover:bg-bondi-blue-600">
                        Reset password
                    </button>
                </div>
                <div class="flex flex-row sm:space-x-4 justify-center">
                    <router-link :to="{ name: 'Login' }" class="cursor-poiter text-bondi-blue-500 cursor-pointer">
                        Your remember your password? Login
                    </router-link>
                </div>
                <div class="flex sm:flex-row flex-col sm:space-x-4 space-y-2 justify-center">
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
import { createItem } from "@/services/apiService";
import SpinnerComponent from "@/components/Spinner.vue";


export default {
    name: "ResetPasswordView",
    components: {
        SpinnerComponent
    },
    data() {
        return {
            userData: {
                username: "",
            },
            SpinnerComponent,
            message: null,
            error: null,
            isLoading: false,
        };
    },

    methods: {
        async submitResetPasswordForm() {
            this.isLoading = true;
            try {
                const response = await createItem("auth/reset_password/", this.userData);
                console.log(response)
                this.isLoading = false;
                this.error = ""
                this.message = "Password rest was successful, check your email"
            } catch (error) {
                this.message = ""; // Set the error message
                this.error = "Invalid email address!"; // Set the error message
                this.isLoading = false;
            }
        },
    },
};
</script>