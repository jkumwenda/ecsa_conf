<template>
    <div class="bg-mercury-500 text-abbey">
        <div
            class="flex sm:flex-row flex-col items-center sm:space-x-4 sm:space-y-0 space-y-4 sm:px-16 px-4 sm:py-8 py-2">
            <div class="sm:w-3/12 w-12/12 flex flex-col items-center sm:items-start justify-center">
                <h1 class="text-lg font-bold font-roboto mb-2">About ECSACONM</h1>
                <div class="flex flex-col sm:items-start items-center p-2 font-roboto space-y-1">
                    <a href="https://ecsaconm.org/about-us/" target="_blank">Who we are</a>
                    <a href="https://ecsaconm.org/membership/" target="_blank">Membership</a>
                </div>
            </div>
            <div class="sm:w-3/12 w-12/12 flex flex-col items-center sm:items-start justify-center">
                <h1 class="text-lg font-bold font-roboto mb-2">ECSACONM Functions</h1>
                <div class="flex flex-col sm:items-start items-center p-2 font-roboto space-y-1">
                    <a href="https://ecsaconm.org/about-us/" target="_blank">Member states</a>
                    <a href="https://ecsaconm.org/resources/" target="_blank">Resources</a>
                </div>
            </div>
            <div class="sm:w-3/12 w-12/12 flex flex-col items-center sm:items-start justify-center">
                <h1 class="text-lg font-bold font-roboto mb-2">Support Center</h1>
                <div class="flex flex-col sm:items-start items-center p-2 font-roboto space-y-1">
                    <a href="https://ecsaconm.org/online-payment/" target="_blank">Online payment</a>
                    <a href="https://ecsaconm.org/contact-us/" target="_blank">Contact us</a>
                </div>
            </div>
            <div class="sm:w-3/12 w-12/12 flex flex-col items-center sm:items-start justify-center">
                <h1 class="text-lg font-bold font-roboto mb-2">Support Center</h1>
                <div class="flex flex-col sm:items-start items-center p-2 font-roboto space-y-1">
                    <a href="https://ecsaconm.org/online-payment/" target="_blank">Online payment</a>
                    <a href="https://ecsaconm.org/contact-us/" target="_blank">Contact us</a>
                </div>
            </div>
        </div>
        <div
            class="flex sm:flex-row flex-col items-center justify-between text-sm sm:px-16 px-4 py-4 bg-daintree-800 text-white-100 font-roboto">
            <div class="flex sm:flex-row flex-col items-center space-x-4">
                <p>&copy; {{ currentYear }} All Rights Reserved, ECSACONM</p>
                <!-- <p>Privacy Policy</p>
                <p>Cookie Preferences</p> -->
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
