<template>
  <v-card elevation="4" class="pay">
    <div class="pay__body">
      <div class="pay__amount title">+</div>
      <div class="pay__type">Внести оплату</div>
    </div>
  </v-card>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.pay {
  cursor: pointer;
  margin: $padding;
  width: 180px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  &__body {
    color: $unactiveFontColor;
    padding: $paddingMedium;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  &__amount {
    padding-bottom: $padding;
  }
}
</style>