<template>
    <div class="category-diagram">
        <v-card class="category-diagram__body" elevation="4">
            <div class="category-diagram__icon">
                <v-icon :color="color" size="40" :icon="icon"></v-icon>
            </div>
            <div class="category-diagram__title title">{{ title }}</div>
            <div class="category-diagram__progress-bar">
                <div class="progress-bar__body">
                    <div class="progress-bar__bar" :style="`width: ${percent}%; background-color: ${color};`"></div>
                </div>
            </div>
            <div class="category-diagram__stats">
                {{ percent }}% из 100%
            </div>
            <div class="category-dagram__sub-stats subtext">
                {{ props.sum }}руб.
            </div>
        </v-card>
    </div>
</template>

<script setup lang="ts">
/* Обьявление пропсов и переменных

category - обьявляет категорию диаграммы, влияет на цвет и тайтл. может быть: repair, keys, products, refund 

sum - Фактическая сумма заработанных средств по заданной категории за месяц на данный момент

profit - Фактическая сумма заработанных средств в общем за месяц на данный момент
*/
const props = defineProps({
    category: {
        type: String,
        required: true,
        default: 'category'
    },
    sum: {
        type: Number,
        required: true,
        default: 0
    },
    profit: {
        type: Number,
        required: true,
        default: 0
    }
})
const percent = ref((props.sum !== 0 && props.profit !== 0) ? Math.round(props.sum / props.profit * 100) : 0)
if (percent.value > 100) percent.value = 100

// Условная отрисовка, в зависимости от передаваемых пропсов

const color = ref('#989898')
const title = ref('Категория')
const icon = ref('mdi-help')

if (props.category === 'keys') {
    color.value = '#46bc32'
    title.value = 'Ключи'
    icon.value = 'mdi-key-chain-variant'
} else if (props.category === 'repair') {
    color.value = '#1f93ff'
    title.value = 'Ремонт'
    icon.value = 'mdi-shoe-formal'
} else if (props.category === 'products') {
    color.value = '#d8cd2c'
    title.value = 'Продажи'
    icon.value = 'mdi-cash-register'
} else if (props.category === 'refund') {
    color.value = '#ff471f'
    title.value = 'Возврат'
    icon.value = 'mdi-cash-refund'
}
</script>

<style lang="scss" scoped>
.category-diagram {
    &__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: start;
        margin: $padding;
        @include adaptive-value('width', 160, 140, 0);
        padding: $paddingMedium;
    }

    &__icon {
        padding-bottom: $paddingMedium;
    }

    &__title {
        padding-bottom: $padding * 2;
    }

    &__progress-bar {
        width: 100%;
    }

    &__stats {
        padding-bottom: $padding;
    }
}

.progress-bar {
    &__body {
        background-color: $unactiveColor;
        width: 100%;
        height: 10px;
        border-radius: $radius;
        margin-bottom: $paddingMedium;
    }

    &__bar {
        transition: 0.2s;
        width: 40%;
        background-color: $primaryColor;
        height: 10px;
        border-radius: $radius;
    }
}</style>