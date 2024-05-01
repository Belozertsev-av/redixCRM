<template>
  <v-card elevation="4" class="pay">
    <div class="pay__body">
      <div class="pay__amount subtitle">{{ props.amount }} руб.</div>
      <div class="pay__type">{{ type }}</div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  amount: {
    type: Number,
    required: true,
    default: '0'
  },
  type: {
    type: String,
    required: true,
    default: 'default'
  }
})
const type = computed(() => {
  if (props.type == 'cash') return 'Наличные'
  else if (props.type == 'card') return 'По карте'
  else return 'Вид оплаты не определен'
})
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