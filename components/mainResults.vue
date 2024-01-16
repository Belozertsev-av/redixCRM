<template>
    <div class="main-result">
        <ul>
            <li>
                <p  variant="plain" class="income">Наличные: {{ props.resultdata.payCash }}руб.</p>
            </li>
            <li>
                <p  variant="plain" class="income">По карте:{{ props.resultdata.payCard }}руб.</p>
            </li>
            <li>
                <p  variant="plain" class="result"><b>Итого:{{ props.resultdata.payResult }}руб.</b></p>
                
            </li>
       </ul>
    </div>
</template>

<script setup lang="ts">

const props = defineProps(
    {
        resultdata: {
        type: Object,
        required: true,
        default: {
            payCard: "12000",
            payCash: "6800",
            payResult: "18800"
        }
    }
    }
)

</script>

<style lang="scss" scoped>

.main-result{
    background-color: white;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: right;
    
    ul{
        display: flex;
        

    }
    li{
        padding: 10px;
    }
}
.income{
    color: black;
    opacity: 1;
}
.result{
font-size: large;
}
</style> 