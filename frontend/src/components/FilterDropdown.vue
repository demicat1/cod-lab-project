<template>
  <div class="filter-dropdown" @click="isOpen = !isOpen">
    <button class="filter-btn">Filter</button>
    <div class="drop-list" v-if="isOpen">
      <div class="drop-item" v-for="item in items">
        <button>{{ item.label }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'filterDropdown',
  props: ['items'],
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
.filter-btn {
  background-color: #9b8b59;
  border: 0;
  padding: 0.5rem;
  padding-inline: 5rem;
  border-radius: 5rem;
  cursor: pointer;
}

.filter-btn:hover {
  background-color: #7d7048;
}

.drop-list {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background-color: #9b8b59;
  border: solid 1px #000;
  padding: 0.5rem;
  border-radius: 2rem;
}
.drop-item button {
  background-color: #9b8b59;
  border: 0;
  padding: 0.5rem;
  padding-inline: 3rem;
  border-radius: 2rem;
}

.drop-item button:hover {
  background-color: #7d7048;
  cursor: pointer;
}
</style>
