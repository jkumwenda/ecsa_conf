<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle"></HeaderView>
        <div class="flex flex-col space-y-4">
            <div class="flex sm:flex-row flex-col sm:justify-between sm:items-center items-start">
                <search-component @search="handleSearch"></search-component>
                <router-link :to="{ name: 'AddUser' }" v-if="permissions.includes('ADD_USER')"
                    class="mt-2 px-4 py-2 text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400 rounded-2xl">
                    Add User</router-link>
            </div>
            <SpinnerComponent v-if="isLoading" />
            <div v-else class="rounded-2xl border border-white-600 shadow-sm p-4 text-abbey-500">
                <div class="flex sm:flex-row flex-col bg-shuttle-gray-300 p-2 text-sm font-bold">
                    <div class="sm:w-2/12 w-full">Firstname</div>
                    <div class="sm:w-3/12 w-full">Lastname</div>
                    <div class="sm:w-2/12 w-full">Phone</div>
                    <div class="sm:w-3/12 w-full">Email</div>
                    <div class="sm:w-1/12 w-full">Action</div>
                </div>
                <div class="flex sm:flex-row flex-col p-2 text-sm items-center" v-for="(user, index) in users"
                    :key="user.id" :class="getRowClass(index)">
                    <div class="sm:w-2/12 w-full">
                        <span class="uppercase">{{ user.firstname }}</span>
                    </div>
                    <div class="sm:w-3/12 w-full">{{ user.lastname }}</div>
                    <div class="sm:w-2/12 w-full">{{ user.phone }}</div>
                    <div class="sm:w-3/12 w-full">{{ user.email }}</div>
                    <div class="flex space-x-2 sm:w-1/12 w-full">
                        <router-link v-if="permissions.includes('VIEW_USER')"
                            class="p-1 border border-st-tropaz-600 bg-st-tropaz-200 rounded-full"
                            :to="{ name: 'User', params: { id: user.id } }">
                            <EyeIcon class="w-5 h-5 text-st-tropaz-600"></EyeIcon>
                        </router-link>
                        <router-link v-if="permissions.includes('UPDATE_USER')"
                            class="p-1 bg-mountain-meadow-300 border border-mountain-meadow-700 rounded-full"
                            :to="{ name: 'EditUser', params: { id: user.id } }">
                            <PencilSquareIcon class=" w-5 h-5 text-mountain-meadow-900">
                            </PencilSquareIcon>
                        </router-link>
                        <div v-if="permissions.includes('DELETE_USER')"
                            class="p-1 border border-flamingo-600 bg-flamingo-400 rounded-full">
                            <TrashIcon class="w-5 h-5  text-flamingo-800" @click=" showDeleteConfirmation(user.id)">
                            </TrashIcon>
                        </div>
                    </div>
                </div>
                <pagination-component :currentPage="currentPage" :totalPages="totalPages"
                    @page-change="handlePageChange">
                </pagination-component>
            </div>
        </div>
        <delete-confirmation-modal :show="showDeleteModal" @confirmed="deleteUser(deleteUserId)"
            @canceled="cancelDelete"></delete-confirmation-modal>
    </div>
</template>

<script>
import HeaderView from '@/includes/Header.vue'
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid'
import PaginationComponent from '@/components/PaginationComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'

import { fetchData, deleteItem } from "@/services/apiService";
import SpinnerComponent from "@/components/Spinner.vue";
import DeleteConfirmationModal from "@/components/DeleteConfirmationModal.vue";
import { useAuthStore } from "@/store/authStore";

export default {
    name: 'UsersView',
    components: {
        EyeIcon, PencilSquareIcon, TrashIcon, PaginationComponent, SearchComponent, HeaderView, SpinnerComponent, DeleteConfirmationModal
    },
    data() {
        return {
            headerTitle: "System users",
            users: {},
            isLoading: true,
            showDeleteModal: false,
            deletePersonnelId: null,
            currentPage: 1,
            totalPages: "",
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            searchPhrase: ""
        };
    },
    mounted() {
        this.getUsers();
    },
    setup() {
        const authStore = useAuthStore()
        const permissions = authStore.permissions
        return { permissions }
    },
    methods: {
        async getUsers() {
            try {
                const response = await fetchData("users", this.currentPage, this.pageSize, this.searchPhrase);
                this.users = response.data;
                this.totalPages = response.pages;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching users:", error);
                this.isLoading = false;
            }
        },
        async handleSearch(searchQuery) {
            this.searchPhrase = searchQuery
            this.getUsers();
        },
        async handlePageChange(newPage) {
            this.currentPage = newPage;
            this.getUsers();
        },
        async deleteUser(id) {
            this.isLoading = true;
            try {
                await deleteItem("users", id);
                const index = this.users.findIndex((user) => user.id === id);
                if (index !== -1) {
                    this.users.splice(index, 1);
                }
                this.showDeleteModal = false;
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching users:", error);
                this.isLoading = false;
                this.showDeleteModal = false;
            }
        },
        showDeleteConfirmation(id) {
            this.deleteUserId = id;
            this.showDeleteModal = true;
        },
        cancelDelete() {
            this.showDeleteModal = false;
        },
        getRowClass(index) {
            return index % 2 === 0 ? 'bg-st-tropaz-100' : 'bg-shuttle-gray-50';
        },
    }
}
</script>