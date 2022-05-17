<template>
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
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'

const isOpened = ref(false)

//TODO Reactive color code variables?
</script>

<style scoped>
.sidebar {
  position: fixed;
  right: 0;
  width: 150px;
  height: 100vh;
  z-index: 10;
  background-color: #d4cd87;
  transition: width 0.2s linear;
}
.sidebar > p {
  /* padding: 0.3rem 0.2rem 0.3rem 1rem; */
  padding: 0.3rem;
  cursor: pointer;
  background-color: #b9b37a;
  color: #e5e5e5;
  /* text-align: left; */
}
.sidebar > p:hover {
  background-color: #504c2f;
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
  background-color: #afa970;
  padding: 10px;
  border-radius: 15%;
}
.w-0 {
  width: 0;
}
</style>
