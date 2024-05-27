<template>
  <div class="sorting__main">
    <v-card class="sorting__main-body" elevation="4">
      <div class="sorting__search">
        <v-menu :close-on-content-click="false">
          <template v-slot:activator="{ props }">
            <v-text-field readonly v-model="due1" :value="formattedDate1" v-bind="props" label="Интервал от"
                          variant="solo" class="sorting__search-to" append-inner-icon="mdi mdi-calendar-blank">
            </v-text-field>
          </template>
          <v-date-picker v-model="due1" color="#1f93ff">
          </v-date-picker>
        </v-menu>
        <v-menu :close-on-content-click="false">
          <template v-slot:activator="{ props }">
            <v-text-field readonly v-model="due2" :value="formattedDate2" v-bind="props" label="Интервал до"
                          variant="solo" class="sorting__search-to" append-inner-icon="mdi mdi-calendar-blank">
            </v-text-field>
          </template>
          <v-date-picker v-model="due2" color="#1f93ff">
          </v-date-picker>
        </v-menu> 
      </div>
      <div class="sorting__twinbuttons">
        <v-btn class="sorting__button">
          За сегодня
        </v-btn>
        <v-btn class="sorting__button">
          За все время
        </v-btn>
      </div>
      <div class="sorting__search">
        <v-text-field class="sorting__textfield" label="Поиск" append-inner-icon="mdi-magnify"></v-text-field>
      </div>
      <v-radio-group class="sorting__checkboxes">
        <v-radio class="sorting__checkbox" value="num" label="По номеру квитанции"></v-radio>
        <v-radio class="sorting__checkbox" value="fio" label="По фамилии"></v-radio>
        <v-radio class="sorting__checkbox" value="date_start" label="По дате оформления квитанции"></v-radio>
        <v-radio class="sorting__checkbox" value="date-end" label="По расчетной дате выдачи"></v-radio>
        <v-radio class="sorting__checkbox" value="phone" label="По номеру телефона"></v-radio>
      </v-radio-group>
      <div class="sorting__footerbuttons">
        <v-btn class="sorting__footerbuttons-button">
          Ремонт
        </v-btn>
        <v-btn class="sorting__footerbuttons-button">
          Ключи
        </v-btn>
        <v-btn class="sorting__footerbuttons-button">
          Косметика
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import {format} from 'date-fns/format';

const due1 = ref(null)
const due2 = ref(null)

const formattedDate1 = computed(() => {
  return due1.value ? format(due1.value, 'dd.LL.YYY') : ''
})
const formattedDate2 = computed(() => {
  return due2.value ? format(due2.value, 'dd.LL.YYY') : ''
})
</script>

<style lang="scss" scoped>
.sorting {
  &__main {
    width: 320px;
    height: 100%;
  }

  &__main-body {
    border-radius: 0;
    padding: $padding * 2;
    width: 100%;
    height: 100%;
  }

  &__search {
    margin-top: $paddingMedium;
    display: flex;
    justify-content: space-between;
  }

  &__search-from {
    margin-right: $padding;
  }

  &__search-to {
    margin-left: $padding;
  }

  &__twinbuttons {
    display: flex;
    justify-content: space-between;
  }

  &__button {
    width: 48%;
  }

  &__checkboxes {
    display: flex;
    flex-direction: column;
  }

  &__checkbox {
    color: black;
  }

  &__footerbuttons {
    display: grid;
  }

  &__footerbuttons-button {
    margin-top: $paddingMedium;

    &:first-child {
      margin-top: 0px;
    }
  }

}
</style>