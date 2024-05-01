<template>
  <div class="order-status__main">
    <div class="order-status__number">
      <div class="order-status__num">
        {{ props.itemData.orderNum }}
      </div>
      <div class="order-status__datentime">
        <div class="order-status__date subtext">
          {{ props.itemData.orderDate }}
        </div>
        <div class="order-status__time subtext">
          {{ props.itemData.orderTime }}
        </div>
      </div>
    </div>
    <div class="order-status__fio">
      <div class="order-status__fio-name">
        {{ props.itemData.orderName }}
      </div>
      <div class="order-status__fio-phone subtext">
        {{ props.itemData.orderPhone }}
      </div>
    </div>
    <div class="order-status__payments">
      <div class="order-status__sum">
        {{ props.itemData.orderPay }}руб.
      </div>
    </div>
    <div class="order-status__quantity">
      <div class="order-status__quantity-all">
        {{ props.itemData.orderQuantity }} изделия
      </div>
      <div class="order-status__quantity-check">
        <div class="order-status__quantity-ready subtext">
          Готово: {{ props.itemData.orderQuantityCheck }}
        </div>
        <div class="order-status__quantity-issued subtext">
          Выдано: {{ props.itemData.orderQuantityIssued }}
        </div>
      </div>
    </div>
    <div class="order-status__buttons">
      <v-btn class="order-status__btn"
             :style="`background-color: ${color}; color: ${fontcolor}`">
        {{ title }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  status: {
    type: String,
    required: true,
    default: 'status'
  },
  cash: {
    type: Number,
    required: false,
    default: 3000
  },
  days: {
    type: Number,
    required: false,
    default: 14
  },
  itemData: {
    type: Object,
    required: true,
    default: {
      orderNum: "000-000001",
      orderDate: "01.01.2024",
      orderTime: "12:00",
      orderName: "Иванов Иван Иванович",
      orderPhone: "+7(999)999-99-99",
      orderPay: "5200",
      orderQuantity: "2",
      orderQuantityCheck: "1",
      orderQuantityIssued: "0"
    }
  }
})

const test = ref()

const color = ref('#1F93FF')
const fontcolor = ref('#FFFFFF')
const title = ref('Статус')

if (props.status === 'surcharge') {
  color.value = '#FF471F'
  title.value = `Доплата ${props.cash}`
} else if (props.status === 'paid') {
  color.value = '#46BC32'
  title.value = 'Оплачено'
} else if (props.status === 'guarantee') {
  color.value = '#1F93FF'
  title.value = `Гарантия ${props.days} дней`
} else if (props.status === 'guarantee-gone') {
  color.value = '#F5F5F5'
  fontcolor.value = '#989898'
  title.value = 'Гарантия закончилась'
}
</script>

<style lang="scss" scoped>
.order-status {
  &__main {
    width: 100%;
    height: 75px;
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 2.5fr 1fr 2fr 2fr;
    align-items: center;
    transition: 0.1s;

    &:hover {
      background-color: $unactiveColor;
    }
  }

  &__btn {
    width: 100%;
    height: 32px;
  }

  &__datentime {
    padding-top: $padding;
    display: flex;
  }

  &__time {
    padding-left: $padding * 2;
  }

  &__quantity-check {
    padding-top: $padding;
    display: flex;
  }

  &__quantity-issued {
    padding-left: $padding * 2;
  }

  &__fio-phone {
    padding-top: $padding;
  }
}
</style>