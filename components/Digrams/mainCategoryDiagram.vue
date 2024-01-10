
import type { Style } from '#build/components';

import type { mergeProps } from 'vue';

import type { mergeProps } from 'vue';

import type { Title } from '#build/components';
<template>
    <div class="category-diagram">
        <v-card class="category-diagram__body" 
        elevation="4">
            <div class="category-diagram__icon">
                <img src="~/assets/img/Bag.svg" alt="icon">
            </div>
            <div class="category-diagram__title title">{{ props.category }}</div>
            <div class="category-diagram__progress-bar">
                <div class="progress-bar__body">
                    <div class="progress-bar__bar"
                    :style="{ width: props.percent + '%'}"></div>
                </div>
            </div>
            <div class="category-diagram__stats">
                {{ props.percent }}% из 100%
            </div>
            <div class="category-dagram__sub-stats subtext">
                {{ props.sum }}руб.
            </div>
        </v-card>
    </div>
</template>

<script setup lang="ts">
// Обьявление пропсов
const props = defineProps({
    category: {
        type: String,
        required: true,
        default: 'Категория'
    },
    percent: {
        type: Number,
        required: true,
        default: 0
    },
    sum: {
        type: Number,
        required: true,
        default: 0
    }
})
const color = ref('$primaryColor')

</script>

<style lang="scss" scoped>
    .category-diagram{
        &__body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            text-align: start;
            @include adaptive-value('width', 160, 145, 0);
            padding: $paddingMedium;
        }
        &__icon{
            
            padding-bottom: $paddingMedium;
            img{
                width: 40px;
                height: 40px;
            }
        }
        &__title{
            padding-bottom: $padding * 2;
        }
        &__progress-bar{
            width: 100%;
        }
        &__stats{
            padding-bottom: $padding;
        }
    }
    .progress-bar{
        &__body{
            background-color: $unactiveColor;
            width: 100%;
            height: 10px;
            border-radius: $radius;
            margin-bottom: $paddingMedium;
        }
        &__bar{
            transition: 0.2s;
            width: 40%;
            background-color: $primaryColor;
            height: 10px;
            border-radius: $radius;
        }
    }
</style>