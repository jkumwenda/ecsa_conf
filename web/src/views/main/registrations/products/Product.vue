<template>
  <div class="flex flex-col space-y-4 flex-1">
    <HeaderView :headerTitle="headerTitle"></HeaderView>
    <SpinnerComponent v-if="isLoading" />
    <div v-else class="flex space-x-2">
      <div class="flex flex-1 flex-col space-y-1 rounded-2xl bg-catskill-white-100 shadow-sm p-4">
        <div class="flex flex-col p-2 px-3 rounded-xl bg-athens-gray-500">
          <div class="flex flex-row py-2 rounded-xl">
            <div class="w-3/12 font-semibold">Applicant Name</div>
            <div class="flex flex-1">: {{ product.applicant }}</div>
          </div>
          <div class="flex flex-row py-2 rounded-xl">
            <div class="w-3/12 font-semibold">Address</div>
            <div class="flex flex-1">: {{ product.applicant_address }}</div>
          </div>
          <div class="flex flex-row py-2 rounded-xl">
            <div class="w-3/12 font-semibold">Product No</div>
            <div class="flex flex-1">: PMRA/PL{{ product.product_id }}</div>
          </div>
          <div class="flex flex-row py-2 rounded-xl">
            <div class="w-3/12 font-semibold">License Status</div>
            <div v-if="product_licence_status.status" class="flex flex-1">: Approved</div>
            <div v-else class="flex flex-1">: Pending</div>
          </div>
        </div>
        <h1 class="font-semibold uppercase py-2 text-catalina-blue-500">Medical product identity</h1>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Product Name</div>
          <div class="flex flex-1">: {{ product.product_name }}</div>
        </div>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Generic Name</div>
          <div class="flex flex-1">: {{ product.generic_name }}</div>
        </div>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Product Category</div>
          <div class="flex flex-1">: {{ product.product_category }}</div>
        </div>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Dosage Form</div>
          <div class="flex flex-1">: {{ product.dosage_form }}</div>
        </div>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Strength</div>
          <div class="flex flex-1">: {{ product.strength }}</div>
        </div>
        <h1 class="font-semibold uppercase py-2 text-catalina-blue-500">Product Manufacturers</h1>
        <div v-for="product_manufacturer in product_manufacturers" :key="product_manufacturer.id"
          class="flex flex-col p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="flex flex-1">
            <p class="w-3/12 font-semibold">Manufacturer</p>
            <p>: {{ product_manufacturer.manufacturer }}</p>
          </div>
          <div class="flex flex-1">
            <p class="w-3/12 font-semibold">Country</p>
            <p>: {{ product_manufacturer.country }}</p>
          </div>
        </div>
        <h1 class="font-semibold uppercase py-2 text-catalina-blue-500">Therapeutic of medicinal product</h1>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="flex flex-1">{{ product.therapeutic_category }}</div>
        </div>
        <h1 class="font-semibold uppercase py-2 text-catalina-blue-500">Scheduling status</h1>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="flex flex-1">{{ product.scheduling_status }}</div>
        </div>
        <h1 class="font-semibold uppercase py-2 text-catalina-blue-500">Administration route</h1>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="flex flex-1">{{ product.administration_route }}</div>
        </div>
        <h1 class="font-semibold uppercase py-2 text-catalina-blue-500">Declaration of content</h1>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Shelf life</div>
          <div class="flex flex-1">: {{ product.scheduling_status }}</div>
        </div>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Shape</div>
          <div class="flex flex-1">: {{ product.shape }}</div>
        </div>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Color</div>
          <div class="flex flex-1">: {{ product.color }}</div>
        </div>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Markings</div>
          <div class="flex flex-1">: {{ product.markings }}</div>
        </div>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Content per unit dose</div>
          <div class="flex flex-1">: {{ product.unit_dose }}</div>
        </div>
        <h1 class="font-semibold uppercase py-2 text-catalina-blue-500">Product Active Ingredients</h1>
        <div v-for="product_active_ingredient in product_active_ingredients" :key="product_active_ingredient.id"
          class="flex flex-col p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="flex flex-1">
            <p class="w-3/12 font-semibold">Ingredient</p>
            <p>: {{ product_active_ingredient.ingredient }}</p>
          </div>
          <div class="flex flex-1">
            <p class="w-3/12 font-semibold">Specification #</p>
            <p>: {{ product_active_ingredient.specification_number }}</p>
          </div>
          <div class="flex flex-1">
            <p class="w-3/12 font-semibold">Manufacturer</p>
            <p>: {{ product_active_ingredient.manufacturer }}</p>
          </div>
          <div class="flex flex-1">
            <p class="w-3/12 font-semibold">Country</p>
            <p>: {{ product_active_ingredient.country }}</p>
          </div>
        </div>
        <h1 class="font-semibold uppercase py-2 text-catalina-blue-500">Package</h1>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Type of package</div>
          <div class="flex flex-1">: {{ product.package_type }}</div>
        </div>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Size of package</div>
          <div class="flex flex-1">: {{ product.package_size }}</div>
        </div>
        <h1 class="font-extrabold uppercase py-2 text-catalina-blue-500">Validity</h1>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Entry date</div>
          <div class="flex flex-1">: {{ formatDate(product_licence_status.entry_date) }}</div>
        </div>
        <div class="flex flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div class="w-3/12 font-semibold">Renewal date</div>
          <div class="flex flex-1">: {{ formatDate(product_licence_status.renewal_date) }}</div>
        </div>
        <div v-if="product_licence_status.status"
          class="flex space-x-4 flex-row p-2 px-3 rounded-xl bg-athens-gray-400">
          <div
            class="px-4 py-1 boder border-2 border-catalina-blue-300 rounded-xl flex text-center items-center justify-center">
            <PrinterIcon class="h-5 text-catalina-blue-300"></PrinterIcon>
            <button @click="downloadPDF">Download</button>
          </div>
          <div
            class="px-4 py-1 boder border-2 border-catalina-blue-300 rounded-xl flex text-center items-center justify-center">
            <PaperAirplaneIcon class="h-5 text-catalina-blue-300"></PaperAirplaneIcon>
            <div>Send email</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-2 w-4/12">
        <div class="flex flex-col space-y-2 rounded-2xl bg-catskill-white-100 shadow-sm p-4">



          <div class="flex-col space-y-2">
            <div
              class="flex-1 px-4 py-2 hover:text-catskill-white-100 border border-1 border-catalina-blue-50 hover:bg-catalina-blue-400 rounded-md cursor-pointer"
              @click="toggleProductManufacturerExpand">
              Product
              Manufacturers (Click to expand)
              <i :class="{ 'rotate-90': expandedProductManufacturer, 'transition-transform duration-300 ease-in-out': true }"
                class="fas fa-chevron-right"></i>
            </div>
            <transition name="fade-slide w-8/12">
              <div v-if="expandedProductManufacturer" key="content" class="bg-amber-50 rounded-md">
                <button @click="showProductManufacturer"
                  class="flex px-3 py-1 my-2 text-catskill-white-200 bg-catalina-blue-50 border border-1 border-amber-600 hover:bg-amber-200 rounded-md text-sm">
                  Add Manufacturer
                </button>
                <div class="rounded-md border border-athens-gray-500 bg-catskill-white-100 shadow-sm p-1">
                  <div class="flex flex-row bg-athens-gray-500 p-1 text-sm font-bold">
                    <div class="sm:w-7/12">Manufacturer</div>
                    <div class="sm:w-3/12">Country</div>
                  </div>
                  <div class="flex flex-row p-1 text-sm items-center"
                    v-for="product_manufacturer in product_manufacturers" :key="product_manufacturer.id"
                    :class="getRowClass(index)">
                    <div class="sm:w-7/12">{{ product_manufacturer.manufacturer }}</div>
                    <div class="sm:w-3/12">{{ product_manufacturer.country }}</div>
                  </div>
                </div>

              </div>
            </transition>
          </div>

          <div class="flex-col space-y-2">
            <div
              class="flex-1 px-4 py-2 hover:text-catskill-white-100 border border-1 border-catalina-blue-50 hover:bg-catalina-blue-400 rounded-md cursor-pointer"
              @click="toggleProductActiveIngredientExpand">
              Product
              Active Ingredients (Click to expand)
              <i :class="{ 'rotate-90': expandedProductActiveIngredient, 'transition-transform duration-300 ease-in-out': true }"
                class="fas fa-chevron-right"></i>
            </div>
            <transition name="fade-slide w-8/12">
              <div v-if="expandedProductActiveIngredient" key="content" class="bg-amber-50 rounded-xl">
                <button @click="showProductActiveIngredient"
                  class="flex px-3 py-1 my-2 text-catskill-white-200 bg-catalina-blue-50 border border-1 border-amber-600 hover:bg-amber-200 rounded-md text-sm">
                  Add Active Ingredient
                </button>

                <div class="rounded-md border border-athens-gray-500 bg-catskill-white-100 shadow-sm p-1">
                  <div class="flex flex-row bg-athens-gray-500 p-1 text-sm font-bold">
                    <div class="sm:w-5/12">Ingrement</div>
                    <div class="sm:w-7/12">Manufacturer</div>
                  </div>
                  <div class="flex flex-row p-1 text-sm items-center"
                    v-for="product_active_ingredient in product_active_ingredients" :key="product_active_ingredient.id"
                    :class="getRowClass(index)">
                    <div class="sm:w-5/12">{{ product_active_ingredient.ingredient }}</div>
                    <div class="sm:w-7/12">{{ product_active_ingredient.manufacturer }}</div>
                  </div>
                </div>
              </div>
            </transition>
          </div>


          <div class="flex-col space-y-2">
            <div
              class="flex-1 px-4 py-2 hover:text-catskill-white-100 border border-1 border-catalina-blue-50 hover:bg-catalina-blue-400 rounded-md cursor-pointer"
              @click="toggleRetentionHistoryExpand">
              Retention
              history (Click to expand)
              <i :class="{ 'rotate-90': expandedRetentionHistory, 'transition-transform duration-300 ease-in-out': true }"
                class="fas fa-chevron-right"></i>
            </div>
            <transition name="fade-slide w-8/12">
              <div v-if="expandedRetentionHistory" key="content" class="bg-amber-50 rounded-xl text-sm">
                <div class="rounded-md border border-athens-gray-500 bg-catskill-white-100 shadow-sm p-1">
                  <div class="flex flex-row bg-athens-gray-500 p-1 text-sm font-bold">
                    <div class="sm:w-4/12">Entry date</div>
                    <div class="sm:w-4/12">Renewd date</div>
                    <div class="sm:w-4/12">Fee</div>
                  </div>
                  <div class="flex flex-row p-1 text-sm items-center" v-for="product_retention in product_retentions"
                    :key="product_retention.id" :class="getRowClass(index)">
                    <div class="sm:w-4/12">{{ formatDate(product_retention.entry_date) }}</div>
                    <div class="sm:w-4/12">{{ formatDate(product_retention.renewal_date) }}</div>
                    <div class="sm:w-4/12">USD{{ product_retention.licence_fee.product_license_fee }}</div>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <div class="flex-col space-y-2">
            <div
              class="flex-1 px-4 py-2 hover:text-catskill-white-100 border border-1 border-catalina-blue-50 hover:bg-catalina-blue-400 rounded-md cursor-pointer"
              @click="toggleProductVariationExpand">
              Product
              variations (Click to expand)
              <i :class="{ 'rotate-90': expandedProductVariations, 'transition-transform duration-300 ease-in-out': true }"
                class="fas fa-chevron-right"></i>
            </div>
            <transition name="fade-slide w-8/12">
              <div v-if="expandedProductVariations" key="content" class="bg-amber-50 rounded-xl">
                <button @click="showProductVariation"
                  class="flex px-3 py-1 my-2 text-catskill-white-200 bg-catalina-blue-50 border border-1 border-amber-600 hover:bg-amber-200 rounded-md text-sm">
                  Add Variation
                </button>
                <div class="rounded-md border border-athens-gray-500 bg-catskill-white-100 shadow-sm p-1">
                  <div class="flex flex-row bg-athens-gray-500 p-1 text-sm font-bold">
                    <div class="sm:w-7/12">Product name</div>
                    <div class="sm:w-5/12">Last updated</div>
                  </div>
                  <div class="flex flex-row p-1 text-sm items-center" v-for="product_variation in product_variations"
                    :key="product_variation.id" :class="getRowClass(index)">
                    <div class="sm:w-7/12">{{ product_variation.product_name }}</div>
                    <div class="sm:w-5/12">{{ formatDate(product_variation.created_at) }}
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>

        </div>
        <div class="flex flex-col space-y-2 rounded-2xl bg-catskill-white-100 shadow-sm p-4">
          <h1 class="font-semibold uppercase text-catalina-blue-500">Registration Approval Status</h1>
          <div v-for="approval_stage in approval_stages" :key="approval_stage.id">
            <div v-if="isApprovalStageApproved(approval_stage.id)">
              <div v-for="approved_stage in approved_stages" :key="approved_stage.id">
                <div v-if="approved_stage.id === approval_stage.id"
                  class="flex flex-col p-2 px-3 rounded-xl bg-catalina-blue-50 text-athens-gray-100">
                  <!-- Content for approved stages -->
                  <div class="uppercase font-semibold">{{ approval_stage.role_name }}-({{ approved_stage.firstname }}{{
                    approved_stage.lastname }})</div>
                  <div class="flex flex-row space-x-2">
                    <div class="font-semibold">Status</div>
                    <div class="italic">:{{ approved_stage.stage }}</div>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <div class="font-semibold">Date</div>
                    <div>{{ formatDate(approved_stage.date) }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="flex flex-col p-2 px-3 rounded-xl rounded-xl bg-athens-gray-500">
              <div class="uppercase font-semibold">{{ approval_stage.role_name }}</div>
              <div class="flex flex-row space-x-2">
                <div class="font-semibold">Status</div>
                <div class="italic">:Pending</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!product_licence_status.status"
          class="flex space-x-1 rounded-2xl bg-catskill-white-100 shadow-sm p-4">
          <div @click="showApproveProduct"
            class="px-4 py-1 boder border-2 border-catalina-blue-300 rounded-xl flex text-center items-center justify-center cursor-pointer">
            <div>Submit</div>
          </div>
        </div>
      </div>
    </div>
    <approve-product-modal :show="showApproveProductModal" @confirmed="confirmApproveProduct"
      @closed="cancelApproveProduct" :product_id="product.id" @product-approved="refreshPorduct">
    </approve-product-modal>

    <add-product-manufacturer-modal :show="showAddProductManufacturerModal" @confirmed="confirmProductManufacturer"
      @closed="cancelProductManufacturer" :product="product"
      @product-approved="confirmProductManufacturer"></add-product-manufacturer-modal>

    <add-product-active-ingredient-modal :show="showAddProductActiveIngredientModal"
      @confirmed="confirmProductActiveIngredient" @closed="cancelProductActiveIngredient" :product="product"
      @product-approved="confirmProductActiveIngredient"></add-product-active-ingredient-modal>

    <add-product-variation-modal :show="showAddProductVariationModal" @confirmed="confirmProductVariation"
      @closed="cancelProductVariation" :product="product"
      @product-approved="confirmProductVariation"></add-product-variation-modal>

    <delete-confirmation-modal :show="showDeleteModal" @confirmed="deleteProduct(deleteProductId)"
      @canceled="cancelDelete"></delete-confirmation-modal>
  </div>
</template>
<script>
import { fetchItem, downloadItem, deleteItem } from "@/services/apiService";
import { PaperAirplaneIcon, PrinterIcon } from '@heroicons/vue/24/solid'
// import { TrashIcon } from '@heroicons/vue/24/solid'
import { useAuthStore } from "@/store/authStore";
import HeaderView from '@/includes/Header.vue'
import SpinnerComponent from "@/components/Spinner.vue";
import ApproveProductModal from "@/components/ApproveProductModal.vue";
import addProductVariationModal from "@/components/addProductVariationModal.vue";
import addProductManufacturerModal from "@/components/addProductManufacturerModal.vue";
import addProductActiveIngredientModal from "@/components/addProductActiveIngredientModal.vue";
import DeleteConfirmationModal from "@/components/DeleteConfirmationModal.vue";

export default {
  name: "ProductView",
  components: {
    HeaderView, SpinnerComponent, PaperAirplaneIcon, PrinterIcon, ApproveProductModal, addProductVariationModal, addProductManufacturerModal, addProductActiveIngredientModal, DeleteConfirmationModal
  },
  data() {
    return {
      headerTitle: "Product",
      id: this.$route.params.id,
      product: {},
      approval_stages: [],
      approved_stages: [],
      product_retentions: [],
      product_manufacturers: [],
      product_active_ingredients: [],
      product_variations: [],
      product_licence_status: {},
      showApproveProductModal: false,
      showAddProductVariationModal: false,
      showAddProductManufacturerModal: false,
      showAddProductActiveIngredientModal: false,
      isLoading: false,
      expandedRetentionHistory: false,
      expandedProductVariations: false,
      expandedProductManufacturer: false,
      expandedProductActiveIngredient: false,
      showDeleteModal: false,
    };
  },
  setup() {
    const authStore = useAuthStore()
    const loginUser = authStore.loginUser
    return { loginUser }
  },
  mounted() {
    this.getProduct();
    this.getWorkflow();
  },
  methods: {
    isApprovalStageApproved(approvalStageId) {
      return this.approved_stages.some(stage => stage.id === approvalStageId && stage.status === 1);
    },

    isApprover(userId) {
      return this.approved_stages.some(stage => stage.user_id === userId && stage.status === 0);
    },

    async getProduct() {
      try {
        const response = await fetchItem("products", this.id);
        this.product = response.product;
        console.log(this.product);
        this.approved_stages = response.product_approvals;
        this.product_licence_status = response.product_licence_status;
        this.product_retentions = response.product_retentions;
        this.product_variations = response.product_variations;
        this.product_manufacturers = response.product_manufacturers;
        this.product_active_ingredients = response.product_active_ingredients;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching product:", error);
        this.isLoading = false;
      }
    },
    async getWorkflow() {
      try {
        const response = await fetchItem("workflows/name", "PRODUCTS");
        this.approval_stages = response.approval_stages;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching product:", error);
        this.isLoading = false;
      }
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

    showApproveProduct() {
      this.showApproveProductModal = true;
    },
    async confirmApproveProduct() {
      this.showApproveProductModal = false;
    },
    cancelApproveProduct() {
      this.showApproveProductModal = false;
    },
    async refreshPorduct() {
      await this.getProduct();
      this.showApproveProductModal = false;
    },

    async downloadPDF() {
      try {
        const response = await downloadItem("products/generate_certificate", this.id);

        if (!response) {
          console.error("Error:", response.status, response.statusText);
          return;
        }
        const blob = response.data;
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "product_certificate.pdf";
        link.click();
      } catch (error) {
        console.error("Error downloading PDF:", error);
      }
    },
    toggleProductManufacturerExpand() {
      this.expandedProductManufacturer = !this.expandedProductManufacturer;
    },
    toggleRetentionHistoryExpand() {
      this.expandedRetentionHistory = !this.expandedRetentionHistory;
    },
    toggleProductVariationExpand() {
      this.expandedProductVariations = !this.expandedProductVariations;
    },

    toggleProductActiveIngredientExpand() {
      this.expandedProductActiveIngredient = !this.expandedProductActiveIngredient;
    },

    showProductManufacturer() {
      this.showAddProductManufacturerModal = true;
    },

    confirmProductManufacturer() {
      this.showAddProductManufacturerModal = false;
      this.getProduct();
    },

    cancelProductManufacturer() {
      this.showAddProductManufacturerModal = false;
    },

    showProductVariation() {
      this.showAddProductVariationModal = true;
    },

    confirmProductVariation() {
      this.showAddProductVariationModal = false;
      this.getProduct();
    },
    cancelProductVariation() {
      this.showAddProductVariationModal = false;
    },

    showProductActiveIngredient() {
      this.showAddProductActiveIngredientModal = true;
    },

    confirmProductActiveIngredient() {
      this.showAddProductActiveIngredientModal = false;
      this.getProduct();
    },

    cancelProductActiveIngredient() {
      this.showAddProductActiveIngredientModal = false;
    },

    async deleteProduct(id) {
      this.isLoading = true;
      try {
        await deleteItem("products/product_variation", id);
        const index = this.product_variations.findIndex((product_variation) => product_variation.id === id);
        if (index !== -1) {
          this.product_variations.splice(index, 1);
        }
        this.showDeleteModal = false;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching product variations:", error);
        this.isLoading = false;
        this.showDeleteModal = false;
      }
    },
    showDeleteConfirmation(id) {
      this.deleteProductId = id;
      this.showDeleteModal = true;
    },
    cancelDelete() {
      this.showDeleteModal = false;
    },
    getRowClass(index) {
      return index % 2 === 0 ? 'bg-athens-gray-400' : 'bg-athens-gray-100';
    },
  },
};
</script>
