<template>
  <div class="booking-container">
    <h1 class="title">{{ service.Name }}</h1>
    <p class="rating">{{ service.Address }}</p>
    <p class="adress">Rating: {{ service.Rating }}</p>
    <h2>Choose an услугу:</h2>
    <div class="service-list">
      <div class="service-item">
        <p><b>Кузов+салон</b></p>
        <p>Полная мойка авто снаружи с помощью чистящих средств, сушка машины</p>
        <p class="price">5 000</p>
      </div>
      <div class="service-item">
        <p><b>Lorem, ipsum.</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi?</p>
        <p class="price">6 000</p>
      </div>
      <div class="service-item">
        <p><b>Lorem.</b></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, doloribus.</p>
        <p class="price">7 000</p>
      </div>
      <div class="service-item">
        <p><b>Nostrum?</b></p>
        <p>Quae exercitationem officiis et qui omnis! Ipsa error aperiam ut!</p>
        <p class="price">8 000</p>
      </div>
      <div class="service-item">
        <p><b>Earum.</b></p>
        <p>Ad, sint. At, vero sunt illum corporis amet ea sint.</p>
        <p class="price">9 000</p>
      </div>
      <div class="service-item">
        <p><b>Distinctio.</b></p>
        <p>Doloribus quo harum quisquam expedita neque ullam. Fugit, ullam possimus!</p>
        <p class="price">10 000</p>
      </div>
      <div class="service-item">
        <p><b>Blanditiis!</b></p>
        <p>Optio, ad incidunt! Dolor nobis quas ipsam at, vero id.</p>
        <p class="price">11 000</p>
      </div>
      <div class="service-item">
        <p><b>Maiores!</b></p>
        <p>Non enim ab soluta voluptates, maxime reprehenderit ipsa sint minima?</p>
        <p class="price">12 000</p>
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
}

.booking-container > * {
  margin: 0.5rem;
}

.service-list {
  overflow-y: auto;
  max-height: 50vh;
  margin: 1rem 0;
  padding: .5em;
  padding-left: 0;
  border-block: 2px solid var(--primary);
}

.service-item {
  border: 2px solid var(--primary);
  text-align: start;
  border-radius: 1em;
  padding: .5em;
  margin-top: .5em;
  transition: 0.3s;
}

.service-item:hover{
  background-color: var(--primary);
  border: 2px solid var(--secondary);
}

.service-item p:not(:nth-child(1)){
  margin-top: .5em;
}

.price {
  text-align: right;
}
.date {
  background-color: var(--primary);
  border: 1px solid #000;
  border-radius: 0.5em;
  padding: .3em 1em;
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
