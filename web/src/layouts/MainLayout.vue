<template>
    <div class="flex sm:flex-row flex-col flex-1">
        <div class="sm:w-2/12 w-12/12 space-y-6 sm:py-8 bg-bondi-blue">
            <router-link :to="{ name: 'Dashboard' }" class="flex sm:flex-row justify-center">
                <img src="@/assets/images/logo.png" class="w-24 h-24">
            </router-link>
            <SidebarView></SidebarView>
        </div>
        <div class="flex flex-col sm:w-10/12 w-12/12 sm:p-6 p-4 space-y-6">
            <router-view></router-view>
            <FooterView></FooterView>
        </div>
    </div>
</template>

<script>
import SidebarView from '@/includes/Sidebar.vue'
import FooterView from '@/includes/Footer.vue'

export default {
    name: 'MainLayout',
    components: {
        SidebarView, FooterView
    },

    data() {
        return {
            currentYear: null,
        };
    },
    mounted() {
        const options = { year: 'numeric' };
        this.currentYear = new Date().toLocaleDateString(undefined, options);
    },
}
</script>
