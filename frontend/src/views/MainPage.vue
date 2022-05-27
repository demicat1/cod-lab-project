<template>
  <div class="main-row">
    <div class="sidebar">
      <div class="sidebar-top">
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
          <img
            class="icon"
            src="/spray.png"
            alt=""
            @click="map.getMarkers(1)"
          />
          <img class="icon" src="/tire.png" alt="" />
        </div>
      </div>
      <hr />
      <div class="info-container">
        <Sort
          @selSort="servi.sortItems($event.prop, $event.asc)"
          :callback="'$refs.servi.sortItems'"
        />
        <div class="info-list">
          <ServiceItem ref="servi" @serviceSelected="isBooking = true" v-if="!isBooking" />
        </div>
      </div>
      <hr />
      <Booking v-if="isBooking" />
    </div>
    <div class="main-container">
      <Map ref="map" />
    </div>
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
const isBooking = ref(false)

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
  background-color: var(--dark-primary);
  overflow-y: auto;
}
.sidebar-top {
  flex: 0 1 100px;
  display: flex;
  flex-direction: column;
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
  margin-block: 3px;
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
  background-color: #aba46c;
}

::-webkit-scrollbar-thumb {
  background: #9b8b59;
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: #7d7048;
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
