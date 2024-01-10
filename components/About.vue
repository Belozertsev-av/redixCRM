<template>
    <div class="center">
        <mainCategoryDiagram 
        category="Ключи"
        percent="40"
        sum="20000"
        ></mainCategoryDiagram>
    </div>
</template>

<script setup>
import mainCategoryDiagram from './Digrams/mainCategoryDiagram.vue';

</script>

<style lang="scss" scoped>

    h2 {
        margin-top: 150px;
        text-align: center;
    }
    .center{
        width: 100%;
        margin: 150px auto;
        display: flex;
        justify-content: center;
    }
</style>