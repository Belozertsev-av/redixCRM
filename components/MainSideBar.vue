
<template>
    <div id="app">
      
      <transition name="slide">
        <div class="side-panel">
          <ul>
            <li>
              <div class="avatar-container">
                <v-icon icon="mdi-account-circle-outline" size="40" color="#fff"></v-icon>
                <div class="user-info">
                  <a href="#">Иван Иванов</a>
                  <div><a href="#">Администратор</a></div>
                </div>
              </div>
            </li>
          </ul>
        <ul class="orders" >
            <div class="separation"></div>
            <li>Заказы товаров и материалов</li>
            <li>Закрытие смены</li>
            <li>Выход</li>
        </ul>
          <div class="notification">
            <div class="icon-applicationIcon">
                <v-icon icon="mdi-application-outline"></v-icon>
            </div>
            <div class="text-container">
              <p><strong>I'm an Alert Usage</strong></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hi</p>
            </div>
            
              <v-icon class="closebuttonnotification" icon="mdi-close"></v-icon>
            
          </div>
        </div>      
      </transition>
    </div>
  
    
  </template>
  
  
  <style lang="scss" scoped>
  .separation{
    height: 1px;
    width: 100%;
    background-color: white;
    margin-top: 10px;
  }
  ul {
      list-style-type: none;
     }

  ul li{
        font-size: 17px;
        color: #f0f0f0;
    }

   .orders li{
    margin-top: 20px;
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
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .user-info a {
    text-decoration: none;
    color: rgb(255, 255, 255); 
  }
  
  .user-info div a {
    color: rgb(255, 255, 255);
    opacity: .5;
  }
  .side-panel {
    width: 100%; 
    max-width: 286px;
    height: 60%;
    background-color: #0063BE; 
    position: fixed;
    top: 76px;
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