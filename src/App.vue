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
  color: var(--blue);
  box-sizing: border-box;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--blue);
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
