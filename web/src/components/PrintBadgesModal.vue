<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50 overflow-auto">
        <div
            class="flex flex-col sm:w-10/12 w-11/12 max-h-[90vh] overflow-y-auto border-2 bg-bondi-blue-50 border-bondi-blue-500 border-t-8 z-50 rounded-xl shadow-lg ">
            <div
                class="flex flex-row items-center justify-between font-bold text-lg text-abbey-500 border-b-2 p-4 px-6 border-bondi-blue-500">
                <div>Conference Badges</div>
                <span title="Cancel Registration" class="p-1 border border-abbey-600 rounded-full cursor-pointer">
                    <XCircleIcon class="w-5 h-5 text-abbey-800" @click="close" />
                </span>
            </div>
            <div>
                <button @click="generateNextPDF"
                    class="flex flex-row space-x-2 bg-abbey-500 hover:bg-abbey-300 text-white-400 py-2 px-4 rounded mb-4 m-4">
                    <DocumentIcon class="w-6 h-6"></DocumentIcon> <span>Generate Next PDF</span>
                </button>
            </div>

            <div id="badge-container">
                <div v-for="(page, pageIndex) in paginatedParticipants" :key="pageIndex" class="badge-page">
                    <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                        <div v-for="(participant, index) in page" :key="index"
                            class="border-2 border-bondi-blue-500 rounded-md shadow-md flex flex-col justify-center text-center"
                            style="width: 100%; height: 100%;">
                            <div class="flex flex-row p-4 items-center justify-center space-x-4">
                                <div><img src="@/assets/images/logo.png" class="sm:h-20 h-12" /></div>
                                <div><img src="@/assets/images/lesotho.png" class="sm:h-20 h-12" /></div>
                                <div><img src="@/assets/images/ecsalogo.png" class="sm:h-20 h-12" /></div>
                            </div>
                            <div class="text-xl font-extrabold mb-3 pt-2">
                                <p>{{ participant.title }}
                                    <span class="uppercase">
                                        {{ participant.firstname }}
                                    </span> {{ participant.lastname }}
                                </p>
                            </div>
                            <div
                                class="flex flex-row bg-bondi-blue-500 font-bold text-white justify-center text-md pb-4">
                                <span class="">{{ participant.institution }}</span>
                            </div>
                            <div class="flex flex-row font-bold justify-center text-md pb-4">
                                <span class="">{{ participant.country }}</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="bg-bondi-blue-500 px-4 pb-4 font-bold text-white rounded-md text-md">
                                    {{ participant.participant_category }}
                                </div>
                            </div>
                            <div class="flex justify-center pt-2">
                                <QRCodeVue
                                    :value="appUrl + '/#/user-event-status/' + participant.id + '/' + event_id + '/'"
                                    :size="85" :color-dark="'#000000'" :color-light="'#ffffff'" />
                            </div>
                            <div class="font-3xl font-bold">ID #:{{ participant.id }}</div>
                            <div class="text-sm font-normal">www.ecsaconm.org</div>
                            <div class="flex flex-col items-end mt-4"><img src="@/assets/images/bg.png"
                                    class="sm:h-10 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import html2pdf from "html2pdf.js";
import QRCodeVue from 'qrcode.vue';
import { XCircleIcon, DocumentIcon } from '@heroicons/vue/24/solid';

export default {
    components: {
        QRCodeVue, XCircleIcon, DocumentIcon
    },
    data() {
        return {
            badgesPerPage: 4,
            startIndex: 0,
            participantsPerPDF: 20,
            appUrl: process.env.VUE_APP_BASE_URL
        };
    },
    computed: {
        paginatedParticipants() {
            const participantsSubset = this.participants.slice(this.startIndex, this.startIndex + this.participantsPerPDF);
            return this.chunkArray(participantsSubset, this.badgesPerPage);
        },
    },
    props: {
        show: {
            type: Boolean,
            required: true
        },
        participants: {
            type: Array,
            required: true
        },
        event_id: { type: Number, required: true }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        chunkArray(array, chunkSize) {
            const result = [];
            for (let i = 0; i < array.length; i += chunkSize) {
                result.push(array.slice(i, i + chunkSize));
            }
            return result;
        },
        async generateNextPDF() {
            if (this.startIndex >= this.participants.length) {
                alert("No more participants to print.");
                return;
            }
            const element = document.getElementById("badge-container");
            const opt = {
                margin: [0.2, 0.2], // [top, left, bottom, right] in inches
                filename: `Conference_badges_${Math.floor(this.startIndex / this.participantsPerPDF) + 1}.pdf`,
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
                pagebreak: { mode: ['css', 'legacy'] } // Allows page breaks
            };
            await html2pdf().from(element).set(opt).save();
            this.startIndex += this.participantsPerPDF;
        },
    },
    watch: {
        show(val) {
            if (val) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    },
    mounted() {
        if (this.show) {
            document.body.style.overflow = 'hidden';
        }
    }
};
</script>

<style scoped>
.badge-page {
    page-break-after: always;
    margin: 0.2in;
}

.top_pad {
    padding-top: 0px;
}

@media print {
    .badge-page {
        padding-bottom: 1in;
    }
}
</style>
