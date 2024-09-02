<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50 overflow-auto">
        <div
            class="flex flex-col border-2 border-bondi-blue-500 border-t-8 bg-white-100 rounded-xl shadow-lg sm:w-5/12 w-11/12 max-h-[90vh] overflow-y-auto z-50">
            <div
                class="flex flex-row items-center justify-between font-bold text-lg text-abbey-500 border-b-2 p-4 px-6 border-bondi-blue-500">
                <div>Badge preview</div>
                <span title="Cancel Registration" class="p-1 border border-abbey-600 rounded-full cursor-pointer">
                    <XCircleIcon class="w-5 h-5 text-abbey-800" @click="close" />
                </span>
            </div>
            <div class="m-10 space-y-4 border border-abbey-600 text-center font-bold">
                <div class="flex flex-row p-4 items-center justify-center space-x-4">
                    <div><img src="@/assets/images/logo.png" class="sm:h-20 h-12" /></div>
                    <div><img src="@/assets/images/lesotho.png" class="sm:h-20 h-12" /></div>
                    <div><img src="@/assets/images/ecsalogo.png" class="sm:h-20 h-12" /></div>
                </div>
                <div class="text-2xl">
                    <p>{{ participant.title }} <span class="uppercase">{{ participant.firstname }}</span> {{
                        participant.lastname }}</p>
                </div>
                <div class="bg-bondi-blue-500 p-2 font-bold text-white flex flex-row justify-center text-xl space-x-1">
                    <span class="">{{ participant.institution }}</span>
                </div>
                <div class="text-xl">{{ participant.country }}</div>
                <div class="flex flex-col items-center">
                    <div class="bg-bondi-blue-500 px-4 py-1 font-bold text-white rounded-md text-md">DELEGATE</div>
                </div>
                <div class="flex justify-center">
                    <QRCodeVue :value="appUrl + '/#/user-event-status/' + participant.id + '/' + event_id + '/'"
                        :size="110" :color-dark="'#000000'" :color-light="'#ffffff'" />
                </div>
                <div class="font-3xl">ID #:{{ participant.id }}</div>
                <div class="text-sm font-normal">www.ecsaconm.org</div>
                <div class="flex flex-col items-end"><img src="@/assets/images/bg.png" class="sm:h-12 h-6" /></div>
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
            appUrl: process.env.VUE_APP_BASE_URL
        };
    },
    props: {
        show: {
            type: Boolean,
            required: true
        },
        participant: {
            type: Object,
            required: true
        },
        event_id: {
            type: Number,
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    },
    watch: {
        show(val) {
            console.log(this.participant)
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