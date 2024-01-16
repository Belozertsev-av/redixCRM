<template>
    <div class="center">
        <div class="title">Тестовое окно</div>
        <div class="block">
            <main-menu></main-menu>
        </div>
        <div class="block">
            <main-side-bar></main-side-bar>
        </div>
        <div class="block">
            <main-category-diagram
                category="keys"
                sum="100000"
                profit="500000">
            </main-category-diagram>
            <main-category-diagram
                category="repair"
                sum="300000"
                profit="500000">
            </main-category-diagram>
            <main-category-diagram
                category="products"
                sum="50000"
                profit="500000">
            </main-category-diagram>
            <main-category-diagram
                category="refund"
                sum="10000"
                profit="500000">
            </main-category-diagram>
            <main-category-diagram>
            </main-category-diagram>
        </div>
        <div class="block">
            <main-month-diagram
            month="jan"
            sum="450000"
            plan="500000"></main-month-diagram>
        </div>
        <div class="block">
            <main-item status="surcharge"
                cash="2300"></main-item>
            <main-item status="guarantee"
                days="7"></main-item>
            <main-item status="paid"></main-item>
            <main-item status="guarantee-gone"></main-item>
        </div>
        <div class="block">
            <main-results></main-results>
        </div>
    </div>
</template>

<script setup>
import mainSideBar from '~/components/MainSideBar.vue'
import MainCategoryDiagram from '~/components/Digrams/mainCategoryDiagram.vue'
import MainMonthDiagram from '~/components/Digrams/MainMonthDiagram.vue'
</script>

<style lang="scss" scoped>
    .center{
        width: 100%;
        margin: 50px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .block{
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 5px 10px;
    }
</style>
