<template>
    <select name="time-select" class="time-select" @change="$emit('selectTime', $event.target)">
      <option :value="item.substring(0, 5)" v-for="item in items">{{ item }}</option>
    </select>
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
  max-width: 15em;
  padding: 0.3em 0.5em;
  margin: 0.3em;
  border-radius: 0.5em;
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
