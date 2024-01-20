<template>
    <div class="daily-diagram">
        <v-card elevation="4" class="daily-diagram__body">
            <div class="daily-diagram__title title">{{ dayPlan }}р.</div>
            <div class="daily-diagram__text">Необходимо в день</div>
            <div class="daily-diagram__gistogram-body">
                <div class="daily-diagram__plan">
                    <div class="daily-diagram__plan-text"
                    :style="`top: calc(100% - ${dailyPercents.plan}% - 5px);`">Норма</div>
                    <div class="daily-diagram__plan-line"
                    :style="`top: calc(100% - ${dailyPercents.plan}%);`"></div>
                </div>
                <div class="daily-diagram__gistogram">
                    <div class="gistogram__item">
                        <div class="gistogram__column" 
                        :style="`height: ${dailyPercents.mon}%;`"></div>
                        <div class="gistogram__text">Пн.</div>
                    </div>
                    <div class="gistogram__item">
                        <div class="gistogram__column" 
                        :style="`height: ${dailyPercents.tue}%;`"></div>
                        <div class="gistogram__text">Вт.</div>
                    </div>
                    <div class="gistogram__item">
                        <div class="gistogram__column" 
                        :style="`height: ${dailyPercents.wed}%;`"></div>
                        <div class="gistogram__text">Ср.</div>
                    </div>
                    <div class="gistogram__item">
                        <div class="gistogram__column" 
                        :style="`height: ${dailyPercents.thu}%;`"></div>
                        <div class="gistogram__text">Чт.</div>
                    </div>
                    <div class="gistogram__item">
                        <div class="gistogram__column" 
                        :style="`height: ${dailyPercents.fri}%;`"></div>
                        <div class="gistogram__text">Пт.</div>
                    </div>
                    <div class="gistogram__item">
                        <div class="gistogram__column" 
                        :style="`height: ${dailyPercents.sat}%;`"></div>
                        <div class="gistogram__text">Сб.</div>
                    </div>
                    <div class="gistogram__item">
                        <div class="gistogram__column" 
                        :style="`height: ${dailyPercents.sun}%;`"></div>
                        <div class="gistogram__text">Вс.</div>
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
    if (max.value < dayPlan.value ) max.value = dayPlan.value

    return {
        plan: Math.round(100 + (dayPlan.value / max.value * 100 - 100)),
        mon: Math.round(100 + (props.dailySum.mon / max.value * 100 - 100)),
        tue: Math.round(100 + (props.dailySum.tue / max.value * 100 - 100)),
        wed: Math.round(100 + (props.dailySum.wed / max.value * 100 - 100)),
        thu: Math.round(100 + (props.dailySum.thu / max.value * 100 - 100)),
        fri: Math.round(100 + (props.dailySum.fri / max.value * 100 - 100)),
        sat: Math.round(100 + (props.dailySum.sat / max.value * 100 - 100)),
        sun: Math.round(100 + (props.dailySum.sun / max.value * 100 - 100))
    }
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
    &__gistogram-body{
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
    &__text{
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