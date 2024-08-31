<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle"></HeaderView>
        <SpinnerComponent v-if="isLoading" />
        <div v-else class="flex flex-col rounded-2xl bg-catskill-white-100 shadow-sm p-4 space-y-4">
            <h1 class="font-bold text-bondi-blue-500 text-md">Contact Address</h1>
            <div class="flex flex-col">
                <span>
                    <p>East Central and Southern Africa College of Nursing and Midwifery - ECSACONM</p>
                    <p>Plot No.157, Oloirien Njiro Road, P.O. Box 1009 Arusha,Tanzania</p>
                </span>
            </div>
            <h1 class="font-bold text-bondi-blue-500 text-md">Tel</h1>
            <span>
                <p>+255-27-254 9362; 254 9365/6</p>
            </span>
            <h1 class="font-bold text-bondi-blue-500 text-md">Fax</h1>
            <span>
                <p>+255-27-254 9392</p>
            </span>
            <h1 class="font-bold text-bondi-blue-500 text-md">Email</h1>
            <span>
                <p><a class="text-dodger-blue" href="mailto:info@ecsaconm.org">info@ecsaconm.org</a></p>
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