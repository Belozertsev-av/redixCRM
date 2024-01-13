<template>
    <v-app>
      <header>
        <v-app-bar :elevation="5">
          <ul>
            <li>
              <NuxtLink to="/" class="nav-link"><v-btn>Главная</v-btn></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="nav-link"><v-btn>Настройки</v-btn></NuxtLink>
            </li>
          </ul>
        </v-app-bar>
      </header>
      <main>
        <slot></slot>
      </main>
    </v-app>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
    ul {
      display: flex;
      justify-content: left;
      width: 100%;
      background-color: #0059b3; 
      padding: 15px 0; 
    }
  
    li {
      margin: 0 30px;
      list-style-type: none;
    }
  
    .nav-link {
      text-decoration: none;
      color: #ecf0f1; 
      transition: color 0.3s ease; 
  
      &:hover {
        color: #72c2f8;
      }
    }
    
  </style>