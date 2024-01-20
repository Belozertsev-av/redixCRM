<template>
    <v-card elevation="4" class="diagrams">
        <div class="diagrams__body">
            <main-month-diagram class="diagrams__item"
                month="jan"
                :plan="500000"
                :sum="347000"></main-month-diagram>
            <main-daily-diagram
            :daily-sum="{
                mon: 10000,
                tue: 15000,
                wed: 20000,
                thu: 25000,
                fri: 30000,
                sat: 35000,
                sun: 0 
            }"
            :plan="500000"></main-daily-diagram>
            <main-category-diagram class="diagrams__item"
                category="repair"
                :profit="347000"
                :sum="217000"></main-category-diagram>
            <main-category-diagram class="diagrams__item"
                category="keys"
                :profit="347000"
                :sum="90000"></main-category-diagram>
            <main-category-diagram class="diagrams__item"
                category="products"
                :profit="347000"
                :sum="30000"></main-category-diagram>
            <main-category-diagram class="diagrams__item"
                category="refund"
                :profit="347000"
                :sum="7000"></main-category-diagram>
        </div>
    </v-card>
</template>

<script setup>
import MainMonthDiagram from './Diagrams/MainMonthDiagram.vue';
import MainCategoryDiagram from './Diagrams/MainCategoryDiagram.vue';
import MainDailyDiagram from './Diagrams/MainDailyDiagram.vue';

</script>

<style lang="scss" scoped>
    .diagrams{
        background-color: $secondaryColor;
        color: #fff;
        width: 320px;
        height: 100%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
        width: 0;
        }
        &__body{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: $paddingMedium $padding;
        }
        &__item{
            margin: $padding;
        }
    }
</style>