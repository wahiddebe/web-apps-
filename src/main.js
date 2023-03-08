import Vue, { createApp } from "@vue/compat";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import { BootstrapVue } from "bootstrap-vue";
import L from "leaflet";

// Import Bootstrap and BootstrapVue CSS files (order is important)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
createApp(App).use(router).mount("#app");
