<template>
  <button class="info-item" v-for="itm in items" :key="itm.name" @click="$emit('serviceSelected')">
    <li>Name: {{ itm.name }}</li>
    <li>Address: {{ itm.address }}</li>
    <li>Rating: {{itm.rating}}</li>
  </button>
</template>

<script setup>
import axios, { AxiosError, AxiosResponse } from 'axios'
import { reactive, ref } from 'vue'
defineEmits(['serviceSelected'])

const items = reactive([])
//  emits: ["serviceSelected"],
function sortItems(param = 'name', ascending = true) {
  items.sort((a, b) => {
    if (ascending) {
      if (a[param] > b[param]) {
        return 1
      }
      if (a[param] < b[param]) {
        return -1
      }
    }
    if (!ascending) {
      if (a[param] < b[param]) {
        return 1
      }
      if (a[param] > b[param]) {
        return -1
      }
    }
    return 0
  })
}

function getFacilData(facilType = 0) {
  axios.get(`/carwash/getCoords?type=${facilType}`).then((response) => {
    let itemsResp = response.data
    itemsResp.forEach((i) => {
      let item = {
        name: i['Name'],
        address: i['Address'],
        rating: i['Rating'],
        type: facilType
      }
      items.push(item)
    })
    sortItems()
  })
}

getFacilData(1)

const vlay = ref('1')
defineExpose({ sortItems, vlay })
</script>

<style scoped>
.short-info {
  list-style: none;
  border: 2px solid #66583859;
  border-radius: 7px;
  padding: 5px;
  margin-block: 10px;
  text-align: left;
}

.short-info li {
  font-size: 14px;
}

.info-item {
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

.info-item:hover {
  background-color: #aba46c;
}

.info-item li {
  font-size: 1.7rem;
}
</style>
