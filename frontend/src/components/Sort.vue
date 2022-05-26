<template>
  <div class="sort-container">
    <span>Sort by</span>
    <SortDropdown
      :selected="selectedProp"
      :items="options"
      @selectItm="
        selectedProp = $event;
        $emit('selSort', { prop: $event, asc: ascendingOrder });
      "
    />
    <div class="order-container">
      <span>in</span>
      <button
        class="order-btn"
        @click="
          ascendingOrder = !ascendingOrder;
          $emit('selSort', { prop: selectedProp, asc: ascendingOrder });
        "
      >
        {{ ascendingOrder ? "Ascending" : "Descending" }}
      </button>
      <span>order</span>
    </div>
  </div>
</template>

<script lang="ts">
import SortDropdown from "./SortDropdown.vue";

export default {
  name: "Sort",
  emits: ["selSort"],
  components: {
    SortDropdown,
  },
  data() {
    return {
      options: ["name", "rating"],
      ascendingOrder: true,
      selectedProp: "name",
    };
  },
};
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
  padding-inline: 0.5rem;
  font-size: 1.3rem !important;
  font-weight: bold;
}

.order-container {
  /* border: 1px solid #000; */
  padding: 0.5rem 0.5rem 0.5rem 0;
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
