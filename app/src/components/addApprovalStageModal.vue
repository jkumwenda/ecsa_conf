<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
    <div
      class="flex flex-col border-2 border-catalina-blue-500 border-t-8 bg-catskill-white-100 dark:bg-gray-800 rounded-xl shadow-lg w-6/12 z-50">
      <div class="border-b font-bold text-lg border-b-4 p-4 px-6 space-y-4 border-b-silver-500">
        Add Approval Stage
      </div>
      <div v-if="message" class="p-4 m-6 m-y-4 rounded-xl text-catskill-white-100 py-2 text bg-spray-600">
        {{ message }}
      </div>
      <SpinnerComponent v-if="isLoading" />
      <form class="flex flex-col w-12/12 space-y-4 p-5" @submit.prevent="addProductRole" method="POST">
        <div class="flex space-x-4">
          <label class="block w-4/12">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Stage Name
            </span>
            <input type="input" name="stage" v-model="approvalStageData.stage"
              class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
              placeholder="Stage name" />
          </label>
          <label class="block w-4/12">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Stage Number
            </span>
            <input type="number" name="stage_number" v-model="approvalStageData.stage_number"
              class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
              placeholder="Stage number" />
          </label>
          <label class="block w-4/12">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Role
            </span>
            <select name="role_id"
              class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
              v-model="approvalStageData.role_id">
              <option value="" disabled selected>--Select role--</option>
              <option v-for="role in roles" :key="role.id" :value="role.id">
                {{ role.role }}
              </option>
            </select>
          </label>
        </div>

        <div class="flex space-x-4">
          <div class="flex flex-row space-x-4">
            <button type="submit"
              class="mt-2 px-4 py-2 text-catskill-white-100 bg-catalina-blue hover:bg-catalina-blue-400 rounded-xl">
              Add approval stage
            </button>
            <button :to="{ name: 'Products' }" @click="close"
              class="mt-2 px-4 py-2 boder border-2 border-catalina-blue rounded-xl">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createItem, fetchData } from "@/services/apiService";
import SpinnerComponent from "@/components/Spinner.vue";

export default {
  components: {
    SpinnerComponent
  },

  data() {
    return {
      headerTitle: "Approval Stage",
      approvalStageData: {
        role_id: "",
        stage_number: "",
        stage: ""
      },
      isLoading: false,
      currentPage: 1,
      totalPages: "",
      pageSize: 1000,
      searchPhrase: "",
      message: ""
    }
  },


  props: {
    show: {
      type: Boolean,
      required: true,
    },
    approval_stage_id: {
      type: Number,
      required: true,
    },
  },

  async mounted() {
    this.getRoles()
  },

  methods: {
    async addProductRole() {
      this.isLoading = true;
      try {
        const response = await createItem("workflows/", this.approvalStageData);
        this.products = response.data;
        this.isLoading = false;
        this.$emit("product-approved");
        this.message = "Product role added successfully";
      } catch (error) {
        console.error("Error fetching products:", error);
        this.message = "Product role add failed";
        this.isLoading = false;
      }
    },
    async getRoles() {
      try {
        const response = await fetchData("roles", this.currentPage, this.pageSize, this.searchPhrase);
        this.roles = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching roles:", error);
        this.isLoading = false;
      }
    },
    close() {
      this.$emit("closed");
    },

  },
};
</script>
