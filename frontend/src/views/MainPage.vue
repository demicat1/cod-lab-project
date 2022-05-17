<template>
  <div class="main-row">
    <div class="sidebar">
      <header>
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
      </header>
      <hr />
      <div class="results-container"></div>
    </div>

    <main class="main-container">
      <Map ref="map" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import Map from './../components/Map.vue'

const map = ref()
</script>

<style scoped>
.main-row {
  min-height: 100vh;
  display: flex;
}

.main-container {
  flex: calc(100% - var(--sidebar-width));
}

.sidebar {
  flex: var(--sidebar-width);
  margin: 0;
  padding: 1rem;
  background-color: var(--dark-primary);
}
.sidebar header {
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
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
}
.icon {
  margin: 1rem;
}
.icon {
  max-width: 6rem;
  max-height: 6rem;
  cursor: pointer;
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
