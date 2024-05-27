<template>
    <div class="bg-daintree-400 text-white">
        <div class="flex flex-row space-x-4 sm:px-16 px-4 sm:py-8 py-2">
            <div class="sm:w-4/12 w-12/12">
                <h1 class="text-lg font-bold font-roboto mb-2">About ECSA-HC</h1>
                <div class="p-2 font-roboto-thin space-y-1">
                    <p>Who we are</p>
                    <p>Governance</p>
                    <p>Management</p>
                    <p>Partner</p>
                </div>
            </div>
            <div class="sm:w-4/12 w-12/12">
                <h1 class="text-lg font-bold font-roboto mb-2">ECSA Functions</h1>
                <div class="p-2 font-roboto-thin space-y-1">
                    <p>Member states</p>
                    <p>College </p>
                    <p>Programmes</p>
                    <p>Projects</p>
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
            <div>Social Icons</div>
        </div>
    </div>
</template>
<script>
// import { Faceb, HandThumbUpIcon, BanknotesIcon } from '@heroicons/vue/24/solid'
export default {
    name: "FooterView"
}
</script>
