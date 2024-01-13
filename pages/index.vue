
<template>
  <div id="app">
    <button @click="togglePanel" class="open-button">
      <svg-icon type="mdi" :path="menuIconPath"></svg-icon>
    </button>
    
    <transition name="slide">
      <div v-if="showPanel"  class="side-panel">
        <ul>
          <li>
            <div class="avatar-container">
              <div class="avatar"></div>
              <div class="user-info">
                <a href="#">Иван Иванов</a>
                <div><a href="#">Администратор</a></div>
              </div>
            </div>
          </li>
          <li><hr></li>
          <li><a href="#">Заказы товаров и материалов</a></li>
          <li><a href="#">Закрытие смены</a></li>
          <li><a href="#">Выход</a></li>
        </ul>
        <div v-if="showNotification" class="notification">
          <div class="icon-applicationIcon"><svg-icon type="mdi" :path="applicationIconPath"></svg-icon></div>
          <div class="text-container">
            <p><strong>I'm an Alert Usage</strong></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hi</p>
          </div>
          <button @click="closeNotification" class="closebuttonnotification">
            <svg-icon type="mdi" :path="closeIconPath"></svg-icon>
          </button>
        </div>
      </div>      
    </transition>
  </div>

  
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiClose, mdiApplicationOutline, mdiMenu } from '@mdi/js';

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      showPanel: false,
      showNotification: true,
      closeIconPath: mdiClose,
      applicationIconPath: mdiApplicationOutline,
      menuIconPath: mdiMenu
    };
  },
  methods: {
    togglePanel() {
      this.showPanel = !this.showPanel;
    },
    closePanel() {
      this.showPanel = false;
    },
    toggleNotification() {
      this.showNotification = !this.showNotification;
    },
    closeNotification() {
      this.showNotification = false;
    }
  }
};
</script>

<style lang="scss" scoped>

a {
  outline: none;
  text-decoration: none;
  color: #f0f0f0;
  
}
ul {
    list-style-type: none;
   }
   .avatar-container {
  display: flex;
  align-items: center;
}

.avatar-container {
  display: flex;
  align-items: center;
}

.avatar {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: rgb(106, 106, 250);
  margin-bottom: 10px;
}

.user-info {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

.user-info a {
  text-decoration: none;
  color: rgb(255, 255, 255); 
}

.user-info div a {
  color: rgb(163, 163, 163); 
}
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}
.side-panel {
  width: 100%; 
  max-width: 300px;
  height: 60%;
  background-color: #013a72; 
  position: fixed;
  top: 100px;
  left: 0;
  overflow-y: auto;
  padding: 20px;
}

.notification {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 250px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f0f0f0;
}

.closebuttonnotification {
  position: absolute;
  margin-right: 10px;
  right: 0;
}
.icon-applicationIcon {
  margin-right: 10px;
}
.text-container {
  flex-grow: 1; 
  padding-right: 20px;
}
.text-container p {
  margin: 0; 
}
.open-button{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  border: 0;
  background: transparent;
  border-radius: 0;
  top: 50px;
  height: 70px;
  width: 30px;
  cursor: pointer;
  pointer-events: auto;
  margin-left: 25px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}


@media (min-width: 600px) {
  .side-panel {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .side-panel {
    width: 100%;
  }
}


</style>