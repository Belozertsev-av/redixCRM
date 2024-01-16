<template>
    <v-app>
        <header>
        <MainHeader></MainHeader>
        <MainToolbar></MainToolbar>
        </header>
        
        <main>
            <slot></slot>
        </main>
    </v-app>
</template>

<script setup>
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
    }
</style> 
