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
  --primary: #d4cd87;
  --dark-primary: #b9b37a;
  --darker-primary: #87814e;
  --shadow: #504c2f;
  --bg-primary: #c4c4c4;
  --sidebar-width: 320px;
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
