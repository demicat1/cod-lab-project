<template>
  <div class="sort-dropdown" @click="isOpen = !isOpen">
    <button class="sort-btn">{{ selected }}</button>
    <div class="drop-list" v-if="isOpen">
      <div class="drop-item" v-for="item in items">
        <button @click="$emit('selectItm', item)">{{ item }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SortDropdown',
  props: ['items', 'selected'],
  emits: ['selectItm'],
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
.sort-btn {
  background-color: var(--primary);
  border: 0;
  padding: 0.5rem;
  padding-inline: 2rem;
  border-radius: 5rem;
  cursor: pointer;
}

.sort-btn:hover {
  background-color: var(--secondary);
}

.drop-list {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background-color: var(--primary);
  border: solid 1px var(--secondary);
  padding: 0.5rem;
  border-radius: 2rem;
}
.drop-item button {
  background-color: var(--primary);
  border: 0;
  padding: 0.5rem;
  padding-inline: 3rem;
  border-radius: 2rem;
}

.drop-item button:hover {
  background-color: var(--secondary);
  cursor: pointer;
}
</style>
