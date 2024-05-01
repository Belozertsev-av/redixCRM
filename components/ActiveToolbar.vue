<template>
  <v-card elevation="4">
    <div class="toolbar">
      <v-btn prepend-icon="mdi-arrow-left" variant="plain" size="small" class="menu" @click="clicks.moveBack">Назад
      </v-btn>
    </div>
  </v-card>
</template>


<script setup lang="ts">
import {useClicksStore} from '@/stores/clicks'

const clicks = useClicksStore()


</script>


<style lang="scss" scoped>
.toolbar {
  width: 100%;
  height: 30px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
}
</style>