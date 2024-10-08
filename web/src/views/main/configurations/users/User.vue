<template>
  <div class="flex flex-col space-y-4 flex-1">
    <HeaderView :headerTitle="headerTitle"></HeaderView>
    <SpinnerComponent v-if="isLoading" />
    <div v-else class="flex flex-col space-y-4">
      <div class="flex sm:flex-row flex-col sm:space-x-4 space-x-0 sm:space-y-0 space-y-4">
        <div
          class="flex flex-col space-y-4 sm:w-4/12 w-full items-center text-center space-x-4 border border-abbey-100  p-4 px-4 rounded-2xl shadow-sm">
          <div class="flex">
            <img alt="Vue logo" class="object-cover rounded-full" src="@/assets/images/profile.jpg" />
          </div>
          <div class="flex flex-col space-y-2">
            <p class="text-xl font-semibold">
              {{ user.firstname }} {{ user.lastname }}
            </p>
            <p class="text-normal" v-for="position in assignedPositions" :key="position.id"
              @click="removePosition(position.id)">{{
                position.position
              }}
            </p>
            <a :href="'mailto:' + user.email" class="text-blue-500 hover:underline text-bondi-blue-500">
              {{ user.email }}
            </a>
            <div>
              <button @click="resetPassword()"
                class="bg-abbey-500 text-abbey-50 hover:bg-abbey-800 rounded-xl px-4 py-2">
                Reset Password
              </button>
            </div>
            <div v-if="message" class="p-4 m-6 rounded-xl text-abbey-100 py-2 text-sm bg-mountain-meadow-500">
              {{
                message }}
            </div>
          </div>
        </div>
        <div class="flex space-x-4 sm:w-8/12 w-full">
          <div class="flex flex-col space-y-4 flex-1 p-4 px-4 border border-abbey-100 rounded-2xl shadow-sm">
            <h1 class="text-xl font-bold">Roles</h1>
            <div class="flex flex-1 space-y-4 flex-col">
              <div class="space-y-2">
                <div class="border-b border-b-abbey-100">Active roles (click to remove)</div>
                <div class="flex flex-1 flex-wrap">
                  <button class="p-4 py-1 text-sm m-1 bg-abbey-400 text-abbey-50 hover:bg-abbey-800 rounded-xl"
                    v-for="role in assignedRoles" :key="role.id" @click="removeRole(role.id)">{{
                      role.role
                    }}
                  </button>
                </div>
              </div>

              <div class="space-y-2">
                <div class="border-b border-b-abbey-100">Available roles (click to add)</div>
                <div class="flex flex-1 flex-wrap">
                  <button class="p-4 py-1 text-sm m-1 bg-abbey-600 text-abbey-50 hover:bg-abbey-800 rounded-xl"
                    v-for="role in filteredRoles" :key="role.id" @click="assignRole(role.id)">{{
                      role.role
                    }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderView from '@/includes/Header.vue'
import { fetchItem, createItem, fetchData, deleteItem, updateItem } from "@/services/apiService";
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";

export default {
  name: "UserView",
  components: {
    SpinnerComponent, HeaderView
  },
  data() {
    return {
      headerTitle: "User profile",
      user: [],
      id: this.$route.params.id,
      isLoading: true,
      roles: [],
      departments: [],
      positions: [],
      assignedRoles: [],
      signatures: [],
      roleData: {},
      positionData: {},
      departmentData: {},
      message: "",
      userPasswordData: {
        id: "",
      },
      currentPage: 1,
      totalPages: "",
      pageSize: process.env.VUE_APP_PAGE_SIZE,
      searchPhrase: "",
      showUploadSignatureFileModal: false,
    };
  },
  mounted() {
    this.getUser();
    this.getRoles();
    this.getDepartments();
    this.getPositions();
  },

  setup() {
    const authStore = useAuthStore()
    const permissions = authStore.permissions
    return { permissions }
  },

  computed: {
    filteredRoles() {
      return this.roles.filter((role) => {
        const roleId = role.id;
        return !this.assignedRoles.some(
          (assignedRole) => assignedRole.role_id === roleId
        );
      });
    },
    filteredPositions() {
      return this.positions.filter((position) => {
        const positionId = position.id;
        return !this.assignedPositions.some(
          (assignedPosition) => assignedPosition.position_id === positionId
        );
      });
    },
    filteredDepartments() {
      return this.departments.filter((department) => {
        const departmentId = department.id;
        return !this.assignedDepartments.some(
          (assignedDepartment) => assignedDepartment.department_id === departmentId
        );
      });
    },
  },
  methods: {
    async getUser() {
      try {
        const response = await fetchItem("users", this.id);
        this.user = response.user;
        this.assignedRoles = response.roles;
        this.signatures = response.signatures;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching users:", error);
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
    async getDepartments() {
      try {
        const response = await fetchData("departments", this.currentPage, this.pageSize, this.searchPhrase);
        this.departments = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching departments:", error);
        this.isLoading = false;
      }
    },
    async getPositions() {
      try {
        const response = await fetchData("positions", this.currentPage, this.pageSize, this.searchPhrase);
        this.positions = response.data;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching positions:", error);
        this.isLoading = false;
      }
    },

    async assignRole(role_id) {
      this.roleData = { "user_id": this.id, "role_id": role_id };
      this.isLoading = true;
      try {
        const response = await createItem("users/roles/", this.roleData);
        this.user_role = response.data;
        this.isLoading = false;
        this.getUser();
      } catch (error) {
        console.error("Error fetching users:", error);
        this.isLoading = false;
      }
    },

    async removeRole(id) {
      this.isLoading = true;
      try {
        await deleteItem("users/roles", id);
        const index = this.assignedRoles.findIndex((assignedRole) => assignedRole.id === id);
        if (index !== -1) {
          this.assignedRoles.splice(index, 1);
        }
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching users:", error);
        this.isLoading = false;
      }
    },

    async assignDepartment(department_id) {
      this.departmentData = { "user_id": this.id, "department_id": department_id };
      this.isLoading = true;
      try {
        const response = await createItem("users/departments/", this.departmentData);
        this.user_department = response.data;
        this.isLoading = false;
        this.getUser();
      } catch (error) {
        console.error("Error fetching users:", error);
        this.isLoading = false;
      }
    },

    async removeDepartment(id) {
      this.isLoading = true;
      try {
        await deleteItem("users/departments", id);
        const index = this.assignedDepartments.findIndex((assignedDepartment) => assignedDepartment.id === id);
        if (index !== -1) {
          this.assignedDepartments.splice(index, 1);
        }
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching users:", error);
        this.isLoading = false;
      }
    },

    async assignPosition(position_id) {
      this.positionData = { "user_id": this.id, "position_id": position_id };
      this.isLoading = true;
      try {
        const response = await createItem("users/positions/", this.positionData);
        this.user_position = response.data;
        this.isLoading = false;
        this.getUser();
      } catch (error) {
        console.error("Error fetching users:", error);
        this.isLoading = false;
      }
    },

    async removePosition(id) {
      this.isLoading = true;
      try {
        await deleteItem("users/positions", id);
        const index = this.assignedPositions.findIndex((assignedPosition) => assignedPosition.id === id);
        if (index !== -1) {
          this.assignedPositions.splice(index, 1);
        }
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching users:", error);
        this.isLoading = false;
      }
    },
    async resetPassword() {
      this.userPasswordData.id = this.id
      this.isLoading = true;
      try {
        const response = await updateItem("users/password", this.id);
        this.response = response,
          this.message = "Password updated successfully"
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching users:", error);
        this.isLoading = false;
      }
    },
  },
};
</script>
