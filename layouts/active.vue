<template>
    <v-app>
        <header>
            <MainHeader></MainHeader>
            <ActiveToolbar></ActiveToolbar>
        </header>
        <main>
            <slot></slot>
        </main>
    </v-app>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        z-index: 2;
    }
    main{
        z-index: 1;
        width: 100%;
        height: 100%;
    }
</style> 
