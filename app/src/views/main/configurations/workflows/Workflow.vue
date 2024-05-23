<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle"></HeaderView>

        <SpinnerComponent v-if="isLoading" />

        <div v-else class="flex flex-row space-x-2">
            <div class="flex flex-col space-y-3 w-6/12 rounded-2xl bg-catskill-white-100 shadow-sm p-4">
                <div class="flex flex-row">
                    <h1 class="flex flex-1 items-center font-bold uppercase text-catalina-blue-500">Workflows</h1>
                    <button @click="showAddApprovalStage"
                        class="mt-2 px-4 py-1 text-catskill-white-100 bg-catalina-blue hover:bg-catalina-blue-400 rounded-xl">
                        Add workflow stage</button>
                </div>
                <div class="flex flex-1 p-2 text-sm items-center bg-athens-gray-400 rounded-2xl"
                    v-for="approval_stage in approval_stages" :key="approval_stage.id">
                    <div class="w-11/12">{{ approval_stage.stage }}</div>
                    <div class="flex space-x-2">
                        <div v-if="permissions.includes('UPDATE_WORKFLOW')"
                            class="p-1 bg-flamingo-100 border border-flamingo-500 rounded-full">
                            <PencilSquareIcon class="w-5 h-5 text-flamingo-500"
                                @click="showEditApprovalStage(approval_stage.id)">
                            </PencilSquareIcon>
                        </div>
                        <div v-if="permissions.includes('DELETE_WORKFLOW')"
                            class="p-1 bg-flamingo-100 border border-flamingo-500 rounded-full">
                            <TrashIcon class="w-5 h-5 text-flamingo-500"
                                @click="showDeleteConfirmation(approval_stage.id)">
                            </TrashIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <add-approval-stage-modal :show="showAddApprovalStageModal" @confirmed="confirmaddApprovalStage"
        @closed="canceladdApprovalStage" @product-added="refreshApprovalStage">
    </add-approval-stage-modal>
</template>

<script>
import HeaderView from '@/includes/Header.vue'
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid'
import { fetchData } from "@/services/apiService";
import SpinnerComponent from "@/components/Spinner.vue";
import addApprovalStageModal from "@/components/addApprovalStageModal.vue";
import { useAuthStore } from "@/store/authStore";

export default {
    name: 'WorkflowView',
    components: {
        HeaderView, SpinnerComponent, PencilSquareIcon, TrashIcon, addApprovalStageModal
    },
    data() {
        return {
            headerTitle: "Workflow",
            approval_stages: {},
            isLoading: true,
            showAddApprovalStageModal: false,
            expandAddApprovalStages: false,
            currentPage: 1,
            totalPages: "",
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            searchPhrase: ""
        };
    },
    mounted() {
        this.getApprovalStages();
    },
    setup() {
        const authStore = useAuthStore()
        const permissions = authStore.permissions
        return { permissions }
    },
    methods: {
        async getApprovalStages() {
            try {
                const response = await fetchData("workflows", this.currentPage, this.pageSize, this.searchPhrase);
                this.approval_stages = response.data;
                this.totalPages = response.pages;
                this.isLoading = false;
            } catch (error) {
                // console.error("Error fetching approval stages:", error.response.data.detail);
                this.isLoading = false;
            }
        },
        showAddApprovalStage() {
            this.showAddApprovalStageModal = true;
        },
        confirmaddApprovalStage() {
            this.showAddApprovalStageModal = false;
            this.getProduct();
        },
        canceladdApprovalStage() {
            this.showAddApprovalStageModal = false;
        },
    }
}
</script>