<template>
    <div class="flex sm:flex-col flex-col flex-1">
        <div class="sm:w-12/12 w-12/12 space-y-6 drop-shadow-xl">
            <WebHeader></WebHeader>
        </div>
        <div class="sm:py-8 p-4 flex-1"><router-view></router-view></div>
        <!-- <div class="flex flex-col sm:visible invisible items-center bg-ghost-300 sm:px-16 py-8 flex-1 space-y-6">
            <h1 class="sm:font-archivo font-roboto text-bondi-blue-700 text-2xl">ECSA-HC Member States</h1>
            <div class="flex sm:flex-row flex-col space-x-6">
                <img src="@/assets/images/flags/Flag-Eswatini.webp"
                    class="rounded-sm border-1 border-solid border-white h-12" alt="Eswatini" title="Eswatini">
                <img src="@/assets/images/flags/Flag-Kenya.webp"
                    class="rounded-sm border-1 border-solid border-white h-12" alt="Kenya" title="Kenya">
                <img src="@/assets/images/flags/Flag-Malawi.webp"
                    class="rounded-sm border-1 border-solid border-white h-12" alt="Malawi" title="Malawi">
                <img src="@/assets/images/flags/Flag-Mauritius.webp"
                    class="rounded-sm border-1 border-solid border-white h-12" alt="Mauritius" title="Mauritius">
                <img src="@/assets/images/flags/Flag-Tanzania.webp"
                    class="rounded-sm border-1 border-solid border-white h-12" alt="Tanzania"
                    title="United Republic of Tanzania">
                <img src="@/assets/images/flags/Flag-Zambia.webp"
                    class="rounded-sm border-1 border-solid border-white h-12" alt="Zambia" title="Zambia">
                <img src="@/assets/images/flags/Flag-Zimbabwe.webp"
                    class="rounded-sm border-1 border-solid border-white h-12" alt="Zimbabwe" title="Zimbabwe">
                <img src="@/assets/images/flags/Flag-Lesotho.webp"
                    class="rounded-sm border-1 border-solid border-white h-12" alt="Lesotho" title="Lesotho">
                <img src="@/assets/images/flags/Flag-Uganda.webp"
                    class="rounded-sm border-1 border-solid border-white h-12" alt="Uganda" title="Uganda">
            </div>
        </div> -->
        <div class="flex flex-col sm:w-12/12 w-12/12 sm:p-0 space-y-6">
            <FooterView></FooterView>
        </div>
    </div>
</template>

<script>
import WebHeader from '@/includes/WebHeader.vue'
import FooterView from '@/includes/WebFooter.vue'

export default {
    name: 'WebLayout',
    components: {
        WebHeader, FooterView
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
