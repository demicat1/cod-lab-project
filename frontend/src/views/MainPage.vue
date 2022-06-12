<template>
  <div class="main-row">
    <div class="sidebar">
      <div class="sidebar-top">
        <div class="searchbar">
          <input class="search-input" type="text" placeholder="Search" name="search" v-model="srchMod.search" />
          <button type="submit" class="search-btn" @click="search()">
            <img src="/search-glass.png" class="glass-icon" />
          </button>
        </div>
        <div class="icons-container">
          <img class="icon" src="/cog.png" @click="getServices(0)" />
          <img class="icon" src="/spray.png" @click="getServices(1)" />
          <img class="icon" src="/tire.png" @click="getServices(2)" />
        </div>
        <hr />
      </div>
      <div class="info-container" v-if="!isBooking">
        <Sort @selSort="sortItems($event.prop, $event.asc)" />
        <div class="info-list">
          <ServiceItem
            ref="servi"
            :items="services"
            @serviceSelected="
              isBooking = true;
              selectedService = $event;
            "
            v-if="!isBooking"
          />
        </div>
        <hr />
      </div>
      <Suspense>
        <Booking :service="selectedService" v-if="isBooking" />
      </Suspense>
    </div>
    <div class="main-container">
      <Map ref="map" :services="markers" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from "vue";
import Map from "./../components/Map.vue";
import Sort from "./../components/Sort.vue";
import Booking from "./Booking.vue";
import ServiceItem from "./../components/ServiceItem.vue";
import axios from "axios";

const services = shallowRef<any[]>([]);
const markers = shallowRef<any[]>([]);
const selectedService = ref(null);
const srchMod = ref({ search: "" });
let isAscending = true;

function search(query = srchMod.value.search) {
  axios.get(`/carwash/search?q=${query}`).then((response) => {
    services.value = response.data.data;
    markers.value = response.data.data;
  });
}

function getServices(facilType = 0) {
  axios.get(`/carwash/getCoords?type=${facilType}&asc=${isAscending}`).then((response) => {
    services.value = response.data;
    markers.value = response.data;
  });
}
getServices();

function sortItems(param = "Name", ascending = true) {
  isAscending = ascending;
  const arr = [...services.value];
  arr.sort((a, b) => {
    if (ascending) {
      if (a[param] > b[param]) {
        return 1;
      }
      if (a[param] < b[param]) {
        return -1;
      }
    }
    if (!ascending) {
      if (a[param] < b[param]) {
        return 1;
      }
      if (a[param] > b[param]) {
        return -1;
      }
    }
    return 0;
  });
  services.value = arr;
}

const map = ref();
const servi = ref();
const isBooking = ref(false);
</script>

<style scoped>
.main-row {
  min-height: 100vh;
  display: flex;
}

.main-container {
  flex: 3 0;
}

.sidebar {
  display: flex;
  flex-direction: column;
  flex: 0 1 400px;
  max-height: 100vh;
  margin: 0;
  padding: 1rem;
  background-color: var(--bg);
  overflow-y: auto;
  border: solid 1px var(--primary);
}
.sidebar-top {
  flex: 0 1 100px;
  display: flex;
  flex-direction: column;
}
.searchbar {
  position: relative;
}
.search-input {
  border: 0;
  /* font-size: 18px; */
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: var(--primary);
  outline: none;
  transition: 0.3s;
}

.search-input:focus {
  background-color: var(--secondary);
  transition: 0.3s;
}

.search-input:focus::placeholder {
  transition: 0.3s;
  color: transparent;
}

.search-btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  width: 4rem;
  height: 100%;
  z-index: 1;
  border: 0;
  border-radius: 50px;
  cursor: pointer;
  background-color: var(--secondary);
}

.search-btn:hover {
  background-color: var(--secondary-dark);
}

.glass-icon {
  max-width: 2rem;
}
.icons-container {
  display: flex;
  justify-content: space-evenly;
}
.icon {
  margin: 1rem;
  max-width: 6rem;
  max-height: 6rem;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s;
}

.icon:hover {
  box-shadow: 0 0 5px 1px #000;
}

hr {
  min-width: 100%;
  margin-block: 3px;
  background-color: var(--primary);
  border: none;
  height: 1px;
}

.info-container {
  flex: 0 1 500px;
  display: flex;
  flex-direction: column;
  margin-block: 1rem;
}

.info-list {
  flex: 0 1 500px;
  padding-right: 1rem;
  overflow-y: scroll;
  /* border-top: 1px solid #7d7048;
  border-bottom: 1px solid #7d7048; */
}

::-webkit-scrollbar {
  width: 13px;
}

/* Track */
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

@media screen and (max-width: 800px) {
  .main-row {
    flex-direction: column-reverse;
  }

  .main-container {
    min-height: 67vh;
  }

  .sidebar {
    min-height: 33vh;
    border-radius: 15px 15px 0 0;
    overflow-y: scroll;
  }
}
</style>
