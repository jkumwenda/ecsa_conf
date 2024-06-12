<template>
    <div class="flex flex-row px-3 py-1 items-center space-x-4 border-2 border-shuttle-gray-200 rounded-xl text-sm"
        :class="getRowClass(index)">
        <div class="flex-1">{{ event.event }}</div>
        <span :class="registrationStatusClass">
            <div :class="registeredStatusClass">{{ registeredStatus }}</div>
        </span>
        <div v-if="isRegistrationOpen" class="flex">
            <CheckBadgeIcon v-if="!isRegistered" @click="$emit('register', event.id)"
                class="text-mountain-meadow-900 w-8 h-8 cursor-pointer" />
            <XCircleIcon v-else @click="$emit('deregister', event.id)" class="text-flamingo w-8 h-8 cursor-pointer" />
        </div>
    </div>
</template>

<script>
import { CheckBadgeIcon, XCircleIcon } from '@heroicons/vue/24/solid';

export default {
    props: {
        event: Object,
        index: Number,
        getRowClass: Function,
        getRegistrationStatus: Function,
        getRegisteredStatus: Function,
    },
    computed: {
        isRegistrationOpen() {
            return this.getRegistrationStatus(this.event.registration_end_date) === 'open';
        },
        isRegistered() {
            return this.getRegisteredStatus(this.event.id);
        },
        registrationStatusClass() {
            return this.isRegistrationOpen ? 'text-mountain-meadow-900' : 'text-flamingo';
        },
        registeredStatusClass() {
            return this.isRegistered ? 'text-bondi-blue-600' : this.registrationStatusClass;
        },
        registeredStatus() {
            return this.isRegistered ? 'Registered' : this.isRegistrationOpen ? 'Open' : 'Closed';
        },
    },
    components: {
        CheckBadgeIcon,
        XCircleIcon,
    },
};
</script>
