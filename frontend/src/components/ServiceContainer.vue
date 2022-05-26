<template>
  <button class="shortInfo">
    <li>Name: 1</li>
    <li>Address: 12</li>
    <li>Type:</li>
  </button>
</template>

<script lang="ts">
export default {
  name: 'ServiceContainer'
}
</script>

<style scoped>
.shortInfo {
  list-style: none;
  width: 100%;
  background-color: transparent;
  border: 2px solid #66583859;
  border-radius: 7px;
  padding: 5px;
  margin: 0.5rem 0 0.5rem 0;
  text-align: left;
  cursor: pointer;
}

.shortInfo li {
  font-size: 14px;
}
</style>
