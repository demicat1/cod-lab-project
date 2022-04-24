<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <sidebar />
  <router-view />
  <div class="bg"></div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  font-family: Verdana;
  font-size: large;
}

.bg {
  /* background-image: url(/cars.png);
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative; */
}

p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-image: url(/cars.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
