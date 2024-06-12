<template>
    <div class="flex flex-row space-x-4 bg-athens-gray-100 py-4 text-sm items-center">
        <button @click="prevPage" :disabled="currentPage === 1"
            class="px-3 rounded-xl text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400  p-1">Previous</button>
        <div class="font-bold">Page {{ currentPage }} of {{ totalPages }}</div>
        <button @click="nextPage" :disabled="currentPage === totalPages"
            class="px-3 rounded-xl text-white-200 bg-bondi-blue-500 hover:bg-bondi-blue-400  p-1">Next</button>
    </div>
</template>

<script>
export default {
    name: "PaginationComponent",
    props: {
        currentPage: Number,
        totalPages: Number,
    },
    methods: {
        prevPage() {
            console.log('Here')
            if (this.currentPage > 1) {
                this.$emit("page-change", this.currentPage - 1);
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.$emit("page-change", this.currentPage + 1);
            }
        },
    },
};
</script>