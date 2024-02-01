<template>
    <div class="center">
        <div class="block">
            <receipt-pay :amount="3000" type="cash"></receipt-pay>
            <receipt-pay :amount="1000" type="card"></receipt-pay>
            <receipt-pay-new @click="openModal = true"></receipt-pay-new>
            <v-dialog v-model="openModal">
                <receipt-pay-method 
                @close-modal="openModal = false"></receipt-pay-method>
            </v-dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
    import ReceiptPay from "~/components/receipt/ReceiptPay.vue";
    import ReceiptPayNew from "~/components/receipt/ReceiptPayNew.vue";
    import ReceiptPayMethod from "~/components/receipt/ReceiptPayMethod.vue";

    const openModal = ref(false)

</script>

<style lang="scss" scoped>
    .center{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .block{
        display: flex;
    }
</style>