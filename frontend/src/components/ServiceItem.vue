<template>
  <button class="info-item" v-for="itm in props.items" :key="itm.name" @click="$emit('serviceSelected')">
    <li>Name: {{ itm.Name }}</li>
    <li>Address: {{ itm.Address }}</li>
    <li>Rating: {{ itm.Rating }}</li>
  </button>
</template>

<script setup lang="ts">
import { PropType } from "vue";

defineEmits(["serviceSelected"]);
const props = defineProps({
  items: { type: Array as PropType<any[]>, default: [] },
});
</script>

<style scoped>
.short-info {
  list-style: none;
  border: 2px solid #66583859;
  border-radius: 7px;
  padding: 5px;
  margin-block: 10px;
  text-align: left;
}

.short-info li {
  font-size: 14px;
}

.info-item {
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

.info-item:hover {
  background-color: #aba46c;
}

.info-item li {
  font-size: 1.7rem;
}
</style>
