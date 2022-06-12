<template>
  <div class="booking-container">
    <h1 class="title">{{ service.Name }}</h1>
    <p class="rating">{{ service.Address }}</p>
    <p class="adress">Rating: {{ service.Rating }}</p>
    <div class="service-list">
      <div class="service-item" v-for="serv in servs">
        <p>{{ serv.Name }}</p>
        <p>{{ serv.Description }}</p>
        <p>{{ serv.Price }}</p>
      </div>
    </div>
    <input type="date" id="date" class="date" v-model="date" />
    <TimeDropdown :items="times" @selectTime="time = $event.value" />
    <button class="book-btn" @click="bookTime()">Book</button>
    <button class="book-btn accent" @click="$emit('return')">Return</button>
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
const servs = ref([])

function bookTime() {
  const formedDate = new Date(
    new Date(date.value).setHours(time.value.substring(0, 2), time.value.substring(3, 5)) +
      new Date().getTimezoneOffset() * 60 * 1000
  );

  axios
    .post("/carwash/createOrder", {
      date: formedDate,
    })
    .then(function (response) {
      console.log(response);
    });
}

async function getServiceList() {
  axios.get(`/carwash/getServiceInfo?id=${props.service.Id}`).then((response) => {
    let servInfoResp = response.data
    servInfoResp.forEach(i => {
      this.serv.push({Name: i["Name"], Description: i["Description"], Price: i["Price"]})
    });
  })
}
await getServiceList()
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
</style>
