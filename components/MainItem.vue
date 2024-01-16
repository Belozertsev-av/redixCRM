<template>
    <div class="order-status__main">
        <div class="order-status__number">
            <div class="order-status__num">
                {{ props.itemdata.orderNum }}
            </div>
            <div class="order-status__datentime">
                <div class="order-status__date subtext">
                    {{ props.itemdata.orderDate }}
                </div>
                <div class="order-status__time subtext">
                    {{ props.itemdata.orderTime }}
                </div>
            </div>
        </div>
        <div class="order-status__fio">
            <div class="order-status__fio-name">
                {{ props.itemdata.orderName }}
            </div>
            <div class="order-status__fio-phone subtext">
                {{ props.itemdata.orderPhone }}
            </div>
        </div>
        <div class="order-status__payments">
            <div class="order-status__sum">
                {{ props.itemdata.orderPay }}руб.
            </div>
        </div>
        <div class="order-status__quantity">
            <div class="order-status__quantity-all">
                {{ props.itemdata.orderQuantity }} изделия
            </div>
            <div class="order-status__quantity-check">
                <div class="order-status__quantity-ready subtext">
                    Готово: {{ props.itemdata.orderQuantityCheck }}
                </div>
                <div class="order-status__quantity-issued subtext">
                    Выдано: {{ props.itemdata.orderQuantityIssued }}
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
        type: Float32Array,
        required: false,
        default: 3000
    },
    days: {
        type: Int16Array,
        required: false,
        default: 14
    },
    itemdata: {
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
.order-status{
    &__main {
        width: 100%;
        height: 75px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__btn {
        width: 250px;
        height: 32px;
    }
    &__datentime {
        padding-top: $padding;
        display: flex;
    }
    &__time{
        padding-left: $padding * 2;
    }
    &__quantity-check {
        padding-top: $padding;
        display: flex;
    }
    &__quantity-issued{
        padding-left: $padding * 2;
    }
    &__fio-phone {
        padding-top: $padding;
    }
}
</style>