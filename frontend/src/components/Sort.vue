<template>
  <div class="sort-container">
    <SortDropdown :items="options" />
    <div class="order-container">
      <span>in</span>
      <button class="order-btn" @click="ascendingOrder = !ascendingOrder">
        {{ ascendingOrder ? 'Descending' : 'Ascending' }}
      </button>
      <span>order</span>
    </div>
  </div>
</template>

<script lang="ts">
import SortDropdown from './SortDropdown.vue'

export default {
  name: 'sort',
  components: {
    SortDropdown
  },
  data() {
    return {
      options: [{ label: 'name' }, { label: 'rating' }],
      ascendingOrder: false
    }
  }
}
</script>

<style scoped>
.sort-container {
  display: flex;
  align-self: baseline;
  align-items: center;
  margin-block: 1rem;
}

.sort-container span {
  text-align: center;
  margin-inline: 0.5rem;
}

.order-container {
  /* border: 1px solid #000; */
  padding: 0.5rem;
}

.order-btn {
  background-color: #9b8b59;
  border: 0;
  padding: 0.5rem;
  padding-inline: 2rem;
  border-radius: 5rem;
  cursor: pointer;
}
</style>
