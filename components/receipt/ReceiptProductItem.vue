<template>
    <div class="productitem__main">
        <v-card class="productitem__main-body">
            <div class="productitem__main-container">
                <div class="productitem__main-overview">
                    <div class="productitem__main-text">
                        {{ props.itemData.orderName }}
                    </div>
                    <div class="productitem__main-text subtext">
                        {{ props.itemData.orderDescription }}
                    </div>
                </div>
                <div class="productitem__main-pay">
                    <div class="productitem__main-text">
                        {{ props.itemData.orderSum }}
                    </div>
                    <div class="productitem__main-text subtext">
                        {{ props.itemData.orderDate }}
                    </div>
                </div>
                <div class="productitem__main-close">
                    <div class="productitem__main-btn">
                        <v-btn icon="mdi mdi-close" variant="text"></v-btn>
                    </div>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    itemData: {
        type: Object,
        required: true,
        default: {
            orderName: "Название",
            orderDescription: "Описание",
            orderSum: "9999",
            orderDate: "01.01.2024",
        }
    }
})
</script>

<style lang="scss" scoped>
.productitem {
    &__main {
    }
    &__main-body{
        border-radius: 0;
    }
    &__main-container{
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        width: 100%;
        height: 75px;
        padding: 20px;
        grid-template-columns: 2fr 2.5fr 1fr 2fr 2fr;
        transition: 0.1s;
        &:hover{
            background-color: $unactiveColor;
        }
    }
}

</style>