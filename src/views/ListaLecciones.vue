<template>
  <div class="container">
    <div class="left-column"></div>
    <div class="right-column">
      <h2 v-if="indices.length > 0">{{ indices[0].titulo }}</h2>
      <div v-for="indice in indices" :key="indice.idlecciones">
        <ul>
          <li>{{ indice.listado }}</li>
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
  flex-direction: row;
  margin-left: 0;
  padding-left: 0;
}

.left-column {
  flex: 1;
  background-image: url(../assets/Diseno.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.right-column {
  flex: 2;
  margin-left: 1rem;
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

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .left-column {
    height: auto;
    background-position: center;
    padding: 2.52rem;
  }
}

@media screen and (min-width: 1024px) {
  .left-column {
    background-size: contain;
    background-repeat: no-repeat;

    margin: 0;
  }
}
</style>
