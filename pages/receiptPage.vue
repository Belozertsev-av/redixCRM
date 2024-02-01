<template>
    <div class="center">
        <div class="block">
            <receipt-payments :amount="5200" :remains="1200"></receipt-payments>
        </div>
    </div>
</template>

<script setup lang="ts">
    import ReceiptPayments from '~/components/receipt/ReceiptPayments.vue';
</script>

<style lang="scss" scoped>
    .center{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 30px;
    }
    .block{
        width: 100%;
        display: flex;
    }
</style>