<template>
  <div class="payment__main">
    <v-card class="payment__main-body" elevation="4">
      <div class="payment__header">
        <div class="payment__header-textfeild">
          <v-text-field label="Сумма" v-model="amount"></v-text-field>
        </div>
      </div>
      <div class="payment__middle">
        <div class="payment__middle-choise">
          <v-chip-group
              v-model="selection"
              selected-class="click"
              mandatory>
            <div class="switches">
              <v-chip id="cash" value="cash" variant="text">Наличными</v-chip>
              <v-chip id="card" value="card" variant="text">По карте</v-chip>
            </div>
          </v-chip-group>
        </div>
      </div>
      <div class="payment__footer">
        <div class="payment__footer-buttons">
          <v-btn class="btns"
                 @click="$emit('createTransaction', { id: Math.random(), amount: Number(amount), type: selection})">
            Оплатить
          </v-btn>
          <v-btn class="btns" @click="$emit('cancel')">
            Отмена
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['createTransaction', 'cancel'])
const selection = ref('card')
const amount = ref('')
</script>

<style lang="scss" scoped>
.payment {
  &__main {
    margin: 0 auto;
    width: 300px;
    height: 250px;
  }

  &__main-body {
    border-radius: 0;
    padding: 10px;
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
  }

  &__header-textfeild {
    width: 250px;
  }

  &__middle {
    margin-top: -30px;
  }

  &__footer-buttons {
    width: 250px;
    display: flex;
    justify-content: space-between;
  }

  &__footer {
    padding-top: 10px;
  }

  &__footer-buttons {
    width: 250px;
    display: flex;
    justify-content: space-between;
  }
}

.switches {
  display: grid;
}

.btns {
  width: 120px;
}

.v-chip {
  justify-content: center;
  width: 220px;
  height: 30px;
  border-radius: 4px;
  color: $unactiveFontColor;
  background-color: $unactiveColor;
}

.v-chip.v-chip--density-default {
  height: 35px;
}

.v-chip-group .v-chip {
  margin: 4px 0px 4px 0;
}

.click {
  background-color: $primaryColor;
  opacity: 1;
  color: white;
}
</style>