<template>
  <div id="map"></div>
</template>

<script>
import axios, { AxiosError, AxiosResponse } from "axios";
import "leaflet.offline";
import "leaflet/dist/leaflet.css";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    services: Array,
  },
  data() {
    return {
      map: null,
      markers: [],
    };
  },
  mounted() {
    // Setting map
    this.map = L.map("map", {
      zoomControl: false,
      attributionControl: false,
    }).setView([51.136708, 71.442031], 11);

    navigator.geolocation.getCurrentPosition((position) => {
      var userIcon = L.icon({
        iconUrl: "/user-marker-icon.png",
      });

      const userCords = [position.coords.latitude, position.coords.longitude];
      this.map.setView(userCords, 11);
      var userMarker = L.marker(userCords, { icon: userIcon }).addTo(this.map);
      userMarker.bindPopup("<p>You</p>");
    });

    this.map.setMaxBounds(this.map.getBounds());

    L.tileLayer
      .offline("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png", {
        maximumAge: 2629800000,
      })
      .addTo(this.map);

    this.getMarkers();
  },
  watch: {
    services: {
      handler: function (newVal, oldVal) {
        this.updateMarkers(newVal);
      },
    },
  },
  methods: {
    updateMarkers() {
      this.markers.forEach((x) => this.map.removeLayer(x));
      this.markers.length = 0;
      this.services.forEach((m) => {
        let marker = L.marker([m["Latitude"], m["Longitude"]]).addTo(this.map);
        marker.bindPopup(`<p>${m["Name"]}</p>`);
        this.markers.push(marker);
      });
    },
    getMarkers(facilType = 0) {
      axios.get(`/carwash/getCoords?type=${facilType}`).then((response) => {
        this.markers.forEach((x) => this.map.removeLayer(x));
        this.markers.length = 0;
        let markersResp = response.data;
        markersResp.forEach((m) => {
          let marker = L.marker([m["Latitude"], m["Longitude"]]).addTo(this.map);
          marker.bindPopup(`<p>${m["Name"]}</p>`);
          this.markers.push(marker);
        });
      });
    },
  },
});
</script>

<style>
#map {
  min-height: 100vh;
  width: 100%;
}

@media screen and (max-width: 800px) {
  #map {
    min-height: 67vh;
  }
}
</style>
