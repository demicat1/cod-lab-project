<template>
  <div class="sidebar-component">
    <div class="burger-ico" @click="isOpened = !isOpened">
      <img src="/burger-menu.png" width="30" />
    </div>
    <div class="sidebar" :class="{ 'w-0': !isOpened }">
      <template v-if="isOpened">
        <img
          src="/exit.png"
          width="40"
          class="close-ico"
          @click="isOpened = !isOpened"
        />
        <img src="/no-avatar.jpg" width="50" class="avatar" />
        <p>Main</p>
        <p>Settings</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'

const isOpened = ref(false)
</script>

<style scoped>
.sidebar {
  position: fixed;
  right: 0;
  width: 150px;
  height: 100vh;
  z-index: 10;
  background-color: var(--bg);
  transition: width 0.2s linear;
}
.sidebar > p {
  /* padding: 0.3rem 0.2rem 0.3rem 1rem; */
  padding: 0.3rem;
  cursor: pointer;
  /* text-align: left; */
  transition: 0.3s;
}
.sidebar > p:hover {
  background-color: var(--primary);
}
.close-ico {
  position: absolute;
  bottom: 1.5rem;
  right: 35%;
  transition: transform 0.2s;
  cursor: pointer;
}
.avatar {
  border-radius: 50%;
  margin: 1rem 0 1rem 0;
}
.close-ico:hover {
  transform: scale(1.25);
}
.burger-ico {
  position: fixed;
  right: 25px;
  top: 25px;
  cursor: pointer;
  background-color: var(--primary);
  padding: 10px;
  border-radius: 15%;
}
.w-0 {
  width: 0;
}
</style>
