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

* {
  font-family: Verdana;
  font-size: large;
}

p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #9d9d9d;
}
</style>
