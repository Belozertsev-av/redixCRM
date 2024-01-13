
<template>
    <auth-window/>
</template>

<script setup>
import AuthWindow from '~/components/AuthWindow.vue';

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