<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle"></HeaderView>
        <SpinnerComponent v-if="isLoading" />
        <div v-else class="flex flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm p-4">
            <router-link v-if="permissions.includes('VIEW_USER')" :to="{ name: 'Users' }"
                class="p-1 w-3/12 justify-center items-center text-center">
                <div
                    class="flex flex-row items-center p-4 rounded-2xl shadow-md bg-catskill-white-300 border-2 border-bondi-blue-500 cursor-pointer">
                    <UsersIcon class="h-8 w-8 font-light text-bondi-blue-500" />
                    <div class="pl-2 font-bold text-abbey">Users</div>
                </div>
            </router-link>
            <router-link v-if="permissions.includes('VIEW_ROLE')" :to="{ name: 'Roles' }"
                class="p-1 w-3/12 justify-center items-center text-center">
                <div
                    class="flex flex-row items-center p-4 rounded-2xl shadow-md bg-catskill-white-300 border-2 border-bondi-blue-500 cursor-pointer">
                    <UserGroupIcon class="h-8 w-8 font-light text-bondi-blue-500" />
                    <div class="pl-2 font-bold text-abbey">Roles</div>
                </div>
            </router-link>
            <router-link v-if="permissions.includes('VIEW_EVENT_TYPE')" :to="{ name: 'EventTypes' }"
                class="p-1 w-3/12 justify-center items-center text-center">
                <div
                    class="flex flex-row items-center p-4 rounded-2xl shadow-md bg-catskill-white-300 border-2 border-bondi-blue-500 cursor-pointer">
                    <CalendarDaysIcon class="h-8 w-8 font-light text-bondi-blue-500" />
                    <div class="pl-2 font-bold text-abbey">Event Types</div>
                </div>
            </router-link>
            <router-link v-if="permissions.includes('VIEW_ORGANISER')" :to="{ name: 'Organisers' }"
                class="p-1 w-3/12 justify-center items-center text-center">
                <div
                    class="flex flex-row items-center p-4 rounded-2xl shadow-md bg-catskill-white-300 border-2 border-bondi-blue-500 cursor-pointer">
                    <BriefcaseIcon class="h-8 w-8 font-light text-bondi-blue-500" />
                    <div class="pl-2 font-bold text-abbey">Organiser</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import HeaderView from '@/includes/Header.vue'
import SpinnerComponent from "@/components/Spinner.vue";
import { useAuthStore } from "@/store/authStore";
import {
    UsersIcon, UserGroupIcon, CalendarDaysIcon, BriefcaseIcon
} from '@heroicons/vue/24/solid'

export default {
    name: 'ConfigurationsView',
    components: {
        HeaderView, SpinnerComponent,
        UsersIcon, UserGroupIcon, CalendarDaysIcon, BriefcaseIcon
    },
    setup() {
        const authStore = useAuthStore()
        const permissions = authStore.permissions
        return { headerTitle: "System configurations", permissions }
    },
}
</script>