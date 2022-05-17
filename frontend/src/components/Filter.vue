<template>
  <div class="filter-container">
    <div>
      <FilterDropdown :items="filters" />
    </div>
  </div>
</template>

<script lang="ts">
import FilterDropdown from './FilterDropdown.vue'

export default {
  name: 'filter',
  components: {
    FilterDropdown
  },
  data() {
    return {
      filters: [{ label: 'by name' }, { label: 'by type' }]
    }
  }
}
</script>

<style scoped>
.filter-container {
  display: flex;
  align-self: baseline;
}
</style>
