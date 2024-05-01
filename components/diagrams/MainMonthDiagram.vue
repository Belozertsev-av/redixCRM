<template>
  <div class="month-diagram">
    <v-card class="month-diagram__body" elevation="4">
      <div class="month-diagram__title title">{{ currMonth }}</div>
      <div class="month-diagram__text">{{ props.sum }}руб. из {{ props.plan }}руб.</div>
      <div class="month-diagram__canvas">
        <svg class="month-diagram__svg" width="250" height="250" viewBox="0 0 45 45">
          <circle class="month-diagram__circle" r="15.9" cx="50%" cy="50%"></circle>
          <circle class="month-diagram__bar" r="15.9" cx="50%" cy="50%"
                  :style="`stroke-dasharray: ${percent} 100;`"></circle>
          <text class="month-diagram__percent" x="53%" y="55%">{{ percent }}%</text>
        </svg>
      </div>
      <div class="month-diagram__arrow-block">
        <v-btn size="30" class="month-diagram__arrow" icon="mdi-arrow-left" @click="prevMonth(props.month)"></v-btn>
        <v-btn size="30" class="month-diagram__arrow" icon="mdi-arrow-right" @click="nextMonth(props.month)"></v-btn>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
/* Обьявление props, где month - текущий месяц, sum - фактическая сумма заработанная на данный момент за месяц, а plan - план на месяц. */
const props = defineProps({
  month: {
    type: String,
    required: true,
    default: 'month'
  },
  sum: {
    type: Number,
    required: true,
    default: 0
  },
  plan: {
    type: Number,
    required: true,
    default: 0
  }
})
const percent = ref(Math.round(props.sum / props.plan * 100))

// Подбор месяца
const currMonth = ref('Месяц')
switch (props.month) {
  case 'jan':
    currMonth.value = 'Январь'
    break;
  case 'feb':
    currMonth.value = 'Февраль'
    break;
  case 'mar':
    currMonth.value = 'Март'
    break;
  case 'apr':
    currMonth.value = 'Апрель'
    break;
  case 'may':
    currMonth.value = 'Май'
    break;
  case 'jun':
    currMonth.value = 'Июнь'
    break;
  case 'jul':
    currMonth.value = 'Июль'
    break;
  case 'aug':
    currMonth.value = 'Август'
    break;
  case 'sep':
    currMonth.value = 'Сентябрь'
    break;
  case 'oct':
    currMonth.value = 'Октябрь'
    break;
  case 'nov':
    currMonth.value = 'Ноябрь'
    break;
  case 'dec':
    currMonth.value = 'Декабрь'
    break;

  default:
    break;
}


// Обработчики нажатий на стрелки
const prevMonth = async (currentMonth: String) => {
  // TODO: Ассинхронный запрос к таблице базы данных с планами
}
const nextMonth = async (currentMonth: String) => {
  // TODO: Ассинхронный запрос к таблице базы данных с планами
}
</script>

<style lang="scss" scoped>
.month-diagram {
  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 300px;
    padding: $paddingMedium;
  }

  &__title {
    padding-bottom: $padding;
  }

  &__canvas {
    transition: all 0.2s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 300px;
    max-height: 300px;
  }

  &__percent {
    font-family: "Roboto", sans-serif;
    text-anchor: middle;
    @include adaptive-value("font-size", $fontSizeStart / 2, $fontSizeEnd / 2, 0);
    font-weight: 700;
  }

  &__circle {
    fill: none;
    stroke-width: 3;
    stroke: $unactiveColor;
  }

  &__bar {
    transform-origin: center center;
    transform: rotate(-90deg);
    transition: 0.2s;
    fill: none;
    stroke-width: 3;
    stroke: $primaryColor;
    stroke-dasharray: 30 100;
    stroke-linecap: round;
  }

  &__arrow-block {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: $padding;
  }

  &__arrow {
    margin: 0 $padding;
  }
}
</style>