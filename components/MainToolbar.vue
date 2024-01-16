<template>
    <v-card elevation="4">
        <div class="toolbar">
            <v-btn prepend-icon="mdi-menu" variant="plain" size="small" class="menu">Меню</v-btn>
            <v-btn append-icon="mdi-layers" variant="plain" size="small" class="stat">Статистика</v-btn>
        </div>
    </v-card>
</template>


<script>
</script>


<style lang="scss" scoped>
.toolbar{
    width: 100%;
    height: 30px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
}
</style>