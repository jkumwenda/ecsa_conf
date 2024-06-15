<template>
    <div
        class="flex flex-row sm:px-16 px-4 py-2 items-center justify-between bg-ghost-300 border-solid border-b-4 border-bondi-blue-500">
        <div class="flex sm:flex-row">
            <router-link :to="{ name: 'Home' }"><img src="@/assets/images/50years.png"
                    class=" sm:h-20 h-12"></router-link>
        </div>
        <div class="flex flex-row items-center justify-between space-x-4">
            <!-- <router-link :to="{ name: 'Login' }" class="text-abbey-400">All events
            </router-link> -->
            <router-link :to="{ name: 'Login' }"
                class="sm:px-8 px-2 sm:py-3 py-1 text-white-50 rounded-2xl bg-bondi-blue text-stone-100 hover:bg-bondi-blue-600">Sign
                In
            </router-link>
            <router-link :to="{ name: 'Register' }"
                class="sm:px-8 px-2 sm:py-3 py-1 text-white-50 rounded-2xl bg-bondi-blue text-stone-100 hover:bg-bondi-blue-600">Sign
                Up
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterView"
}
</script>