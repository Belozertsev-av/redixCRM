<template>
    <v-app>
        <header>
            <div class="nav">
           
            <ul>
                <li>
                    <NuxtLink to="/" ><v-btn  variant="plain" size="x-small" class="nav-btn">Главная</v-btn></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#" ><v-btn  variant="plain" size="x-small" class="nav-btn">Настройки</v-btn></NuxtLink>
            </li>
           </ul>
        
            </div>
        </header>
        
    </v-app>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>
    
    .nav{
        background-color: #1F93FF;
    }
    
    
    
    .nav ul{
        display: flex;
        justify-content: left;
        width: 100%;
        height: 42px;
    }
    .nav li{
        margin: 0 10px;
        list-style-type: none;
    }
    .nav-btn{
        appearance: none;
        border: 0;
        border-radius: 5px;
        background: #1F93FF;
        color: #fff;
        padding: 8px 8px;
        font-size: 16px;
        margin-top: 5PX;
        
    }
</style> 