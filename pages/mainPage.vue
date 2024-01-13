<template>
    <div class="center">
        <h2>About</h2>
        <div class="test">
            <div>
                <MainMenu></MainMenu>
            </div>
        <div>
            <MainItem></MainItem>
            <MainItem status='surcharge'></MainItem>
            <MainItem status='paid'></MainItem>
            <MainItem status='guarantee'></MainItem>
            <MainItem status='guarantee-gone'></MainItem>
        </div>
    </div>
    </div>
    
</template>

<script setup>

import mainCategoryDiagram from '~/components/Digrams/mainCategoryDiagram.vue';

</script>

<style lang="scss" scoped>
    h2 {
        text-align: center;
    }
    .center{
        width: 100%;
        margin: 150px auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .test {
        display: flex;
        justify-content: space-between;
    }
</style>