<template>
  <div class="new__main">
    <v-card class="new__main-body">
      <div class="new__main-btn">
        <v-btn block>
          + Добавить изделие
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.new {
  &__main-body {
    border-radius: 0;
  }
}

.v-btn {
  display: flex;
  justify-content: start;

  &.v-btn--density-default {
    height: 50px;
  }

  &:hover {
    background-color: $unactiveColor;
  }
}
</style>