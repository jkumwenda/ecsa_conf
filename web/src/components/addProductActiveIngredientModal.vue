<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
    <div
      class="flex flex-col border-2 border-catalina-blue-500 border-t-8 bg-catskill-white-100 dark:bg-gray-800 rounded-xl shadow-lg w-6/12 z-50">
      <div class="border-b font-bold text-lg border-b-4 p-4 px-6 space-y-4 border-b-silver-500">
        Add Product product active Ingredient
      </div>
      <div v-if="message" class="p-4 m-6 m-y-4 rounded-xl text-catskill-white-100 py-2 text bg-spray-600">
        {{ message }}
      </div>
      <SpinnerComponent v-if="isLoading" />
      <form class="flex flex-col w-12/12 space-y-4 p-5" @submit.prevent="addProductManufacturer" method="POST">
        <div class="flex space-x-4">
          <label class="block w-6/12">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Active Ingredient
            </span>
            <input type="input" name="ingredient" v-model="producActiveIngredientData.ingredient"
              class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
              placeholder="Active Ingredient" />
          </label>
          <label class="block w-6/12">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Specification Number
            </span>
            <input type="input" name="specification_number" v-model="producActiveIngredientData.specification_number"
              class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
              placeholder="Specification number" />
          </label>
        </div>
        <div class="flex space-x-4">
          <label class="block w-6/12">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Manufacturer
            </span>
            <select name="manufacturer_id"
              class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
              v-model="producActiveIngredientData.manufacturer_id">
              <option value="" disabled selected>--Select manufacturer--</option>
              <option v-for="manufacturer in manufacturers" :key="manufacturer.id" :value="manufacturer.id">
                {{ manufacturer.manufacturer }}
              </option>
            </select>
          </label>
          <label class="block w-6/12">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Country
            </span>
            <select name="country_id"
              class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
              v-model="producActiveIngredientData.country_id">
              <option value="" disabled selected>--Select country--</option>
              <option v-for="country in countries" :key="country.id" :value="country.id">
                {{ country.country }}
              </option>
            </select>
          </label>
        </div>

        <div class="flex space-x-4">
          <div class="flex flex-row space-x-4">
            <button type="submit"
              class="mt-2 px-4 py-2 text-catskill-white-100 bg-catalina-blue hover:bg-catalina-blue-400 rounded-xl">
              Add product active ingredient
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
      headerTitle: "Product Active Ingredient",
      producActiveIngredientData: {
        manufacturer_id: "",
        country_id: "",
        product_id: "",
        specification_number: "",
        ingredient: ""
      },
      isLoading: false,
      currentPage: 1,
      totalPages: "",
      pageSize: 500,
      searchPhrase: "",
      message: ""
    }
  },


  props: {
    show: {
      type: Boolean,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },

  watch: {
    product: {
      immediate: true,
      handler(newValue) {
        this.producActiveIngredientData.product_id = newValue.id
        this.getCountries();
        this.getManufacturers()
      },
    },
  },

  async mounted() {
    this.getCountries();
    this.getManufacturers()
  },

  methods: {
    async addProductManufacturer() {
      this.isLoading = true;
      try {
        const response = await createItem("products/add_product_active_ingredient/", this.producActiveIngredientData);
        this.products = response.data;
        this.isLoading = false;
        this.$emit("product-approved");
        this.message = "Product manufacturer added successfully";
      } catch (error) {
        console.error("Error fetching products:", error);
        this.message = "Product manufacturer add failed";
        this.isLoading = false;
      }
    },
    async getManufacturers() {
      try {
        const response = await fetchData("manufacturers", this.currentPage, this.pageSize, this.searchPhrase);
        this.manufacturers = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching manufacturers:", error);
        this.isLoading = false;
      }
    },
    async getCountries() {
      try {
        const response = await fetchData("countries", this.currentPage, this.pageSize, this.searchPhrase);
        this.countries = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching countries:", error);
        this.isLoading = false;
      }
    },
    close() {
      this.$emit("closed");
    },

  },
};
</script>
