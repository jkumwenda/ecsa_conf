<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle"></HeaderView>
        <SpinnerComponent v-if="isLoading" />
        <div v-else class="flex flex-col rounded-2xl bg-catskill-white-100 shadow-sm p-4 space-y-4">
            <h1 class="font-bold text-bondi-blue-500 text-md">Contact Address</h1>
            <div class="flex flex-col">
                <span>
                    <p>ECSACONM Main Office Location</p>
                    <p>Plot No.157, Oloirien Njiro Road</p>
                    <p>P.O. Box 1009</p>
                    <p>Arusha,Tanzania</p>
                </span>
            </div>
            <h1 class="font-bold text-bondi-blue-500 text-md">Whatsapp</h1>
            <span>
                <p>+255 757 618 084</p>
            </span>
            <h1 class="font-bold text-bondi-blue-500 text-md">Email</h1>
            <span>
                <p><a class="text-dodger-blue" href="mailto:ecsaconmsouth@info.com ">ecsaconmsouth@info.com </a></p>
            </span>
        </div>
    </div>
</template>

<script>
import HeaderView from '@/includes/Header.vue'
import SpinnerComponent from "@/components/Spinner.vue";

export default {
    name: 'ContactsView',
    components: {
        HeaderView, SpinnerComponent,
    },
    setup() {
        return { headerTitle: "Contacts and Support" }
    },
}
</script>