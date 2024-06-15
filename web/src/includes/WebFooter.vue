<template>
    <div class="bg-daintree-400 text-white">
        <div class="flex flex-row space-x-4 sm:px-16 px-4 sm:py-8 py-2">
            <div class="sm:w-4/12 w-12/12">
                <h1 class="text-lg font-bold font-roboto mb-2">About ECSA-HC</h1>
                <div class="flex flex-col p-2 font-roboto-thin space-y-1">
                    <a href="https://ecsahc.org/ecsa-hc-at-a-glance/" target="_blank">Who we are</a>
                    <a href="https://ecsahc.org/governance-structure/" target="_blank">Governance</a>
                    <a href="https://ecsahc.org/management-team/" target="_blank">Management</a>
                    <a href="https://ecsahc.org/partners/" target="_blank">Partners</a>
                </div>
            </div>
            <div class="sm:w-4/12 w-12/12">
                <h1 class="text-lg font-bold font-roboto mb-2">ECSA Functions</h1>
                <div class="flex flex-col p-2 font-roboto-thin space-y-1">
                    <a href="https://ecsahc.org/partners/" target="_blank">Member states</a>
                    <a href="https://chs.ecsahc.org/" target="_blank">Colleges</a>
                    <a href="https://ecsahc.org/ecsa-projects/#" target="_blank">Projects</a>
                </div>
            </div>
            <div class="sm:w-4/12 w-12/12">
                <h1 class="text-lg font-bold font-roboto mb-2">Support Center</h1>
                <div class="p-2 font-roboto-thin space-y-1">
                    <p>Registration</p>
                    <p>FAQ</p>
                    <p>Contact us</p>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-between text-sm sm:px-16 px-4 py-4 bg-daintree-500 font-roboto-thin">
            <div class="flex flex-row space-x-4">
                <p>&copy; {{ currentYear }} All Rights Reserved, ECSA-HC</p>
                <p>Privacy Policy</p>
                <p>Cookie Preferences</p>
            </div>
            <!-- <div>Social Icons</div> -->
        </div>
    </div>
</template>
<script>
// import { Faceb, HandThumbUpIcon, BanknotesIcon } from '@heroicons/vue/24/solid'
export default {
    name: "FooterView"
}
</script>
