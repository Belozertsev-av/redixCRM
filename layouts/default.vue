<template>
    <v-app>
        <header>
           <v-app-bar :elevation="5">
            <ul>
                <li>
                    <v-btn>
                        <NuxtLink to="/" class="a1">Home</NuxtLink>
                    </v-btn>
                </li>
                <li>
                    <v-btn>
                        <NuxtLink to="/about" class="a1">About</NuxtLink>
                    </v-btn>
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