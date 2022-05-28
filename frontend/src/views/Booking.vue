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
      time: [
        '09:00-11:00',
        '11:00-13:00',
        '14:00-16:00',
        '16:00-18:00'
      ]
    }
  }
}
</script>

<style scoped>
.booking-container {
  display: flex;
  flex-direction: column;
  min-height: 200px;
}

.booking-container h1,
p {
  margin: 0.5rem;
}

.book-btn{
  background-color:#6CABB3;
  border: 0;
  padding: 0.5rem;
  padding-inline: 2rem;
  border-radius: 5rem;
  cursor: pointer;
  margin: 0.5rem;
  align-self: center  ;
}
</style>
