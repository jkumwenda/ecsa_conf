<template>
  <div class="flex flex-col space-y-4 flex-1">
    <HeaderView :headerTitle="headerTitle"></HeaderView>
    <SpinnerComponent v-if="isLoading" />
    <div class="flex flex-col space-y-4">
      <div class="flex flex-row space-x-4">
        <div
          class="flex flex-col space-y-4 sm:w-12/12 w-full space-x-4 border border-abbey-100  p-4 px-4 rounded-2xl shadow-sm">
          <div class="flex flex-col space-y-4">
            <p class="text-xl font-semibold">
              {{ participant.title }} {{ participant.firstname }} {{ participant.lastname }}
            </p>
            <p> {{ participant.institution }}</p>
            <p> {{ participant.country }}</p>
            <a :href="'mailto:' + participant.email" class="text-blue-500 hover:underline text-bondi-blue-500">
              {{ participant.email }}
            </a>
            <p class="">
              {{ participant.phone }}
            </p>
            <div class="flex sm:flex-row space-x-2">
              <router-link :to="{ name: 'EditProfile', params: { id: participant.id } }"
                class="bg-flamingo-700 text-white-50 hover:bg-flamingo-800 rounded-xl px-4 py-1 text-sm">
                Update profile
              </router-link>
              <button @click="showPassword()"
                class="bg-abbey-500 text-abbey-50 hover:bg-abbey-800 rounded-xl px-4 py-1 text-sm">
                Reset Password
              </button>
            </div>
            <div v-if="message" class="p-4 m-6 rounded-xl text-abbey-100 py-2 text-sm bg-mountain-meadow-500">
              {{
                message }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <password-modal :show="showPasswordModal" @confirmed="confirmPassword" @closed="cancelPassword" :user_id="user_id">
    </password-modal>
  </div>
</template>
<script>
import HeaderView from '@/includes/Header.vue'
import { fetchItem } from "@/services/apiService";
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";
import PasswordModal from "@/components/PasswordModal.vue";

export default {
  name: "MyProfileView",
  components: {
    SpinnerComponent, HeaderView, PasswordModal
  },
  data() {
    return {
      headerTitle: "My profile",
      id: this.$route.params.id,
      isLoading: true,
      participant: {},
      showPasswordModal: false
    };
  },
  mounted() {
    this.getParticipant();
  },

  setup() {
    const authStore = useAuthStore()
    const permissions = authStore.permissions
    return { permissions }
  },
  methods: {
    async getParticipant() {
      try {
        const response = await fetchItem("participants", this.id);
        this.participant = response.participant;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching participants:", error);
        this.isLoading = false;
      }
    },
    showPassword() {
      this.user_id = this.id
      this.showPasswordModal = true;
    },
    confirmPassword() {
      this.getParticipant();
      this.showPasswordModal = false;
    },
    cancelPassword() {
      this.showPasswordModal = false;
    },
  },
};
</script>
