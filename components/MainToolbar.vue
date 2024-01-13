<template>
<v-app>
        
        <div class="toolbar">
       
        <div>
                <NuxtLink to="/" ><v-btn prepend-icon="mdi-menu" variant="plain" size="x-small" class="menu">Меню</v-btn></NuxtLink>
        </div>
            
        <div>
                <NuxtLink to="/mainPage" ><v-btn append-icon="mdi-layers" variant="plain" size="x-small" class="stat">Статистика</v-btn></NuxtLink>
        </div>
    
        </div>
    
    <main>
        <slot></slot>
    </main>
</v-app>

</template>


<script>
</script>


<style lang="scss" scoped>
.toolbar{
        background-color: #f0f0f0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 30px;
        box-shadow:  0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    }
    .toolbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
}
    
    
    
   
    .stat{
        appearance: none;
        border: 0;
        border-radius: 5px;
        background: #f0f0f0;
        color: black;
        padding: 4px 8px;
        font-size: 16px;
        height: 30px;
        
        
    }
    .menu{
        appearance: none;
        border: 0;
        border-radius: 5px;
        background: #f0f0f0;
        color: black;
        padding: 4px 8px;
        font-size: 16px;
        height: 30px;
        
    }

</style>