<template>
    <div class="sorting_main">
        <div class="sorting_main_search">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-text-field v-bind="props" label="Диапазон журнала" append-inner-icon="mdi-magnify">
                    </v-text-field>
                </template>
                <v-date-picker>
                </v-date-picker>
            </v-menu>
        </div>
        <div class="sorting_main_twinbuttons">
            <v-btn class="sorting_main_twinbuttons_button">
                За сегодня
            </v-btn>
            <v-btn class="sorting_main_twinbuttons_button">
                За все время
            </v-btn>
        </div>
        <div class="sorting_main_search">
            <v-text-field class="sorting_main_search_textfield" label="Поиск" append-inner-icon="mdi-magnify"
            ></v-text-field>
        </div>
        <div class="sorting_main_checkboxes">
            <v-checkbox class="sorting_main_checkboxes_checkbox" label="По номеру квитанции"></v-checkbox>
            <v-checkbox class="sorting_main_checkboxes_checkbox" label="По фамилии"></v-checkbox>
            <v-checkbox class="sorting_main_checkboxes_checkbox" label="По дате оформления квитанции"></v-checkbox>
            <v-checkbox class="sorting_main_checkboxes_checkbox" label="По расчетной дате выдачи"></v-checkbox>
            <v-checkbox class="sorting_main_checkboxes_checkbox" label="По номеру телефона"></v-checkbox>
        </div>
        <div class="sorting_main_footerbuttons">
            <v-btn class="sorting_main_footerbuttons_button">
                Ремонт
            </v-btn>
            <v-btn class="sorting_main_footerbuttons_button">
                Ключи
            </v-btn>
            <v-btn class="sorting_main_footerbuttons_button">
                Косметика
            </v-btn>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style scoped>

    .sorting_main {
        max-width: 320px;
        margin: 70px 0px 0px 50px;
        padding: 10px;
    }

    .sorting_main_search {
        margin-top: 20px;
    }

    .sorting_main_search:first-child {
        margin-top: 0px;
    }

    .sorting_main_twinbuttons {
        display: flex;
        justify-content: space-between;
    }

    .sorting_main_twinbuttons_button {
        padding: 10px, 15px, 10px, 15px;
    }

    .sorting_main_checkboxes_checkbox {
        margin-top: -40px;
        color: black;
    }

    .sorting_main_checkboxes_checkbox:first-child {
        margin-top: 0px;
    }

    .sorting_main_footerbuttons {
        display: grid;
    }

    .sorting_main_footerbuttons_button {
        margin-top: 15px;
    }

    .sorting_main_footerbuttons_button:first-child {
        margin-top: 0px;
    }

</style>