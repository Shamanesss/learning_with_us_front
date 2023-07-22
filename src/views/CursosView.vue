<template>
  <div class="home">
    <h1>Empieza a aprender a programar a tu ritmo con los siguiente cursos</h1>

    <div>
      <CursosComp />
    </div>
  </div>
</template>
<script setup>
import CursosComp from "@/components/CursosComp.vue";
</script>
<style scope>
h1 {
  padding: 2%;
  text-align: center;
}

.home {
  text-align: center;
}
</style>
