<template>
  <div class="time-select-container">
    <select name="time-select" class="time-select" @change="$emit('selectTime', $event.target)">
      <option :value="item.substring(0, 5)" v-for="item in items">{{ item }}</option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TimeDropdown',
  props: ['items'],
  emits: ['selectTime'],
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
.time-select {
  /* max-width: fit-content; */
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 1rem;
  border: 1px solid #000;
  background-color: var(--primary);
  transition: 0.3s;
}

.time-select:hover{
  /* background-color: var(--secondary); */
}

/* Track */
::-webkit-scrollbar {
  width: 13px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: var(--primary);
}

::-webkit-scrollbar-thumb {
  background: var(--secondary);
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-dark);
}
</style>
