<template>
  <nav-bar />
  <router-view />
  <FooterComp />
</template>
<script setup>
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";
</script>
<style>
:root {
  --blue: #3e5e84;
  --yellow: #4e3315;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #3e5e84;
  box-sizing: border-box;

  margin: 0;
  padding: 0;
}
</style>
