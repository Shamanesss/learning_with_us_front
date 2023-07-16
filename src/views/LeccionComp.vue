<template>
  <div>
    <h1>{{ leccion.titulo }}</h1>
    <p>{{ leccion.contenido }}</p>
    <button @click="$router.push('/')">Volver a la lista de lecciones</button>
  </div>
</template>

<script>
export default {
  props: ["leccion"],
  created() {
    // Aquí podrías cargar los datos de la lección utilizando su ID, por ejemplo, haciendo una petición a tu API
  },
};
</script>
