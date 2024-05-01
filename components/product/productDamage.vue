<!-- Баг с самым длинным значением (есть костыль)-->
<template>
  <div class="damage__main">
    <v-card class="damage__main-body" elevation="4">
      <div class="damage__main-container">
        <div class="damage__select">
          <div class="damage__select-wear">
            <v-btn icon="mdi mdi-chevron-left" @click="minus10" variant="text"></v-btn>
            <v-text-field class="damage__textfield" v-model="meaning"></v-text-field>
            <v-btn icon="mdi mdi-chevron-right" @click="plus10" variant="text"></v-btn>
          </div>
          <div class="damage__autocomplete">
            <v-autocomplete class="v-input"
                            :items="types"
                            item-title="name"
                            item-value="name"
                            label="Повреждения"
                            v-model="values"
                            multiple
                            hide-selected
                            no-data-text="Не найдено"
            >
              <template v-slot:selection="{ item, index }">
                <!-- <v-chip class="grandchip" v-if="index < 1">
                  <span>{{ item.title }}</span>
                </v-chip> -->
                <span
                    v-if="index === 0"
                    class="text-grey text-caption align-self-center"
                >
                                  ({{ values.length }} выбрано)
                                </span>
              </template>
            </v-autocomplete>
          </div>
        </div>
        <v-card elevation="3" class="damage__chipsgroup-body" v-if="allSelected">
          <div class="damage__chipsgroup">
            <div class="damage__chipsgroup-chip">
              <v-chip class="damage__chip"
                      v-for="value in values"
                      :key="value"
                      closable
                      @click:close="values.splice(values.indexOf(value), 1)">
                {{ value }}
              </v-chip>
            </div>
          </div>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import type {Damage} from "~/server/model/commonTypes";

const data = ref<Damage[] | null>(null)
const types = ref<string[]>([])
const values = ref([])
const meaning = ref(100)

useFetch('/api/damages')
    .then(response => {
      data.value = response.data.value as unknown as Damage[]
      if (data.value) types.value = data.value.map(it => it.damage)
    })
    .catch(error => console.log(error))

const allSelected = computed(() => {
  return !!values.value.length
})
const minus10 = () => meaning.value <= 9 ? meaning.value -= meaning.value : meaning.value -= 10
const plus10 = () => meaning.value >= 91 ? meaning.value += (100 - meaning.value) : meaning.value += 10
</script>

<style lang="scss" scoped>
.damage {
  &__main {
    margin-top: 100px;
    width: 500px;
    height: 100%;
  }

  &__main-container {
    padding: 10px;
  }

  &__select {
    display: flex;
    margin-bottom: -10px;
  }

  &__select-wear {
    display: flex;
    width: 160px;
  }

  &__chipsgroup-body {
    margin-top: -10px;
    padding: 10px;
    width: 480px;
  }
}

.v-chip {
  color: $backgroundColor;
  border-radius: 4px;
  margin-right: 10px;
  margin-top: 10px;

  &:last-child {
    margin-right: 0;
  }

  &--variant-tonal {
    background: $primaryColor;
  }
}

.grandchip {
  margin-top: 0;
}

.v-input {
  width: 300px;
}
</style>