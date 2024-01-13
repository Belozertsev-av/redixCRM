<template>
    <div class="center">
        <div class="title">Тестовое окно</div>
        <p>
            <main-menu></main-menu>
        </p>
        <p>
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
        </p>
        <p>
            <main-month-diagram
            month="jan"
            sum="450000"
            plan="500000"></main-month-diagram>
        </p>
    </div>
</template>

<script setup>
import MainCategoryDiagram from '~/components/Digrams/mainCategoryDiagram.vue'
import MainMonthDiagram from '~/components/Digrams/MainMonthDiagram.vue'
</script>

<style lang="scss" scoped>
    .center{
        width: 100%;
        margin: 150px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    p{
        display: flex;
        flex-wrap: wrap;
        margin: 5px 10px;
    }
</style>