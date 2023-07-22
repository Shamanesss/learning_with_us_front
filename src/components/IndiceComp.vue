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
  background-color: bisque;
  background-image: url("../assets/alargado.png");
}
img {
  height: 100%;
  max-width: 100%;
}
h2 {
  text-align: center;
  padding: 1rem;
}
@media (max-width: 767px) {
  .left-column {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    flex-wrap: wrap;
  }

  .left-column {
    flex: 1.5;
    display: flex;
    align-items: center;
  }

  .right-column {
    flex: 2;
    margin-left: 1rem;
  }

  img {
    display: block;
    width: 100%;
    height: 100vh;
  }
}
</style>
