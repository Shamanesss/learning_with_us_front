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
            <div class="card-footer">
              <router-link :to="`/lecciones/${curso.id}`"
                ><button>Entrar</button></router-link
              >
            </div>
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
</template>

<script setup>
// // -----------esto es el get de todos los cursos hecho desde el front sin back funciona con la api-------------------
// import { ref, onMounted } from "vue";

// import axios from "axios";

// const cursos = ref();

// const ApiUrl = "https://xzojqmxyrvvgxzoiwfcl.supabase.co/rest/v1";
// const apikey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6b2pxbXh5cnZ2Z3h6b2l3ZmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3OTY2NzksImV4cCI6MjAwNDM3MjY3OX0.PKAup3OZhN8-BUibWOXdG2ruSsM6ss1MzzO_c2ut5mg";
// const autorizacion =
//   "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6b2pxbXh5cnZ2Z3h6b2l3ZmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3OTY2NzksImV4cCI6MjAwNDM3MjY3OX0.PKAup3OZhN8-BUibWOXdG2ruSsM6ss1MzzO_c2ut5mg";
//const ApiUrl = VUE_APP_API_URL;
//const autorizacion = VUE_APP_AUTORIZACION;
//const apikey = VUE_APP_API_KEY;

// async function getCursos() {
//   try {
//     const response = await axios.get(`${ApiUrl}/cursos?select=*`, {
//       headers: {
//         apikey: apikey,
//         Authorization: autorizacion,
//       },
//     }); // Cambia la URL de la API según tu configuración
//     cursos.value = await response.data;
//     console.log("****************", cursos.value);
//   } catch (error) {
//     console.error(error);
//   }
// }
// onMounted(() => {
//   getCursos();
// });
// --------------------------esto funcion con la api-----------------------------
import axios from "axios";
import { ref } from "vue";
const cursos = ref();
async function getCursos() {
  try {
    let response = await axios.get("http://127.0.0.1:5000/cursos");
    cursos.value = await response.data;
    console.log(cursos.value);
  } catch (error) {
    console.log(error);
  }
  return cursos;
}

getCursos();
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
  padding: 0.5rem;
  font-size: 1.5rem;
  width: 75%;
  border-radius: 1rem;
}
button:hover {
  opacity: 0.7;
  background-color: #3e5e84;
  color: white;
  padding: 0.5rem;
}

.card-titles {
  background-color: #3e5e84;
  margin: 0;
  color: white;
  border-radius: 0.3rem;
  padding: 2rem;
}
.card-body,
.card-footer {
  background-color: rgb(254, 239, 220);
}
</style>
