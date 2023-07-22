<template>
  <nav class="navbar navbar-expand-lg color_bg" id="color_item">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="../assets/log_navbar_white.png" alt="" class="imagen-logo" />
      </a>

      <!-- Lista de enlaces -->
      <ul class="navbar-nav justify-content-md-start justify-content-center">
        <li class="nav-item">
          <a class="nav-link active color_item" aria-current="page" href="/"
            >HOME</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link color_item" href="/login">LOGIN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link color_item" href="/course">CURSOS</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup></script>
<style scoped>
.color_bg {
  background-color: #3e5e84;
}
#color_item .color_item {
  color: white;
}

.imagen-logo {
  width: 5rem;
}
</style>
