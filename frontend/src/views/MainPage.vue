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
      <div class="info-list">
        <ul class="info-container">
          <li>Name: 1</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
        <ul class="info-container">
          <li>Name: 2</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
        <ul class="info-container">
          <li>Name: 3</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
        <ul class="info-container">
          <li>Name: 3</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
        <ul class="info-container">
          <li>Name: 3</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
        <ul class="info-container">
          <li>Name: 3</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
        <ul class="info-container">
          <li>Name: 3</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
        <ul class="info-container">
          <li>Name: 3</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
        <ul class="info-container">
          <li>Name: 3</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
        <ul class="info-container">
          <li>Name: 3</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
        <ul class="info-container">
          <li>Name: 3</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
        <ul class="info-container">
          <li>Name: 3</li>
          <li>Address:</li>
          <li>Type:</li>
        </ul>
      </div>
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

.info-list {
  padding-inline: 10px;
  overflow-y: scroll;
  max-height: 100%;
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
  border: 2px solid #66583859;
  border-radius: 7px;
  padding: 10px;
  margin-block: 10px;
  text-align: left;
}

.info-container li {
  font-size: 16px;
}

.sidebar {
  display: flex;
  flex-direction: column;
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
  max-width: 6rem;
  max-height: 6rem;
  cursor: pointer;
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
