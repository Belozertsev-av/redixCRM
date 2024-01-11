<template>
    <v-app>
        <header>
           <v-app-bar :elevation="5">
            <ul>
                <li>
                    <NuxtLink to="/" class="a1"><v-btn>Авторизация</v-btn></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/mainPage" class="a1"><v-btn>Главное окно</v-btn></NuxtLink>
            </li>
           </ul>
        </v-app-bar>
        </header>
        <main>
            <slot></slot>
        </main>
    </v-app>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    ul{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    li{
        margin: 0 30px;
        list-style-type: none;
    }
    .a1{
        text-decoration: none;
        color: black;

    }
</style>
