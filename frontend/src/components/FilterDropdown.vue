<template>
  <div class="filterDropdown" @click="isOpen = !isOpen">
    <button>filters v</button>
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
.drop-list {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
</style>
