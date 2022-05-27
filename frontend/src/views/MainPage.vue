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
      <Sort
        @selSort="servi.sortItems($event.prop, $event.asc)"
        :callback="'$refs.servi.sortItems'"
      />
      <div class="info-list">
        <ServiceItem ref="servi" />
      </div>
      <Booking />
    </div>
    <main class="main-container">
      <Map ref="map" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Map from './../components/Map.vue'
import Sort from './../components/Sort.vue'
import Booking from './Booking.vue'
import ServiceItem from './../components/ServiceItem.vue'

const map = ref()
const servi = ref()
</script>

<style scoped>
.main-row {
  min-height: 100vh;
  display: flex;
}

.main-container {
  flex: 1;
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

hr {
  min-width: 100%;
}

.info-list {
  max-height: 500px;
  padding: 10px 10px 10px 0px;
  overflow-y: scroll;
  border-top: 1px solid #7d7048;
  border-bottom: 1px solid #7d7048;
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
</style>
