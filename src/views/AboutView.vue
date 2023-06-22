<template>
  <div>
    <h1>Formularios</h1>
    <div class="container">
      <FormLecciones />
      <FormCursos />
    </div>
  </div>
</template>

<script setup>
import FormCursos from "@/components/Formularios/FormCursos.vue";
import FormLecciones from "../components/Formularios/FormLecciones.vue";
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
