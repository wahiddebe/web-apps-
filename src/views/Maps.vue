<template>
  <div>
    <div id="mapContainer" />
  </div>
</template>

<script>
  import { defineComponent, onMounted, onBeforeMount } from "@vue/compat";
  import "leaflet/dist/leaflet.css";
  import L from "leaflet";
  export default defineComponent({
    name: "LMap",
    props: {
      markers: {
        type: Array,
        required: false,
        default: () => [[-26.8560346, -49.239189]],
      },
    },
    setup(props) {
      let map = null;
      onMounted(() => {
        console.log(props.markers);
        createMapLayer();
      });
      onBeforeMount(() => {
        if (map) {
          map.remove();
        }
      });
      const createMapLayer = () => {
        map = L.map("mapContainer").setView([-26.8560346, -49.239189], 5);
        L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
        L.marker([-26.8560346, -49.239189]).addTo(map);
      };
    },
  });
</script>

<style scoped>
  #mapContainer {
    width: 100%;
    height: calc(75vh - 50px);
  }
</style>
