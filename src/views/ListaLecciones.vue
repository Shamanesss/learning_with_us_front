<template>
  <div>
    <h1>Lista de lecciones</h1>
    <ul>
      <li v-for="leccion in lecciones" :key="leccion.id">
        <router-link :to="'/leccion/' + leccion.id">{{
          leccion.titulo
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lecciones: [
        { id: 1, titulo: "Lección 1" },
        { id: 2, titulo: "Lección 2" },
        { id: 3, titulo: "Lección 3" },
      ],
    };
  },
};
</script>
