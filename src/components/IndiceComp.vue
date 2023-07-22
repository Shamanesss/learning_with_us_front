<template>
  <div class="container">
    <div class="left-column">
      <img src="../assets/Diseno.png" alt="" />
    </div>
    <div class="right-column">
      <h2 v-if="indices.length > 0">{{ indices[0].titulo }}</h2>
      <div v-for="indice in indices" :key="indice.idlecciones">
        <ul>
          <a :href="`/leccion/${indice.idlecciones}`"
            ><li>
              {{ indice.listado }}
            </li></a
          >
        </ul>
      </div>
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
<style scoped>
.container {
  display: flex;
  flex-direction: rox;
  margin-left: 0;
  padding-left: 0;
  min-height: 100vh;
}
.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.right-column {
  flex: 2;
  margin-left: 1rem;
}
img {
  height: 100%; /* Asegurar que la imagen ocupe todo el espacio dentro de la columna izquierda */
  /* La imagen ocupará todo el ancho de la columna izquierda */
}
h2 {
  text-align: center;
  padding: 1rem;
}
/* Media queries para ajustar estilos en diferentes tamaños de pantalla */
@media screen and (max-width: 767px) {
  .container {
    flex-direction: column;
  }

  .left-column {
    background-image: none;
  }
}

@media screen and (min-width: 1024px) {
  img {
    max-width: 100%;
  }
}
</style>
