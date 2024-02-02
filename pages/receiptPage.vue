<template>
   <div class="receipt">
    <div class="container">
        <div class="receipt__body">
            <div class="receipt__column">
                <receipt-client-data></receipt-client-data>
            </div>
            <div class="receipt__column">
                <v-card elevation="4" class="receipt__row">
                    <div class="receipt__products-list">
                        <receipt-product-item></receipt-product-item>
                        <receipt-product-item></receipt-product-item>
                        <receipt-product-new></receipt-product-new>
                    </div>
                    <receipt-payments :amount="5200" :remains="1200"></receipt-payments>
                </v-card>
                <div class="receipt__row">
                    <div class="receipt__btn-block">
                        <v-btn class="receipt__btn">Гарантия</v-btn>
                        <v-btn class="receipt__btn">Возврат</v-btn>
                    </div>
                    <div class="receipt__btn-block">
                        <v-btn class="receipt__btn">Печать</v-btn>
                        <v-btn class="receipt__btn">Сохранить</v-btn>
                        <v-btn class="receipt__btn">Отмена</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script setup lang="ts">
    import ReceiptPayments from '~/components/receipt/ReceiptPayments.vue';

    definePageMeta({
        layout: 'active'
    })
</script>

<style lang="scss" scoped>
    .receipt {
        width: 100%;
		&__body {
            display: flex;
            margin: 0 auto;
            width: 100%;
		}

		&__column {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            &:first-child{
                width: 35%;
            }         
		}

		&__row {
            &:first-child{
                display: flex;
                flex-direction: column;
                flex: 1 1 auto;
                margin-top: $paddingGrand;
            }
            &:last-child{
                display: flex;
                justify-content: space-between;
                padding-top: $paddingMedium;
            }
		}

		&__products-list {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
		}

		&__btn-block {

		}
        &__btn{
            margin: $padding;
        }
}

</style>