<template>
    <div class="container">
      <div class="left-column">
        <img src="../assets/Diseno.png" alt="imagen lateral" />
      </div>
      <div class="right-column">
        <div class="leccion">
          <h1 class="leccion_h1">{{ leccion.titulo }}</h1>
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
          <br />
        </div>
        <button id="button" @click="$router.go(-1)">
          Volver a la lista de lecciones
        </button>
      </div>
    </div>
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
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: rox;
    margin-left: 0;
    padding-left: 0;
    min-height: 100vh;
    min-width: 100vw;
  }
  
  .left-column {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .right-column {
    flex: 2;
    margin: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-align: justify;
  }
  .leccion {
    width: 100%;
  }
  
  img {
    height: 100%;
    max-width: 100%;
  }
  #button {
    background: #848d68;
    color: white;
    padding: 0.5rem;
    font-size: 1.5rem;
    width: 50%;
    border-radius: 1rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  #button:hover {
    opacity: 0.7;
    background-color: #3e5e84;
    color: white;
    padding: 0.5rem;
  }
  @media (max-width: 767px) {
    .left-column {
      display: none;
    }
    .right-column {
      margin: 0.5rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .container {
      flex-wrap: wrap;
    }
  
    .left-column {
      flex: 1;
      display: none;
      align-items: center;
    }
  
    .right-column {
      flex: 2;
      font-size: 1.5rem;
    }
  
    img {
      width: 100%;
      height: 100vh;
    }
  }
  </style>