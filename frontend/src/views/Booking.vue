<template>
  <div class="booking-container">
    <h1 class="title">{{ service.Name }}</h1>
    <p class="rating">{{ service.Address }}</p>
    <p class="adress">Rating: {{ service.Rating }}</p>
    <h2>Choose an услугу:</h2>
    <div class="service-list">
      <div
        class="service-item"
        :class="{ selected: s.Id == serviceSelectedId }"
        v-for="s in services"
        :key="s.Id"
        @click="serviceSelectedId = s.Id"
      >
        <p>
          <b>{{ s.Name }}</b>
        </p>
        <p>{{ s.Description }}</p>
        <p class="price">{{ s.Price }}</p>
      </div>
    </div>
    <input type="date" id="date" class="date" v-model="date" />
    <TimeDropdown :items="times" @selectTime="time = $event.value" />
    <button class="book-btn" :class="{ loading: isProcessing }" :disabled="isProcessing" @click="bookTime()">Book</button>
    <button class="book-btn accent" :class="{ loading: isProcessing }" :disabled="isProcessing" @click="$emit('return')">
      Return
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import axios from "axios";
import TimeDropdown from "./../components/TimeDropdown.vue";

const props = defineProps({ service: Object });
defineEmits(["return"]);

const date = ref(new Date().toISOString().substring(0, 10));
const times = await (
  await axios.get(`/carwash/getTimeSlots?id=${props.service.Id}&date=${new Date("2022-04-11").toLocaleDateString()}`)
).data;
const time = ref(times[0]);
const services = ref([]);
const serviceSelectedId = ref("");
const isProcessing = ref(false);

async function getServiceList() {
  axios.get(`/carwash/getServiceInfo?id=${props.service.Id}`).then((response) => {
    services.value = response.data;
    serviceSelectedId.value = services.value[0].Id;
  });
}
await getServiceList();

function bookTime() {
  isProcessing.value = true;

  const formedDate = new Date(
    new Date(date.value).setHours(time.value.substring(0, 2), time.value.substring(3, 5)) +
      new Date().getTimezoneOffset() * 60 * 1000
  );

  axios
    .post("/carwash/createOrder", {
      date: formedDate,
      serviceId: serviceSelectedId.value,
    })
    .then(function (response) {
      isProcessing.value = false;
      window.location.href = response.data;
    });
}
</script>

<style scoped>
.loading {
  background-color: var(--accent);
}

.selected {
  background-color: var(--secondary);
  border: 2px solid var(--secondary-dark);
}

button {
  border: 1px solid #000;
}

.booking-container {
  display: flex;
  flex-direction: column;
}

.booking-container > * {
  margin: 0.5rem;
}

.service-list {
  overflow-y: auto;
  max-height: 50vh;
  margin: 1rem 0;
  padding: 0.5em;
  padding-left: 0;
  border-block: 2px solid var(--primary);
}

.service-item {
  border: 2px solid var(--primary);
  text-align: start;
  border-radius: 1em;
  padding: 0.5em;
  margin-top: 0.5em;
  transition: 0.3s;
  cursor: pointer;
}

.service-item:hover {
  background-color: var(--primary);
  border: 2px solid var(--secondary);
}

.service-item p:not(:nth-child(1)) {
  margin-top: 0.5em;
}

.price {
  text-align: right;
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
  /* background-color: var(--secondary); */
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
