<template>
    <form @submit.prevent="addRole" class="sm:w-4/12 w-12/12 flex flex-row space-x-2">
        <input v-model="searchQuery"
            class="mt-2 px-4 p-2 bg-white border shadow-sm border-ghost-600 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Search..." />
        <button @click="search" class="mt-2 px-4 py-2 text-white-400 bg-daintree-600 hover:bg-daintree-400 rounded-md">
            Search</button>
    </form>
</template>
<script>
export default {
    name: "SearchComponent",
    data() {
        return {
            searchQuery: "",
        };
    },
    methods: {
        search() {
            this.$emit("search", this.searchQuery);
        },
    },
};
</script>
