<template>
    <div class="order-status_main">
        <div class="order-status_main_number">
            <div class="order-status_main_number_num">
                {{ props.itemdata.orderNum }}
            </div>
            <div class="order-status_main_number_datentime">
                <div class="order-status_main_number_datentime_date subtext">
                    {{ props.itemdata.orderDate }}
                </div>
                <div class="order-status_main_number_datentime_time subtext">
                    {{ props.itemdata.orderTime }}
                </div>
            </div>
        </div>
        <div class="order-status_main_FIO">
            <div class="order-status_main_FIO_name">
                {{ props.itemdata.orderName }}
            </div>
            <div class="order-status_main_FIO_phone subtext">
                {{ props.itemdata.orderPhone }}
            </div>
        </div>
        <div class="order-status_main_payments">
            <div class="order-status_main_payments_sum">
                {{ props.itemdata.orderPay }}руб.
            </div>
        </div>
        <div class="order-status_main_quantity">
            <div class="order-status_main_quantity_all">
                {{ props.itemdata.orderQuantity }} изделия
            </div>
            <div class="order-status_main_quantity_check">
                <div class="order-status_main_quantity_check_ready subtext">
                    Готово: {{ props.itemdata.orderQuantityCheck }}
                </div>
                <div class="order-status_main_quantity_check_issued subtext">
                    Выдано: {{ props.itemdata.orderQuantityIssued }}
                </div>
            </div>
        </div>
        <div class="order-status_buttons">
            <v-btn class="order-status_buttons_btn title"
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
    .order-status_main {
        margin: 70px 0px 0px 0px;
        width: 1000px;
        height: 75px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .order-status_buttons_btn {
        width: 250px;
        height: 32px;
    }

    .order-status_main_number_datentime {
        display: flex;
    }

    .order-status_main_quantity_check {
        display: flex;
    }

    .order-status_main_number_datentime {
        padding: 5px 0px 0px 0px;
    }

    .order-status_main_FIO_phone {
        padding: 5px 0px 0px 0px;
    }

    .order-status_main_quantity_check {
        padding: 5px 0px 0px 0px;
    }

    .order-status_main_number_datentime_time {
        padding: 0px 0px 0px 10px;
    }

    .order-status_main_quantity_check_issued {
        padding: 0px 0px 0px 10px;
    }
</style>