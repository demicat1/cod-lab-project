<template>
  <div id="map"></div>
</template>

<script>
import 'leaflet.offline'
import 'leaflet/dist/leaflet.css'
import { defineComponent } from 'vue'
if (navigator.geolocation) {
  console.log('y')
} else {
  console.log('n')
}
// navigator.geolocation.getCurrentPosition(){
//   function(position){
//     export default defineComponent({
//       data() {
//       return {
//       map: null,
//     }
//   },
//   mounted() {
//     this.map = L.map('map', { zoomControl: false }).setView(
//       [position.coords.latitude,position.coords.longitude],
//       11
//     )
//     this.map.setMaxBounds(this.map.getBounds())
//     L.tileLayer
//       .offline('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
//         maximumAge: 2629800000,
//       })
//       .addTo(this.map)
//   },
// })},
//   function(error){
//     export default defineComponent({
//       data() {
//         return {
//         map: null,
//     }
//   },
//   mounted() {
//     this.map = L.map('map', { zoomControl: false }).setView(
//       [51.136708, 71.442031],
//       11
//     )
//     this.map.setMaxBounds(this.map.getBounds())
//     L.tileLayer
//       .offline('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
//         maximumAge: 2629800000,
//       })
//       .addTo(this.map)
//   },
// })}
// };

export default defineComponent({
  data() {
    return {
      map: null,
    }
  },
  methods: {},
  mounted() {
    this.map = L.map('map', {
      zoomControl: false,
      attributionControl: false,
    }).setView([51.136708, 71.442031], 11)
    this.map.setMaxBounds(this.map.getBounds())
    L.tileLayer
      .offline('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        maximumAge: 2629800000,
      })
      .addTo(this.map)
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
