<template>
  <div class="booking-container">
    <h1 class="title">{{ service.Name }}</h1>
    <p class="rating">{{ service.Address }}</p>
    <p class="adress">Rating: {{ service.Rating }}</p>
    <DayDropdown :items="weekdays" />
    <TimeDropdown :items="time" />
    <button class="book-btn">Book</button>
    <button class="book-btn orange">Return</button>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import DayDropdown from "./../components/DayDropdown.vue";
import TimeDropdown from "./../components/TimeDropdown.vue";

const props = defineProps({ service: Object });
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const time = await (await axios.get(`/carwash/getTimeSlots?id=${props.service.Id}&date=${new Date("2022-04-11").toLocaleDateString()}`)).data;
</script>

<style scoped>
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
  background-color: var(--accent);
  border: 0;
  padding: 0.5rem;
  padding-inline: 2rem;
  border-radius: 5rem;
  cursor: pointer;
  margin: 0.5rem;
  align-self: center;
}
.book-btn:hover {
  background-color: var(--accent-dark);
}

.orange {
  background-color: var(--secondary);
}

.orange:hover {
  background-color: var(--secondary-dark);
}
</style>
