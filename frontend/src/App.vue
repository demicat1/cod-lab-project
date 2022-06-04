<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <sidebar />
  <router-view />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
:root {
  font-size: 62.5%;
  --bg: #fef1e6;
  --primary: #f9d5a7;
  --secondary: #ffb085;
  --secondary-dark: #c48360;
  --accent: #90aacb;
  --accent-dark: #6683a8;
  --darker-primary: #87814e;
  --shadow: #504c2f;
  --bg-primary: #c4c4c4;
  --sidebar-width: 400px;
}
* {
  font-family: Verdana;
  font-size: large;
  box-sizing: border-box;
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
