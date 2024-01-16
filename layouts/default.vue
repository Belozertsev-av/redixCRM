<template>
    <v-app>
        <header>
        <MainHeader></MainHeader>
        <MainToolbar></MainToolbar>
        </header>
        
        <main>
            <slot></slot>
        </main>
        <footer>
            <MainResults></MainResults>
        </footer>
    </v-app>
</template>

<script setup>
import MainResults from '~/components/MainResults.vue';


</script>

<style lang="scss" scoped>
    header{
        width: 100%;
    }
</style> 
