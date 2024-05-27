<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle"></HeaderView>
        <SpinnerComponent v-if="isLoading" />
        <div v-else class="rounded-2xl bg-catskill-white-100 shadow-sm p-4">
            <form class="flex flex-col w-8/12 space-y-4" @submit.prevent="editProduct" method="POST">
                <div class="flex space-x-4">
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Applicant
                        </span>
                        <select name="applicant_id"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            v-model="productData.applicant_id">
                            <option value="" disabled selected>--Select applicant--</option>
                            <option v-for="applicant in applicants" :key="applicant.id" :value="applicant.id">
                                {{ applicant.applicant }}
                            </option>
                        </select>
                    </label>
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Product Category
                        </span>
                        <select name="product_category_id"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            v-model="productData.product_category_id">
                            <option value="" disabled selected>--Select product category--</option>
                            <option v-for="product_category in product_categories" :key="product_category.id"
                                :value="product_category.id">
                                {{ product_category.product_category }}
                            </option>
                        </select>
                    </label>
                </div>
                <div class="flex space-x-4">
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Product name
                        </span>
                        <input type="input" name="product_name" v-model="productData.product_name"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            placeholder="Product name" />
                    </label>
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Generic name
                        </span>
                        <select name="generic_name_id"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            v-model="productData.generic_name_id">
                            <option value="" disabled selected>--Select generic names--</option>
                            <option v-for="generic_name in generic_names" :key="generic_name.id"
                                :value="generic_name.id">
                                {{ generic_name.generic_name }}
                            </option>
                        </select>
                    </label>
                </div>
                <div class="flex space-x-4">
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Dosage form
                        </span>
                        <select name="dosage_form_id"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            v-model="productData.dosage_form_id">
                            <option value="" disabled selected>--Select dosage forms--</option>
                            <option v-for="dosage_form in dosage_forms" :key="dosage_form.id" :value="dosage_form.id">
                                {{ dosage_form.dosage_form }}
                            </option>
                        </select>
                    </label>
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Therapeutic category
                        </span>
                        <select name="therapeutic_category_id"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            v-model="productData.therapeutic_category_id">
                            <option value="" disabled selected>--Select therapeutic categories--</option>
                            <option v-for="therapeutic_category in therapeutic_categories"
                                :key="therapeutic_category.id" :value="therapeutic_category.id">
                                {{ therapeutic_category.therapeutic_category }}
                            </option>
                        </select>
                    </label>
                </div>



                <div class="flex space-x-4">
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Color
                        </span>
                        <input type="input" name="color" v-model="productData.color"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            placeholder="Color" />
                    </label>
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Shape
                        </span>
                        <input type="input" name="shape" v-model="productData.shape"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            placeholder="Shape" />
                    </label>
                </div>


                <div class="flex space-x-4">
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Any markings
                        </span>
                        <input type="input" name="any_markings" v-model="productData.markings"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            placeholder="Any markings" />
                    </label>
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Scheduling status
                        </span>
                        <input type="input" name="scheduling_status" v-model="productData.scheduling_status"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            placeholder="Scheduling status" />
                    </label>
                </div>

                <div class="flex space-x-4">
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Strength
                        </span>
                        <input type="input" name="strength" v-model="productData.strength"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            placeholder="strength" />
                    </label>
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Administrative route
                        </span>
                        <select name="administration_route_id"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            v-model="productData.administration_route_id">
                            <option value="" disabled selected>--Select administration routes--</option>
                            <option v-for="administration_route in administration_routes" :key="administration_route.id"
                                :value="administration_route.id">
                                {{ administration_route.administration_route }}
                            </option>
                        </select>
                    </label>
                </div>

                <div class="flex space-x-4">
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Date of entry
                        </span>
                        <VueDatePicker
                            class="mt-2 p-1 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            type="date" v-model="productData.entry_date" name="entry_date" :enable-time-picker="false"
                            :format="'yyyy-MM-dd'" placeholder="Entry date" required />
                    </label>
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Renewal date
                        </span>
                        <VueDatePicker
                            class="mt-2 p-1 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            type="date" v-model="productData.renewal_date" name="renewal_date"
                            :enable-time-picker="false" :format="'yyyy-MM-dd'" placeholder="Renewal date" required />
                    </label>
                </div>

                <div class="flex space-x-4">
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Content /Unit dose
                        </span>
                        <input type="input" name="unit_dose" v-model="productData.unit_dose"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            placeholder="Unit dose" />
                    </label>
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Package size
                        </span>
                        <input type="input" name="package_size" v-model="productData.package_size"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            placeholder="Package size" />
                    </label>
                </div>

                <div class="flex space-x-4">
                    <label class="block w-6/12">
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Package type
                        </span>
                        <input type="input" name="package_type" v-model="productData.package_type"
                            class="mt-2 px-3 py-3 bg-white border border-1 shadow-sm border-mid-gray-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                            placeholder="package type" />
                    </label>
                </div>
                <div class="flex space-x-4">
                    <div class="flex flex-row space-x-4">
                        <button type="submit"
                            class="mt-2 px-4 py-2 text-catskill-white-100 bg-catalina-blue hover:bg-catalina-blue-400 rounded-xl">
                            Edit product
                        </button>
                        <router-link :to="{ name: 'Products' }"
                            class="mt-2 px-4 py-2 boder border-2 border-catalina-blue rounded-xl">Cancel</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import HeaderView from '@/includes/Header.vue'
import { updateItem, fetchData, fetchItem } from "@/services/apiService";
import SpinnerComponent from "@/components/Spinner.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import router from "@/router";

export default {
    name: "EditProductView",
    components: {
        HeaderView, SpinnerComponent, VueDatePicker
    },
    data() {
        return {
            headerTitle: "Edit Product",
            id: this.$route.params.id,
            productData: {
                applicant_id: "",
                product_category_id: "",
                product_name: "",
                generic_name_id: "",
                dosage_form_id: "",
                therapeutic_category_id: "",
                color: "",
                scheduling_status: "",
                strength: "",
                administration_route_id: "",
                markings: "",
                shape: "",
                unit_dose: "",
                package_size: "",
                package_type: "",
                entry_date: '', // Preset entry date from API
                renewal_date: '' // Preset renewal date from API
            },
            isLoading: false,
            countries: {},
            product_categories: {},
            generic_names: {},
            applicants: {},
            manufacturers: {},
            dosage_forms: {},
            administration_routes: {},
            therapeutic_categories: {},
            currentPage: 1,
            totalPages: "",
            pageSize: 500,
            searchPhrase: ""
        }
    },
    mounted() {
        this.getProduct();
        this.getCountries();
        this.getProductCategories()
        this.getApplicants();
        this.getManufacturers()
        this.getGenericNames()
        this.getDosageForms()
        this.getTherapeuticCategories()
        this.getAdministrativeRoutes()
    },
    methods: {
        async editProduct() {
            this.isLoading = true;
            try {
                const response = await updateItem(
                    "products",
                    this.id,
                    this.productData
                );
                this.product = response.data;
                this.isLoading = false;
                router.push("/products");
            } catch (error) {
                console.error("Error editing product:", error);
                this.isLoading = false;
            }
        },
        async getProduct() {
            try {
                const response = await fetchItem("products", this.id);
                this.productData.applicant_id = response.product.applicant_id;
                this.productData.product_category_id = response.product.product_category_id;
                this.productData.product_name = response.product.product_name;
                this.productData.generic_name_id = response.product.generic_name_id;
                this.productData.dosage_form_id = response.product.dosage_form_id;
                this.productData.therapeutic_category_id = response.product.therapeutic_category_id;
                this.productData.color = response.product.color;
                this.productData.scheduling_status = response.product.scheduling_status;
                this.productData.strength = response.product.strength;
                this.productData.administration_route_id = response.product.administration_route_id;
                this.productData.shape = response.product.shape;
                this.productData.markings = response.product.markings;
                this.productData.active_ingredient = response.product.active_ingredient;
                this.productData.unit_dose = response.product.unit_dose;
                this.productData.package_size = response.product.package_size;
                this.productData.package_type = response.product.package_type;
                this.productData.entry_date = response.product_licence_status.entry_date;
                this.productData.renewal_date = response.product_licence_status.renewal_date;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching product:", error);
                this.isLoading = false;
            }
        },
        async getApplicants() {
            try {
                const response = await fetchData("applicants", this.currentPage, this.pageSize, this.searchPhrase);
                this.applicants = response.data;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching applicants:", error);
                this.isLoading = false;
            }
        },
        async getProductCategories() {
            try {
                const response = await fetchData("product_categories", this.currentPage, this.pageSize, this.searchPhrase);
                this.product_categories = response.data;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching product categories:", error);
                this.isLoading = false;
            }
        },
        async getGenericNames() {
            try {
                const response = await fetchData("generic_names", this.currentPage, this.pageSize, this.searchPhrase);
                this.generic_names = response.data;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching generic names:", error);
                this.isLoading = false;
            }
        },
        async getDosageForms() {
            try {
                const response = await fetchData("dosage_forms", this.currentPage, this.pageSize, this.searchPhrase);
                this.dosage_forms = response.data;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching dosage forms:", error);
                this.isLoading = false;
            }
        },
        async getTherapeuticCategories() {
            try {
                const response = await fetchData("therapeutic_categories", this.currentPage, this.pageSize, this.searchPhrase);
                this.therapeutic_categories = response.data;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching therapeutic categories:", error);
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
        async getAdministrativeRoutes() {
            try {
                const response = await fetchData("administration_routes", this.currentPage, this.pageSize, this.searchPhrase);
                this.administration_routes = response.data;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching administration routes:", error);
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

    },
};
</script>
