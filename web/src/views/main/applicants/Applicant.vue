<template>
  <div class="flex flex-col space-y-4 flex-1">
    <HeaderView :headerTitle="headerTitle"></HeaderView>
    <SpinnerComponent v-if="isLoading" />
    <div v-else class="rounded-2xl bg-catskill-white-100 shadow-sm pt-4 px-4">
      <div class="flex flex-col p-2 px-3 rounded-xl bg-athens-gray-500">
        <div class="flex flex-row py-2 rounded-xl">
          <div class="w-3/12 font-semibold">Applicant Name</div>
          <div class="flex flex-1">: {{ applicant.applicant }}</div>
        </div>
        <div class="flex flex-row py-2 rounded-xl">
          <div class="w-3/12 font-semibold">Address</div>
          <div class="flex flex-1">: {{ applicant.address }}</div>
        </div>
        <div class="flex flex-row py-2 rounded-xl">
          <div class="w-3/12 font-semibold">Phone</div>
          <div class="flex flex-1">: {{ applicant.phone }}</div>
        </div>
        <div class="flex flex-row py-2 rounded-xl">
          <div class="w-3/12 font-semibold">Email</div>
          <div class="flex flex-1">: {{ applicant.email }}</div>
        </div>
        <div class="flex flex-row py-2 rounded-xl">
          <div class="w-3/12 font-semibold">Country</div>
          <div class="flex flex-1">: {{ applicant.country }}</div>
        </div>
      </div>
      <h1 class="font-semibold uppercase py-2 text-catalina-blue-500">Applicant products catalogue</h1>

    </div>
    <div class="flex flex-col space-y-4">
      <SpinnerComponent v-if="isLoading" />
      <div v-else class="rounded-2xl bg-catskill-white-100 shadow-sm p-4">
        <div class="flex flex-row bg-athens-gray-500 p-2 text-sm font-bold">
          <div class="sm:w-1/12">Product ID</div>
          <div class="sm:w-3/12">Product name</div>
          <div class="sm:w-3/12">Generic name</div>
          <div class="sm:w-2/12">Date of Entry</div>
          <div class="sm:w-2/12">Renewal Date</div>
          <div class="sm:w-1/12">Status</div>
          <div class="sm:w-1/12">Action</div>
        </div>
        <div class="flex flex-row p-2 text-sm items-center" v-for="(product, index) in products" :key="product.id"
          :class="getRowClass(index)">
          <div class="sm:w-1/12">PMRA/PL{{ product.id }}</div>
          <div class="sm:w-3/12">{{ product.product_name }}</div>
          <div class="sm:w-3/12">{{ product.generic_name }}</div>
          <div class="sm:w-2/12">{{ formatDate(product.entry_date) }}</div>
          <div class="sm:w-2/12">{{ formatDate(product.renewal_date) }}</div>
          <div class="sm:w-1/12">{{ formartStatus(product.renewal_date) }}</div>
          <div class="flex space-x-2 sm:w-1/12">
            <router-link v-if="permissions.includes('VIEW_PRODUCT')" class="p-1 bg-dodger-blue-50 rounded-full"
              :to="{ name: 'Product', params: { id: product.id } }">
              <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
            </router-link>
            <router-link v-if="permissions.includes('UPDATE_PRODUCT')" class="p-1 bg-spray-200 rounded-full"
              :to="{ name: 'EditProduct', params: { id: product.id } }">
              <PencilSquareIcon class=" w-5 h-5 text-spray-700">
              </PencilSquareIcon>
            </router-link>
            <div v-if="permissions.includes('DELETE_PRODUCT')" class="p-1 bg-flamingo-100 rounded-full">
              <TrashIcon class="w-5 h-5 text-flamingo-500" @click="showDeleteConfirmation(product.id)">
              </TrashIcon>
            </div>
          </div>
        </div>
        <pagination-component :currentPage="currentPage" :totalPages="totalPages" @page-change="handlePageChange">
        </pagination-component>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchItem } from "@/services/apiService";
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid'
import HeaderView from '@/includes/Header.vue'
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";

export default {
  name: "ApplicantView",
  components: {
    EyeIcon, PencilSquareIcon, TrashIcon, HeaderView, SpinnerComponent
  },
  data() {
    return {
      headerTitle: "Applicant details",
      id: this.$route.params.id,
      isLoading: true,
      applicant: {},
      products: {},
      currentPage: 1,
      totalPages: "",
      pageSize: process.env.VUE_APP_PAGE_SIZE,
      searchPhrase: ""
    };
  },
  mounted() {
    this.getApplicant();
  },
  setup() {
    const authStore = useAuthStore()
    const permissions = authStore.permissions
    return { permissions }
  },
  methods: {
    async getApplicant() {
      try {
        const response = await fetchItem("applicants", this.id);
        this.applicant = response.applicant;
        this.products = response.products;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching applicants:", error);
        this.isLoading = false;
      }
    },
    getRowClass(index) {
      return index % 2 === 0 ? 'bg-athens-gray-400' : 'bg-athens-gray-100';
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const formattedDate = date.toLocaleString("en-UK", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      return formattedDate;
    },
    formartStatus(dateString) {
      const renewalDate = new Date(dateString);
      const today = new Date();
      if (renewalDate.getTime() > today.getTime()) {
        return "Active";
      } else {
        return "Expired";
      }
    },
  },
};
</script>
