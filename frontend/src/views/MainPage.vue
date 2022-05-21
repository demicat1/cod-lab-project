<template>
  <div class="main-row">
    <div class="sidebar">
      <div class="searchbar">
        <input
          class="search-input"
          type="text"
          placeholder="Search"
          name="search"
        />
        <button type="submit" class="search-btn">
          <img src="/search-glass.png" width="20" />
        </button>
      </div>
      <div class="icons-container">
        <img class="icon" src="/cog.png" alt="" @click="map.getMarkers(0)" />
        <img class="icon" src="/spray.png" alt="" @click="map.getMarkers(1)" />
        <img class="icon" src="/tire.png" alt="" />
      </div>
      <hr />
      <Sort />
      <div class="info-list">
        <ServiceItem ref="serviceItem" />
        <button class="info-container">
          <li>Name: 1</li>
          <li>Address: 9</li>
          <li>Type:</li>
        </button>
        <button class="info-container">
          <li>Name: 2</li>
          <li>Address: 8</li>
          <li>Type:</li>
        </button>
        <button class="info-container">
          <li>Name: 3</li>
          <li>Address: 7</li>
          <li>Type:</li>
        </button>
        <button class="info-container">
          <li>Name: 4</li>
          <li>Address: 6</li>
          <li>Type:</li>
        </button>
        <button class="info-container">
          <li>Name: 5</li>
          <li>Address: 5</li>
          <li>Type:</li>
        </button>
        <button class="info-container">
          <li>Name: 6</li>
          <li>Address: 4</li>
          <li>Type:</li>
        </button>
        <button class="info-container">
          <li>Name: 7</li>
          <li>Address: 3</li>
          <li>Type:</li>
        </button>
        <button class="info-container">
          <li>Name: 8</li>
          <li>Address: 2</li>
          <li>Type:</li>
        </button>
        <button class="info-container" @click="">
          <li>Name: 9</li>
          <li>Address: 1</li>
          <li>Type:</li>
        </button>
      </div>
      <div class="results-container"></div>
      <Booking />
    </div>
    <main class="main-container">
      <Map ref="map" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import Map from './../components/Map.vue'
import Sort from './../components/Sort.vue'
import Booking from './Booking.vue'
import ServiceItem from './../components/ServiceItem.vue'

const map = ref()
const serviceItem = ref()
</script>

<style scoped>
.main-row {
  min-height: 100vh;
  display: flex;
}

.main-container {
  flex: 1;
}

.info-list {
  max-height: 550px;
  padding-right: 10px;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 13px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #aba46c;
}

::-webkit-scrollbar-thumb {
  background: #9b8b59;
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: #7d7048;
}

.info-container {
  list-style: none;
  width: 100%;
  background-color: transparent;
  border: 2px solid #66583859;
  border-radius: 7px;
  padding: 5px;
  margin: 0.5rem 0 0.5rem 0;
  text-align: left;
  cursor: pointer;
}

.info-container li {
  font-size: 14px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  flex-basis: var(--sidebar-width);
  margin: 0;
  padding: 1rem;
  background-color: var(--dark-primary);
}

.searchbar {
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.search-input {
  padding: 0.5rem;
  border: 0;
  flex-grow: 1;
  font-size: 18px;
  border-radius: 5px 0 0 5px;
}
.search-btn {
  padding: 0.5rem;
  border: 0;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
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
}

.info-container:hover {
  background-color: #aba46c;
}

hr {
  min-width: 100%;
}
@media screen and (max-width: 425px) {
  .main-row {
    flex-direction: column-reverse;
  }

  .main-container {
    flex: 5;
  }

  .map {
    min-height: 100%;
  }

  .sidebar {
    flex: 1;
    border-radius: 15px 15px 0 0;
  }
}
@media screen and (max-width: 330px) {
  .icons-container img {
    margin-inline: 5px;
    width: 55px;
  }
}
.results-container {
  min-height: auto;
}
.results-container p {
  font-size: 1.5rem;
  overflow: auto;
}
</style>
