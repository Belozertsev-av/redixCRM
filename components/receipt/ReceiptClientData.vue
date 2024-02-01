<template>
  <v-container class="sorting-main">
    <v-text-field label="Номер телефона" v-model="phoneNumber"></v-text-field>
  
    <v-text-field label="Фамилия" v-model="lastName"></v-text-field>
  
    <v-text-field label="Отчество" v-model="middleName"></v-text-field>
  
    <v-text-field label="Имя" v-model="firstName"></v-text-field>
  
    <v-text-field label="Email адрес" v-model="email" type="email"></v-text-field>
  
    <!-- <v-text-field
        label="Дата рождения"
        v-model="birthDate"
        type="date"
      ></v-text-field> -->
  
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-text-field v-bind="props" label="Дата рождения" append-inner-icon="mdi-application-outline"
          v-model="birthDate"></v-text-field>
      </template>
      <v-date-picker color="#1f93ff">
      </v-date-picker>
    </v-menu>
  
    <!-- <div class="sorting-main__discount">
      <v-btn class="btnDiscount" closable variant="text" :ripple="false" size="small">Скидка +10%</v-btn>
    </div> -->
    
    <v-chip
      class="btnDiscount"
      closable
      close-icon="mdi-close"
      :model-value="true"
    >
      Скидка {{ discount }}%
    </v-chip>

    <div class="sorting-main__checkbox-group">
      <p><strong>Отправить СМС по готовности</strong></p>
      <v-checkbox v-model="sendSMS"></v-checkbox>
    </div>
  </v-container>
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
  max-width: 290px;
  height: 100%;
  position: fixed;
  top: 76px;
  left: 0;
  overflow-y: auto;
  padding: 20px;

  &__checkbox-group {
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: space-between;
  }

  &__checkbox-group p {
    font-size: 14px;
    padding-top: 22px;
  }

  &__discount {
    width: fit-content;
    background-color: #1f93ff;
    border-radius: 5px;
    text-align: center;
  }

  
}

  .v-chip {
    opacity: 1;
    color: #fff;
    background-color: $primaryColor;
}
</style>
