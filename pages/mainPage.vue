<template>
    <div class="main">
        <main-menu class="main__menu"></main-menu>
        <div class="main__journal">
            <main-item 
            v-for="item in 20" 
            class="main__item"
            :key="item.id"></main-item>
        </div>
        <main-results class="main__results"></main-results>
    </div>
</template>

<script setup>
import mainSideBar from '~/components/MainSideBar.vue'
import MainCategoryDiagram from '~/components/Digrams/mainCategoryDiagram.vue'
import MainMonthDiagram from '~/components/Digrams/MainMonthDiagram.vue'
const items = reactive({})
</script>

<style lang="scss" scoped>
    .main{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 320px auto;
        grid-auto-rows: auto 70px;   
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
</style>
