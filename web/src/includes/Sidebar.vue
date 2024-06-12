<template>
    <div class="space-y-4">
        <ul class="space-y-1">
            <router-link v-if="permissions.includes('VIEW_DASHBOARD')" :to="{ name: 'Dashboard' }"
                :class="{ 'text-bondi-blue-600 bg-white': $route.name === 'Dashboard' }"
                class="flex flex-row space-x-2 p-2 px-4 ml-4 rounded-l-2xl items-center">
                <RectangleGroupIcon class="h-5 w-5" /><span>Dashboard</span>
            </router-link>

            <router-link v-if="permissions.includes('VIEW_EVENT')" :to="{ name: 'Events' }"
                :class="{ 'text-bondi-blue-600 bg-white': $route.name === 'Events' }"
                class="flex flex-row space-x-2 p-2 px-4 ml-4 rounded-l-2xl items-center">
                <CalendarDaysIcon class="h-5 w-5" /><span>Events</span>
            </router-link>

            <router-link v-if="permissions.includes('VIEW_PARTICIPANT')" :to="{ name: 'Participants' }"
                :class="{ 'text-bondi-blue-600 bg-white': $route.name === 'Participants' }"
                class="flex flex-row space-x-2 p-2 px-4 ml-4 rounded-l-2xl items-center">
                <UserGroupIcon class="h-5 w-5" /><span>Participants</span>
            </router-link>

            <router-link :to="{ name: 'Users' }" :class="{ 'text-bondi-blue-600 bg-white': $route.name === 'Users' }"
                class="flex flex-row space-x-2 p-2 px-4 ml-4 rounded-l-2xl items-center">
                <UsersIcon class="h-5 w-5" /><span>Users</span>
            </router-link>

            <router-link :to="{ name: 'Configurations' }"
                :class="{ 'text-bondi-blue-600 bg-white': $route.name === 'Configurations' }"
                class="flex flex-row space-x-2 p-2 px-4 ml-4 rounded-l-2xl items-center">
                <Cog8ToothIcon class="h-5 w-5" /><span>Configurations</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
import { RectangleGroupIcon, UserGroupIcon, UsersIcon, Cog8ToothIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid'
import { useAuthStore } from "@/store/authStore";

export default {
    name: 'SidebarView',
    components: {
        RectangleGroupIcon, UserGroupIcon, UsersIcon, Cog8ToothIcon, CalendarDaysIcon
    },
    setup() {
        const authStore = useAuthStore()
        const permissions = authStore.permissions
        return { permissions }
    },
}
</script>