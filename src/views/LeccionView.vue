<template>
  <div class="container">
    <div class="left-column">
      <img src="ruta-a-tu-imagen" alt="Foto" class="photo" />
    </div>
    <div class="right-column">
      <h1>Título</h1>
      <p>Párrafo</p>
    </div>
  </div>

  <div>
    <h1></h1>
    <p></p>
    <button @click="$router.push('/')">Volver a la lista de lecciones</button>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.left-column {
  flex: 1;
}

.photo {
  width: 33.33%;
}

.right-column {
  flex: 2;
}
</style>
