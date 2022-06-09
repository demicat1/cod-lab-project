<template>
  <div class="booking-container">
    <h1 class="title">Title</h1>
    <p class="rating">Rating</p>
    <p class="adress">Adress</p>
    <Calendar />
    <TimeDropdown :items="time" />
    <button class="book-btn">Book</button>
    <button class="book-btn accent">Return</button>
  </div>
</template>

<script lang="ts">
import TimeDropdown from './../components/TimeDropdown.vue'
import Calendar from './../components/Calendar.vue'

export default {
  components: {
    TimeDropdown,
    Calendar
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
      time: ['09:00-11:00', '11:00-13:00', '14:00-16:00', '16:00-18:00']
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid #000;
}

.booking-container {
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.booking-container h1,
p {
  margin: 0.5rem;
}

.book-btn {
  background-color: var(--secondary);
  padding: 0.5rem;
  padding-inline: 2rem;
  border-radius: 5rem;
  cursor: pointer;
  margin: 0.5rem;
  align-self: center;
}
.book-btn:hover {
  background-color: var(--secondary-dark);
}

.accent {
  background-color: var(--accent);
}

.accent:hover {
  background-color: var(--accent-dark);
}
</style>
