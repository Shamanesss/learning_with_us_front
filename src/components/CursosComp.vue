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
                ><button class="button">Entrar</button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
.hello {
  margin-bottom: 2rem;
}
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
