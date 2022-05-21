<template>
  <div class="booking-container">
    <h1 class="title">Title</h1>
    <p class="rating">Rating</p>
    <p class="adress">Adress</p>
    <DayDropdown :items="weekdays" />
    <TimeDropdown :items="time" />
    <button class="book-btn">Book</button>
  </div>
</template>

<script lang="ts">
import DayDropdown from './../components/DayDropdown.vue'
import TimeDropdown from './../components/TimeDropdown.vue'

export default {
  components: {
    DayDropdown,
    TimeDropdown
  },
  data() {
    return {
      weekdays: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      time: []
    }
  }
}
</script>

<style scoped>
.booking-container {
  display: none;
  flex-direction: column;
  flex-basis: 300px;
  padding: 2rem;
}

.booking-container h1,
p {
  margin: 0.5rem;
}
</style>
