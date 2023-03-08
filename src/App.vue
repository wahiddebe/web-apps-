<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->

  <div class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <Navbar />
    <div class="container h-100 py-4">
      <!-- Content -->
      <router-view />
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
  // import HelloWorld from "./components/HelloWorld.vue";

  // Components
  import Footer from "./components/Footer.vue";
  import Navbar from "./components/Navbar.vue";
  // import { vsxIcon } from "vue-iconsax";
  export default {
    name: "App",
    components: {
      Navbar,
      Footer,
      // vsxIcon,
    },
    // props: ["iconName"],
  };
</script>

<style></style>
