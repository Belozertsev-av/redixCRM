
<template>
  <v-card elevation="4" class="sidebar">
    <div class="sidebar__avatar-body">
        <v-icon class="sidebar__icon" icon="mdi-account-circle-outline" size="40" color="#fff"></v-icon>
      <div class="sidebar__account">
        <div class="sidebar__name text">Иванов Иван</div>
        <div class="sidebar__post subtext">Администратор</div>
      </div>
    </div>
    <div class="sidebar__divider"></div>
    <div class="sidebar__list-body">
      <ul class="sidebar__list">
        <li class="sidebar__item"><NuxtLink to="#" class="link">Заказы товаров и материалов</NuxtLink></li>
        <li class="sidebar__item"><NuxtLink to="#" class="link">Закрытие смены</NuxtLink></li>
        <li class="sidebar__item"><NuxtLink to="#" class="link">Выход</NuxtLink></li>
      </ul>
    </div>
    <div class="sidebar__error-body">
      <v-alert
        closable
        class="sidebar__error"
        icon="mdi-application-outline"
        title="I'm an Alert Usage"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magnihi">
      </v-alert>
    </div>
  </v-card>
</template>
  
  
  <style lang="scss" scoped>
  .sidebar {
      background-color: $secondaryColor;
      color: #fff;
      display: flex;
      flex-direction: column;
      width: 320px;
      height: 100%;

  		&__avatar-body {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: $paddingMedium;
  		}

  		&__icon {
        margin-right: $paddingMedium;
  		}

  		&__account {
        display: flex;
        flex-direction: column;
  		}

  		&__post {
        color: rgba(
        $color: #fff,
        $alpha: 0.56
        );
  		}

  		&__divider {
        margin: 0 auto;
        width: calc(100% - $paddingGrand);
        height: 1px;
        background-color: #fff;
        
  		}

  		&__list-body {
          padding: $paddingMedium;
  		}
      
  		&__item {
        padding: $padding 0;
  		}

  		&__error-body {
        margin: $paddingMedium;
  		}

  		&__error {
        cursor: pointer;
  		}
  }

  </style>