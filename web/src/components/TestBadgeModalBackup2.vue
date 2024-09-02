<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50 overflow-auto">
        <div
            class="flex flex-col sm:w-10/12 w-11/12 max-h-[90vh] overflow-y-auto border-2 bg-bondi-blue-50 border-bondi-blue-500 border-t-8 z-50 rounded-xl shadow-lg ">
            <div
                class="flex flex-row items-center justify-between font-bold text-lg text-abbey-500 border-b-2 p-4 px-6 border-bondi-blue-500">
                <div>Badge print</div>
                <span title="Cancel Registration" class="p-1 border border-abbey-600 rounded-full cursor-pointer">
                    <XCircleIcon class="w-5 h-5 text-abbey-800" @click="close" />
                </span>
            </div>
            <div class="flex flex-col items-end p-2">
                <button @click="generatePDF" class="bg-abbey-500 text-white py-2 px-4 rounded mb-4">
                    Generate PDF
                </button>
            </div>
            <SpinnerComponent v-if="isLoading" />
            <div v-else id="badge-container" class="h-full">

            </div>
        </div>
    </div>

</template>

<script>
import { XCircleIcon } from '@heroicons/vue/24/solid';
import html2pdf from "html2pdf.js";

export default {
    components: {
        XCircleIcon,
    },
    data() {
        return {
            appUrl: process.env.VUE_APP_BASE_URL,
            isLoading: false
        };
    },
    props: {
        show: {
            type: Boolean,
            required: true
        },
        participants: {
            type: Object,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        generatePDF() {
            this.isLoading = true
            const element = document.getElementById("badge-container");
            const opt = {
                margin: 0.5,
                filename: "conference_badges.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
                pagebreak: { mode: ['css', 'legacy'] }
            };

            html2pdf().from(element).set(opt).save();
            this.isLoading = false
        },
    },
};
</script>
