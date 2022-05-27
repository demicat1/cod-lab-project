<template>
  <!-- <div class="day-dropdown" @click="isOpen = !isOpen">
    <button class="day-btn">Day</button>
    <div class="drop-list" v-if="isOpen">
      <div class="drop-item" v-for="item in items">
        <button>{{ item }}</button>
      </div>
    </div>
  </div> -->
  <select name="day-select">
    <option value="" v-for="item in items">{{item}}</option>
  </select>
</template>

<script lang="ts">
export default {
  name: 'DayDropdown',
  props: ['items'],
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
.day-select{
  display: none;
}

.day-btn {
  background-color: #9b8b59;
  border: 0;
  padding: 0.5rem;
  padding-inline: 2rem;
  border-radius: 5rem;
  cursor: pointer;
  margin: 0.5rem;
}

.day-btn:hover {
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
