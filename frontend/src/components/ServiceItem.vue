<template>
  <div>
    <ul class="short-info">
      <li>{{ items }}</li>
      <!-- <li>{{ items[0]['address'] }}</li>
      <li>{{ items[0]['type'] }}</li> -->
    </ul>
  </div>
</template>

<script>
import axios, { AxiosError, AxiosResponse } from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServiceItem',
  data() {
    return {
      items: []
    }
  },
  methods: {
    getFacilData(facilType = 0) {
      axios.get(`/carwash/getCoords?type=${facilType}`).then((response) => {
        let itemsResp = response.data
        itemsResp.forEach((i) => {
          let item = {
            name: i['Name'],
            address: i['Address'],
            type: facilType
          }
          this.items.push(item)
        })
      })
    }
  },
  mounted() {
    this.getFacilData(0)
    this.getFacilData(1)
  }
})
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
</style>
