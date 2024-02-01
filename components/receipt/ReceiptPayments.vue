<template>
  <v-card elevation="4" class="payments">
    <div class="payments__body">
      <div class="payments__list">
        <receipt-pay :amount="3000" type="cash"></receipt-pay>
        <receipt-pay :amount="1000" type="card"></receipt-pay>
        <receipt-pay-new @click="openModal = true"></receipt-pay-new>
        <v-dialog v-model="openModal">
          <receipt-pay-method @close-modal="openModal = false">
          </receipt-pay-method>
        </v-dialog>
      </div>
      <v-card elevation="4" class="payments__footer">
        <div class="payments__footer-body">
          <v-btn class="payments__remains">Остаток: {{ props.remains }} руб.</v-btn>
          <div class="payments__amount title">Итого: {{ props.amount }} руб.</div>
        </div>
      </v-card>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import ReceiptPay from "~/components/receipt/ReceiptPay.vue";
  import ReceiptPayNew from "~/components/receipt/ReceiptPayNew.vue";
  import ReceiptPayMethod from "~/components/receipt/ReceiptPayMethod.vue";

  const props = defineProps({
    remains: {
      type: Number,
      required: false,
      default: 0
    },
    amount: {
      type: Number,
      required: false,
      default: 0
    }
  })

  const openModal = ref(false)

</script>

<style lang="scss" scoped>
  .payments{
    width: 100%;
    &__body{
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &__list{
      display: flex;
      padding: $padding $padding $paddingMedium $padding;
    }
    &__footer{
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    &__footer-body{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: $paddingMedium;
    }
    &__remains{
      color: #fff;
      background-color: $primaryRed;
      padding: 0 $paddingGrand;
    }
    &__amount{
    }
  }
</style>