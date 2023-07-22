<template>
  <div class="container">
    <div class="image-container">
      <img src="../assets/bg_degradado.png" alt="Imagen alargada" />
    </div>
    <div class="content-container">
      <h1>Título principal</h1>
      <h2>Subtítulo</h2>
      <p>Texto descriptivo aquí</p>
    </div>
  </div>
</template>
<style>
.container {
  display: flex;
  height: 100vh;
}

.image-container {
  flex: 1;
}

.image-container img {
  width: 100%;
  height: auto;
}

.content-container {
  flex: 1;
  padding: 20px;
}
</style>
