<template>
  <div>
    <h2 v-if="indices.length > 0">{{ indices[0].titulo }}</h2>
    <div v-for="indice in indices" :key="indice.idlecciones">
      <ul>
        <li>{{ indice.listado }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { ref } from "vue";
const indices = ref([]);

const route = useRoute();
const idlecciones = route.params.idlecciones;

async function getLecciones() {
  try {
    let response = await axios.get(
      `http://127.0.0.1:5000/lecciones/${idlecciones}`
    );
    indices.value = await response.data;
    console.log(indices.value);
  } catch (error) {
    console.log(error);
  }
  return indices.value;
}

getLecciones();
</script>
<style scoped></style>
