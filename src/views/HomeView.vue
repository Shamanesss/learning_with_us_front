<template>
  <div class="home">
    <h1>"Aprende a programar facilmente"</h1>
    <div class="home-logo">
      <img alt="Vue logo" class="img-logo" src="../assets/logo_ok.png" />
    </div>
    <h2>Lenguajes de Programación</h2>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
</script>
<style scope>
h1 {
  padding: 2%;
}
.home-logo {
  background-image: url(../assets/bg_degradado.png);
  background-size: cover;
  background-position: center;
  width: 60rem;
  margin: auto;
  border-radius: 1.2rem;
}
.img-logo {
  height: 65vh;
}
.home {
  text-align: center;
  /* // esto tengo que cambiar para que se aline a la izquierda */
}
.home-logo {
  margin-bottom: 0.6rem;
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
