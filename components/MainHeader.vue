<template>
        <div class="nav">
            <ul>
                <li>
                    <NuxtLink to="/mainPage" ><v-btn  variant="plain" class="link">Главная</v-btn></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#" ><v-btn  variant="plain" class="link">Настройки</v-btn></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" ><v-btn  variant="plain" class="link">Авторизация</v-btn>
                    </NuxtLink>
                </li>
           </ul>
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    
    .nav{
        background-color: #1F93FF;
        height: 45px;
        display: flex;
        align-items: center;
        ul{
            display: flex;
        }
    }
    .link{
        color: #fff;
        opacity: 1;
    }
</style> 