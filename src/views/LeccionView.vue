<template>
  <div class="leccion">
    <h1>{{ leccion.titulo }}</h1>
  </div>
  <div v-if="leccion.contenido">
    <ul class="text-left list-unstyled">
      <li
        class="text-left"
        v-for="item in leccion.contenido.split(';')"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>

  <button @click="$router.push('/')">Volver a la lista de lecciones</button>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const leccion = ref({});
const route = useRoute();
const idleccion = route.params.idleccion;

async function getLeccion() {
  try {
    let response = await axios.get(
      `http://127.0.0.1:5000/leccion/${idleccion}`
    );
    leccion.value = await response.data;
  } catch (error) {
    console.log(error);
  }
}

getLeccion();
</script>

<style scoped></style>
