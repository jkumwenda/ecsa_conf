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
            <div class="flex flex-col sm:flex-row flex-wrap p-4">
                <div v-for="participant in participants" :key="participant.id" class="sm:w-6/12 w-full ">
                    <div class="flex flex-col bg-white-100 p-4">
                        <div class="w-full space-y-4 border border-abbey-600 text-center font-bold">
                            <div class="flex flex-row p-4 items-center justify-center space-x-4">
                                <div><img src="@/assets/images/logo.png" class="sm:h-20 h-12" /></div>
                                <div><img src="@/assets/images/lesotho.png" class="sm:h-20 h-12" /></div>
                                <div><img src="@/assets/images/ecsalogo.png" class="sm:h-20 h-12" /></div>
                            </div>
                            <div>
                                <p>16th BIEANNUAL</p>
                                <p>SCIENTIFIC</p>
                                <p>CONFERENCE</p>
                            </div>
                            <div
                                class="bg-bondi-blue-500 p-2 font-bold text-white flex flex-row justify-center space-x-1">
                                <span class="">{{ participant.title }}</span>
                                <span class="">{{ participant.firstname }}</span>
                                <span class="uppercase">{{ participant.lastname }}</span>
                            </div>
                            <div>{{ participant.institution }}</div>
                            <div>{{ participant.country }}</div>
                            <div class="flex flex-col items-center">
                                <div class="bg-bondi-blue-500 p-2 font-bold text-white rounded-xl">DELEGATE</div>
                            </div>
                            <div class="flex justify-center">
                                <QRCodeVue :value="qrValue + participant.id" :size="110" :color-dark="'#000000'"
                                    :color-light="'#ffffff'" />
                            </div>
                            <div class="flex flex-col items-end"><img src="@/assets/images/bg.png"
                                    class="sm:h-12 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { XCircleIcon } from '@heroicons/vue/24/solid';
import QRCodeVue from 'qrcode.vue';

export default {
    components: {
        QRCodeVue,
        XCircleIcon
    },
    data() {
        return {
            qrValue: 'https://events.ecsaconm.org/#/participant_status/'
        };
    },
    props: {
        show: {
            type: Boolean,
            required: true
        },
        participants: {
            type: Array,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
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
/* Add styles here if needed */
</style>
