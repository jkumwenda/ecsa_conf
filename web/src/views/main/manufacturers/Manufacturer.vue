<template>
  <div class="flex flex-col space-y-4 flex-1">
    <HeaderView :headerTitle="headerTitle"></HeaderView>
    <SpinnerComponent v-if="isLoading" />
    <div v-else class="rounded-2xl bg-catskill-white-100 shadow-sm p-4">
      <div class="flex flex-col p-2 px-3 rounded-xl bg-athens-gray-500">
        <div class="flex flex-row py-2 rounded-xl">
          <div class="w-3/12 font-semibold">Manufacturer Name</div>
          <div class="flex flex-1">: {{ manufacturer.manufacturer }}</div>
        </div>
        <div class="flex flex-row py-2 rounded-xl">
          <div class="w-3/12 font-semibold">Address</div>
          <div class="flex flex-1">: {{ manufacturer.address }}</div>
        </div>
        <div class="flex flex-row py-2 rounded-xl">
          <div class="w-3/12 font-semibold">Phone</div>
          <div class="flex flex-1">: {{ manufacturer.phone }}</div>
        </div>
        <div class="flex flex-row py-2 rounded-xl">
          <div class="w-3/12 font-semibold">Email</div>
          <div class="flex flex-1">: {{ manufacturer.email }}</div>
        </div>
        <div class="flex flex-row py-2 rounded-xl">
          <div class="w-3/12 font-semibold">Country</div>
          <div class="flex flex-1">: {{ manufacturer.country }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchItem } from "@/services/apiService";
import HeaderView from '@/includes/Header.vue'
import SpinnerComponent from "@/components/Spinner.vue";
// import router from "@/router";

export default {
  name: "ManufacturerView",
  components: {
    HeaderView, SpinnerComponent
  },
  data() {
    return {
      headerTitle: "Manufacturer details",
      id: this.$route.params.id,
      isLoading: true,
      manufacturer: {},
      products: {},
    };
  },
  mounted() {
    this.getManufacturer();
  },
  methods: {
    async getManufacturer() {
      try {
        const response = await fetchItem("manufacturers", this.id);
        this.manufacturer = response.manufacturer;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching manufacturers:", error);
        this.isLoading = false;
      }
    },
  },
};
</script>
