<template>
    <div
        class="flex flex-row sm:px-16 px-4 py-2 items-center justify-between bg-ghost-300 border-solid border-b-4 border-bondi-blue-500 relative z-50">
        <div class="flex sm:flex-row items-center space-x-2">
            <router-link :to="{ name: 'Home' }">
                <img src="@/assets/images/logo.png" class="sm:h-20 h-12">
            </router-link>
            <router-link :to="{ name: 'Home' }"
                class="font-roboto font-bold sm:text-3xl text-sm uppercase text-abbey">Biennial
                Scientific Conference
            </router-link>
        </div>
        <div class="hidden sm:flex flex-row items-center justify-between space-x-4">
            <div class="flex-1">
                <router-link :to="{ name: 'WebEvents' }" class="hover:text-bondi-blue-500" @click="closeMenu">
                    All events
                </router-link>
            </div>
            <div class="flex space-x-2">
                <router-link :to="{ name: 'Login' }"
                    class="sm:px-8 px-2 sm:py-2 py-1 rounded-full border border-bondi-blue-500 text-stone-100 hover:bg-bondi-blue-600"
                    @click="closeMenu">
                    Sign In
                </router-link>
                <router-link :to="{ name: 'Register' }"
                    class="sm:px-8 px-2 sm:py-2 py-1 text-white-50 rounded-full bg-bondi-blue text-stone-100 hover:bg-bondi-blue-600"
                    @click="closeMenu">
                    Sign Up
                </router-link>
            </div>
        </div>
        <div class="sm:hidden flex items-center">
            <Bars3CenterLeftIcon @click="toggleMenu" class="h-8 w-8 text-bondi-blue-500 focus:outline-none" />
        </div>
        <transition name="fade" class="">
            <div v-if="isMenuOpen"
                class="sm:hidden flex flex-col items-start space-y-2 bg-bondi-blue absolute top-full left-0 w-full px-4 py-2 ">
                <router-link :to="{ name: 'WebEvents' }" class="block w-full py-2" @click="closeMenu">All
                    events</router-link>
                <router-link :to="{ name: 'Login' }" class="block w-full py-2" @click="closeMenu">Sign In</router-link>
                <router-link :to="{ name: 'Register' }" class="block w-full py-2" @click="closeMenu">Sign
                    Up</router-link>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="isMenuOpen" class="sm:hidden fixed inset-0 bg-black bg-opacity-50" @click="toggleMenu">
            </div>
        </transition>
    </div>
</template>

<script>
import { Bars3CenterLeftIcon } from '@heroicons/vue/24/solid'
export default {
    name: "FooterView",
    components: { Bars3CenterLeftIcon },
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
