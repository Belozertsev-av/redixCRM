<template>
    <div class="main">
        <transition name="slide-fade">
            <main-side-bar class="main__sidebar" v-show="clicks.menu"></main-side-bar>
        </transition>
        <main-menu class="main__menu"></main-menu>
        <div class="main__journal">
            <main-item
                class="main__item"
                status="surcharge"
                :cash="3000"
                :item-data="someData[0]"></main-item>
            <main-item
                class="main__item"
                status="guarantee"
                :days="8"
                :item-data="someData[2]"></main-item>
            <main-item
                class="main__item"
                status="guarantee-gone"
                :item-data="someData[3]"></main-item>
            <main-item v-for="item in 10"
                :key="item"
                class="main__item"
                status="paid"
                :item-data="someData[1]"></main-item>
        </div>
        <transition name="slide-fade-right">
            <main-diagrams class="main__stats" v-show="clicks.stats"></main-diagrams>
        </transition>
        <main-results class="main__results"
            :resultData="someResults"></main-results>
    </div>
</template>

<script setup lang="ts">

import { useClicksStore } from '@/stores/clicks'
const clicks = useClicksStore()

const someResults = reactive({
    payCard: 10950,
    payCash: 6000,
    payResult: 16950
})
const someData = reactive([
    {
        orderNum: "4ОЗ-000001",
        orderDate: "01.01.2024",
        orderTime: "12:00",
        orderName: "Георгиев Георгий Георгиевич",
        orderPhone: "+7(999)999-99-99",
        orderPay: "5200",
        orderQuantity: "3",
        orderQuantityCheck: "2",
        orderQuantityIssued: "2"
    },
    {
        orderNum: "4ОЗ-000002",
        orderDate: "01.01.2024",
        orderTime: "13:00",
        orderName: "Семенов Семен Семенович",
        orderPhone: "+7(999)777-77-77",
        orderPay: "7050",
        orderQuantity: "3",
        orderQuantityCheck: "3",
        orderQuantityIssued: "0"
    },
    {
        orderNum: "4ОЗ-000003",
        orderDate: "01.01.2024",
        orderTime: "14:30",
        orderName: "Петров Петр Петрович",
        orderPhone: "+7(999)555-55-55",
        orderPay: "3500",
        orderQuantity: "1",
        orderQuantityCheck: "1",
        orderQuantityIssued: "1"
    },
    {
        orderNum: "4ОЗ-000004",
        orderDate: "01.01.2024",
        orderTime: "17:20",
        orderName: "Иванов Иван Иванович",
        orderPhone: "+7(999)333-33-33",
        orderPay: "1200",
        orderQuantity: "2",
        orderQuantityCheck: "2",
        orderQuantityIssued: "2"
    }
])

</script>

<style lang="scss" scoped>
    .main{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 320px auto;
        grid-auto-rows: auto 70px;   
        position: relative;
        &__sidebar{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            border-radius: 0;
        }
        &__stats{
            position: absolute;
            top: 0;
            right: 0;
            z-index: 4;
            border-radius: 0;
        }
        &__menu{
            grid-column-start: 1;
            grid-column-end: 1;
            grid-row-start: 1;
            grid-row-end: 3;
            z-index: 3;
        }
        &__journal{
            grid-column-start: 2;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 2;
            z-index: 1;
            display: flex;
            flex-direction: column;
            height: calc(100dvh - 140px);
            overflow-y: scroll;
        }
        &__results {
            grid-column-start: 2;
            grid-column-end: 2;
            grid-row-start: 2;
            grid-row-end: 2;
            z-index: 2;
        }
    }
    .slide-fade-enter-active, .slide-fade-right-enter-active {
    transition: all 0.2s ease-out;
    }

    .slide-fade-leave-active, .slide-fade-right-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from, .slide-fade-leave-to {
    transform: translateX(-100px);
    opacity: 0;
    }
    .slide-fade-right-enter-from, .slide-fade-right-leave-to {
    transform: translateX(100px);
    opacity: 0;
    }
</style>
