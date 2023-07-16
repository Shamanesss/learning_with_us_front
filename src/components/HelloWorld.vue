<template>
  <div class="hello">
    <div class="container">
      <div class="row card-deck">
        <div class="col-md-4 card-row" v-for="curso in cursos" :key="curso.id">
          <div class="card equal-height-card">
            <h4 class="card-titles text-center">{{ curso.titulo }}</h4>
            <div class="card-body">
              <div class="description">
                <p class="card-text text-center">
                  {{ curso.descripcion }}
                </p>
                <hr />
              </div>
              <ul class="text-left list-unstyled">
                <li
                  class="text-left"
                  v-for="item in curso.contenido.split(';')"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>

            <button href="#" class="btn">Entrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ----------------------------------------------------------------------------------- -->

  <!-- ------------------------------------------------------------------------------------------------------------- -->

  <ul>
    <li v-for="curso in cursos" :key="curso.id">
      {{ curso.titulo }}
    </li>
  </ul>
  <p>
    For a guide and recipes on how to configure / customize this project,<br />
    check out the
    <a href="../assets/logo_br.jpg" target="_blank" rel="noopener"
      >vue-cli documentation</a
    >.
  </p>
  <h3>Installed CLI Plugins</h3>
  <ul>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
        target="_blank"
        rel="noopener"
        >babel</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
        target="_blank"
        rel="noopener"
        >router</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
        target="_blank"
        rel="noopener"
        >eslint</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
        target="_blank"
        rel="noopener"
        >unit-jest</a
      >
    </li>
  </ul>
  <h3>Essential Links</h3>
  <ul>
    <li>
      <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
    </li>
    <li>
      <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
    </li>
    <li>
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
        >Community Chat</a
      >
    </li>
    <li>
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
        >Twitter</a
      >
    </li>
    <li>
      <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
    </li>
  </ul>
  <h3>Ecosystem</h3>
  <ul>
    <li>
      <a href="https://router.vuejs.org" target="_blank" rel="noopener"
        >vue-router</a
      >
    </li>
    <li>
      <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-devtools#vue-devtools"
        target="_blank"
        rel="noopener"
        >vue-devtools</a
      >
    </li>
    <li>
      <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
        >vue-loader</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener"
        >awesome-vue</a
      >
    </li>
  </ul>
</template>

<script setup>
// -----------esto es el get de todos los cursos hecho desde el front sin back
import { ref, onMounted } from "vue";

import axios from "axios";

const cursos = ref();

const ApiUrl = "https://xzojqmxyrvvgxzoiwfcl.supabase.co/rest/v1";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6b2pxbXh5cnZ2Z3h6b2l3ZmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3OTY2NzksImV4cCI6MjAwNDM3MjY3OX0.PKAup3OZhN8-BUibWOXdG2ruSsM6ss1MzzO_c2ut5mg";
const autorizacion =
  "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6b2pxbXh5cnZ2Z3h6b2l3ZmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3OTY2NzksImV4cCI6MjAwNDM3MjY3OX0.PKAup3OZhN8-BUibWOXdG2ruSsM6ss1MzzO_c2ut5mg";
//const ApiUrl = VUE_APP_API_URL;
//const autorizacion = VUE_APP_AUTORIZACION;
//const apikey = VUE_APP_API_KEY;
console.log(process.env.VUE_APP_API_URL);

async function getCursos() {
  try {
    const response = await axios.get(`${ApiUrl}/cursos?select=*`, {
      headers: {
        apikey: apikey,
        Authorization: autorizacion,
      },
    }); // Cambia la URL de la API según tu configuración
    cursos.value = response.data;
    console.log("****************", cursos.value);
  } catch (error) {
    console.error(error);
  }
}
// async function getCursos() {
//   try {
//     const response = await axios.get(`http://127.0.0.1:5000/cursos?select=*`); // Cambia la URL de la API según tu configuración
//     cursos.value = response.data;
//     console.log("****************", cursos.value);
//   } catch (error) {
//     console.error(error);
//   }
// }

onMounted(() => {
  getCursos();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
 .card-body {
  height: 20rem;
} */
.equal-height-card {
  height: 99%;
  border-color: #848d68;
  margin-bottom: 1.2rem;
}

button {
  background: #848d68;
  color: white;
}
button:hover {
  opacity: 0.7;
  background: #3e5e84;
  color: white;
}

a {
  color: #42b983;
}
.card-titles {
  background-color: #3e5e84;
  margin: 0;
  color: white;
  border-radius: 0.3rem;
}
.card-body {
  background-color: rgb(254, 239, 220);
}
</style>
