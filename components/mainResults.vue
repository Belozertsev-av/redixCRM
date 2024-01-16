<template>
    <v-card elevation="4" class="main-result">
        <div class="main-result__item text">Наличные: {{ props.resultdata.payCash }}руб.</div>
        <div class="main-result__item text">По карте: {{ props.resultdata.payCard }}руб.</div>
        <div class="main-result__item subtitle">Итого: {{ props.resultdata.payResult }}руб.</div>
    </v-card>
</template>

<script setup lang="ts">

const props = defineProps(
    {
        resultdata: {
        type: Object,
        required: true,
        default: {
            payCard: 0,
            payCash: 0,
            payResult: 0
        }
    }
    }
)

</script>

<style lang="scss" scoped>

.main-result{
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: $padding;
    border-radius: 0;
    &__item{
        margin: 0 $paddingMedium;
    }
}
</style> 