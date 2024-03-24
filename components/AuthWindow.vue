<template>
    <div class="card">
        <div class="img">
            <img src="/redix_logo.png" alt="logo">
        </div>
        <v-card class="card__center" :elevation="5" title="Авторизируйтесь" text="Введите ваш логин и пароль, чтобы начать работу">
            <div class="field">
                <v-text-field class="field__center" 
                clearable 
                label="Логин" 
                variant="underlined" 
                hint="Введите ваш логин"></v-text-field>

                <v-text-field
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                :rules="[rules.required, rules.min]"
                clearable
                class="field__center" 
                variant="underlined" 
                name="input-10-2"
                label="Пароль"
                hint="Введите ваш пароль"
                @click:append="show2 = !show2"
              ></v-text-field>
                <v-btn>
                    <NuxtLink to="/about" class="btn">Войти</NuxtLink>
                </v-btn>
            </div>
        
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show1: false,
            show2: true,
            rules: {
                required: value => !!value || 'Необходимо заполнить поле',
                min: v => v.length >= 8 || 'Минимум 8 символов',
            },
        }
    },
}
</script>

<style lang="scss" scoped>
    .card{
        margin: 40px auto 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .img{
        width: 100px;
        height: 100px;
        margin-bottom: 50px;
        position: relative;
        z-index: 1;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .btn{
        text-decoration: none;
        color: black;
    }
        .card__center{
        margin: 0 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        max-width: 500px;
    }
    .field {
        margin: 30px auto 30px auto;
        padding: 0 15px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .field__center{
        margin: 0 15px;
        min-width: 350px;
    }
    .field__center +:last-child {
            margin-top: 30px;
        }
</style>
