<template>
    <div class="about-container">
      <h2 class="about-title">♡</h2>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
    .about-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh; 
      background: linear-gradient(to bottom, #3498db, #2c3e50); 
    }
  
    .about-title {
      margin-top: 0;
      text-align: center;
      color: #ecf0f1; 
      font-size: 2em; 
      animation: pulse 1.5s infinite; 
    }
  
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(2);
      }
      100% {
        transform: scale(4);
      }
    }
  </style>

