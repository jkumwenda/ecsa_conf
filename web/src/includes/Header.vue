<template>
    <div class="flex flex-row p-4 bg-catalina-blue rounded-2xl border-b-4 border-abbey-400">
        <div class="flex flex-row flex-1 justify-between space-x-2 items-center">
            <div class="flex flex-row items-center font-bold space-x-4">
                <Bars3CenterLeftIcon class="h-8 w-8 text-bondi-blue-500" />
                <span class="sm:text-xl text-md text-abbey-600">{{ headerTitle }}</span>
            </div>
            <div class="flex items-center space-x-4 justify-end">
                <!-- <div class="flex flex-row items-center">
                    <BellIcon class="w-6 h-6 text-bondi-blue-500"></BellIcon>
                </div> -->
                <router-link :to="{ name: 'Contacts' }" class="flex flex-row items-center">
                    <EnvelopeIcon class="w-6 h-6 text-bondi-blue-500"></EnvelopeIcon>
                </router-link>
                <ProfileComponent :label="`${firstname} ${lastname}`"></ProfileComponent>
            </div>
        </div>
    </div>
</template>

<script>
import { Bars3CenterLeftIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'
import ProfileComponent from "@/components/ProfileComponent";
export default {
    name: "HeaderView",
    components: {
        Bars3CenterLeftIcon, EnvelopeIcon, ProfileComponent
    },
    props: {
        headerTitle: String,
    }
}
</script>