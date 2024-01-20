<template>
    <div class="new__main">
        <v-card class="new__main-body" elevation="4">
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
.new__main {
    padding: 10px;
}
.v-btn {
    display: flex;
    justify-content: start;
    &.v-btn--density-default{
        height: 50px;
    }
    &:hover{
        background-color: $unactiveColor;
    }
}
</style>