<template>
    <div v-if="show" class="p-4">
        <button @click="generatePDF" class="bg-blue-500 text-white py-2 px-4 rounded mb-4">
            Generate PDF
        </button>

        <!-- Badge Container -->
        <div id="badge-container">
            <div v-for="(batch, batchIndex) in paginatedParticipants" :key="batchIndex" class="mb-4">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="(participant, index) in batch" :key="index"
                        class="border p-4 bg-gray-100 rounded-md shadow-md flex flex-col items-center"
                        style="width: 100%; height: 465px;">
                        <div class="flex flex-row p-4 items-center justify-center space-x-4">
                            <div><img src="@/assets/images/logo.png" class="sm:h-20 h-12" /></div>
                            <div><img src="@/assets/images/lesotho.png" class="sm:h-20 h-12" /></div>
                            <div><img src="@/assets/images/ecsalogo.png" class="sm:h-20 h-12" /></div>
                        </div>

                        <!-- Participant Details -->
                        <div class="text-center">
                            <h3 class="text-lg font-bold">{{ participant.firstname }}</h3>
                            <p class="text-sm">{{ participant.country }}</p>
                            <p class="text-sm">{{ participant.phone }}</p>
                            <p class="text-sm">{{ participant.email }}</p>
                        </div>

                        <!-- QR Code -->
                        <div class="mt-2">
                            <!-- Assuming you have a method to generate QR code URLs -->
                            <img :src="generateQRCode(participant)" alt="QR Code" class="w-20 h-20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
    data() {
        return {
            participants: [
                // Example data, replace this with your JSON data
                { firstname: "John Doe", country: "USA", phone: "+1234567890", email: "john@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                { firstname: "Jane Smith", country: "UK", phone: "+0987654321", email: "jane@example.com" },
                // More participants...
                // Make sure you have enough participants to create multiple pages
            ],
            badgesPerPage: 4, // Number of badges per page
        };
    },
    computed: {
        paginatedParticipants() {
            // Break participants into chunks of the number of badges that fit on a page
            return this.chunkArray(this.participants, this.badgesPerPage);
        },
    },
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        generateQRCode(participant) {
            // Replace with actual QR code generation logic or API call
            return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                participant.email
            )}`;
        },
        chunkArray(array, chunkSize) {
            // Utility function to split array into chunks
            const result = [];
            for (let i = 0; i < array.length; i += chunkSize) {
                result.push(array.slice(i, i + chunkSize));
            }
            return result;
        },
        generatePDF() {
            const element = document.getElementById("badge-container");

            const opt = {
                margin: 0.5,
                filefirstname: "conference_badges.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
                pagebreak: { mode: ['css', 'legacy'] } // Allows page breaks
            };

            html2pdf().from(element).set(opt).save();
        },
    },
};
</script>
