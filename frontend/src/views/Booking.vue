<template>
  <div class="booking-container">
    <h1 class="title">{{ service.Name }}</h1>
    <p class="rating">{{ service.Address }}</p>
    <p class="adress">Rating: {{ service.Rating }}</p>
    <input type="date" id="date" class="date" />
    <TimeDropdown :items="time" />
    <button class="book-btn">Book</button>
    <button class="book-btn accent">Return</button>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import TimeDropdown from "./../components/TimeDropdown.vue";

const props = defineProps({ service: Object });
const time = await (await axios.get(`/carwash/getTimeSlots?id=${props.service.Id}&date=${new Date("2022-04-11").toLocaleDateString()}`)).data;
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

.booking-container > * {
  margin: 0.5rem;
}
.date {
  background-color: var(--primary);
  border: 1px solid #000;
  border-radius: 0.5em;
  padding: 0.3em 1em;
  align-self: center;
  transition: 0.3s;
}

.date:hover {
  background-color: var(--secondary);
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
