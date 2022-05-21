<template>
  <ul class="shortInfo">
    <li>Name: 1</li>
    <li>Address: 12</li>
    <li>Type:</li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'ServiceContainer'
}
</script>

<style scoped>
.shortInfo {
  list-style: none;
  border: 2px solid #66583859;
  border-radius: 7px;
  padding: 5px;
  margin-block: 10px;
  text-align: left;
}

.shortInfo li {
  font-size: 14px;
}
</style>
