<template>
  <div id="map"></div>
</template>

<script>
import axios, { AxiosError, AxiosResponse } from 'axios'
import 'leaflet.offline'
import 'leaflet/dist/leaflet.css'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      map: null,
    }
  },
  mounted() {
    // Setting map

    this.map = L.map('map', {
      zoomControl: false,
      attributionControl: false,
    }).setView([51.136708, 71.442031], 11)

    navigator.geolocation.getCurrentPosition((position) => {
      var userIcon = L.icon({
        iconUrl: '../../public/user-marker-icon.png',
      })

      const userCords = [position.coords.latitude, position.coords.longitude]
      this.map.setView(userCords, 11)
      var userMarker = L.marker(userCords, { icon: userIcon }).addTo(this.map)
      userMarker.bindPopup('<p>You</p>')
    })

    this.map.setMaxBounds(this.map.getBounds())

    L.tileLayer
      .offline('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        maximumAge: 2629800000,
      })
      .addTo(this.map)

    // Markers

    axios.get('/carwash/getCoords').then((response) => {
      let markers = response.data
      markers.forEach((m) => {
        let marker = L.marker([m['Latitude'], m['Longitude']]).addTo(this.map)
        marker.bindPopup(`<p>${m['Name']}</p>`)
      })
    })
  },
})
</script>

<style>
#map {
  width: 100%;
  min-height: 100%;
}

@media screen and (max-width: 425px) {
  #map {
    min-height: 80vh;
  }
}
</style>
