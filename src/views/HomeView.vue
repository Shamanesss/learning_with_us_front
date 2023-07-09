<template>
  <div class="home">
    <div class="home-logo">
      <img alt="Vue logo" class="img-logo" src="../assets/logo_ok.png" />
      <p>"Aprende a programar facilmente"</p>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
</script>
<style scope>
.home-logo {
  background-image: url(../assets/bg_degradado.png);
  background-size: cover;
  background-position: center;
  width: 60rem;
  margin: auto;
}
.img-logo {
  height: 65vh;
}
.home {
  text-align: center;
  /* // esto tengo que cambiar para que se aline a la izquierda */
}

/* Media Query for Mobile Devices */
@media (max-width: 768px) {
  .home-logo {
    width: auto;
  }
  .img-logo {
    height: 35vh;
  }
}
</style>
