<template>
  <div class="sorting-main">
    <v-text-field class="text-field" 
      label="Номер телефона" 
      v-model="phoneNumber"></v-text-field>
    <v-text-field class="text-field" 
      label="Фамилия" 
      v-model="lastName"></v-text-field>
    <v-text-field class="text-field" 
      label="Отчество" 
      v-model="middleName"></v-text-field>
    <v-text-field class="text-field" 
      label="Имя" 
      v-model="firstName"></v-text-field>
    <v-text-field class="text-field" 
      label="Email адрес" 
      v-model="email" type="email"></v-text-field>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-text-field class="text-field" 
        v-bind="props" 
        label="Дата рождения" append-inner-icon="mdi-application-outline"
        v-model="birthDate"></v-text-field>
      </template>
      <v-date-picker color="#1f93ff">
      </v-date-picker>
    </v-menu>
    <v-chip
      class="btnDiscount"
      closable
      close-icon="mdi-close"
      :model-value="true"
    >
      Скидка {{ discount }}%
    </v-chip>
    <div class="sorting-main__checkbox-group">
      <v-checkbox label="Отправить СМС по готовности" v-model="sendSMS"></v-checkbox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const fetchData = async () => {
  // Асинхронный метод для получения данных из БД
  // Реализуйте логику получения данных здесь
};

const discount = ref(10);
const phoneNumber = ref("");
const lastName = ref("");
const middleName = ref("");
const firstName = ref("");
const email = ref("");
const birthDate = ref("");
const sendSMS = ref(false);

// Слушатель изменений в номере телефона для запуска асинхронного метода
watch(phoneNumber, () => {
  fetchData();
});
</script>

<style scoped lang="scss">
.sorting-main {
  width: 100%;
  height: 100%;
  padding-right: $paddingMedium;
  padding-top: $paddingGrand;

  &__discount {
    width: fit-content;
    background-color: #1f93ff;
    border-radius: 5px;
    text-align: center;
  }
}
.text-field{
  width: 320px;
}
  .v-chip {
    opacity: 1;
    color: #fff;
    background-color: $primaryColor;
}
</style>
