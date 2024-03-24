<template>
    <div class="daily-diagram">
        <v-card elevation="4" class="daily-diagram__body">
            <div class="daily-diagram__title title">{{ dayPlan }}р.</div>
            <div class="daily-diagram__text">Необходимо в день</div>
            <div class="daily-diagram__gistogram-body">
                <div class="daily-diagram__plan">
                    <div class="daily-diagram__plan-text" :style="`top: calc(100% - ${dailyPercents[0].data}% - 5px);`">Норма
                    </div>
                    <div class="daily-diagram__plan-line" :style="`top: calc(100% - ${dailyPercents[0].data}%);`"></div>
                </div>
                <div class="daily-diagram__gistogram">
                    <div class="gistogram__item" v-for="item in dailyPercents.slice(1)" :key="item.id">
                        <div class="gistogram__column" :style="`height: ${item.data}%; background-color: ${(item.data >= dailyPercents[0].data) ? '#1f93ff' : '#efeded'};`"></div>
                        <div class="gistogram__text"> {{ item.name }}</div>
                    </div>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script setup lang="ts">
// обьявление пропсов
const props = defineProps({
    dailySum: {
        type: Object,
        required: true,
        default: {
            mon: 0,
            tue: 0,
            wed: 0,
            thu: 0,
            fri: 0,
            sat: 0,
            sun: 0
        }
    },
    plan: {
        type: Number,
        required: true,
        default: 0
    }
})
const values = reactive(Object.values(props.dailySum))
const dayPlan = ref(Math.round(props.plan / 30))
const max = ref(Math.max(...values))
// computed свойства
const dailyPercents = computed(() => {
    if (max.value < dayPlan.value) max.value = dayPlan.value

    return [
        { id: 0, name: 'План', data: Math.round(100 + (dayPlan.value / max.value * 100 - 100))},
        { id: 1, name: 'Пн', data: Math.round(100 + (props.dailySum.mon / max.value * 100 - 100))},
        { id: 2, name: 'Вт', data: Math.round(100 + (props.dailySum.tue / max.value * 100 - 100))},
        { id: 3, name: 'Ср', data: Math.round(100 + (props.dailySum.wed / max.value * 100 - 100))},
        { id: 4, name: 'Чт', data: Math.round(100 + (props.dailySum.thu / max.value * 100 - 100))},
        { id: 5, name: 'Пт', data: Math.round(100 + (props.dailySum.fri / max.value * 100 - 100))},
        { id: 6, name: 'Сб', data: Math.round(100 + (props.dailySum.sat / max.value * 100 - 100))},
        { id: 7, name: 'Вс', data: Math.round(100 + (props.dailySum.sun / max.value * 100 - 100))}
]
})

</script>

<style lang="scss" scoped>
.daily-diagram {
    padding: $padding 0;

    &__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 300px;
        padding: $paddingMedium;
    }

    &__title {
        padding-bottom: $padding;
    }

    &__text {
        padding-bottom: $padding * 2;
    }

    &__gistogram-body {
        width: 100%;
        display: flex;
    }

    &__gistogram {
        width: 100%;
        height: 120px;
        margin-bottom: $paddingMedium;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        position: relative;
    }

    &__plan {
        width: 22.5%;
        height: 100px;
        position: relative;
        color: $unactiveFontColor;
        z-index: 2;
    }

    &__plan-text {
        transition: 0.2s;
        font-size: 14px;
        position: absolute;
        left: 0;
    }

    &__plan-line {
        transition: 0.2s;
        position: absolute;
        border-top: 2px dotted $unactiveFontColor;
        height: 2px;
        width: 220px;
        left: 100%;
        top: 0%;
    }
}

.gistogram {
    &__item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
    }

    &__text {
        position: absolute;
        bottom: -18px;
        left: 3px;
        font-size: 14px;
        text-align: center;
    }

    &__column {
        transition: 0.2s;
        width: 23px;
        background-color: $primaryColor;
        border-top-left-radius: $radius;
        border-top-right-radius: $radius;
    }
}
</style>