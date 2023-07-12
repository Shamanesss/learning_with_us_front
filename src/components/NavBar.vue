<template>
  <nav class="navbar-expand-lg color_bg" id="color_item">
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active color_item" aria-current="page" href="/"
            >HOME</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link color_item" href="/login">LOGIN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link color_item" href="/about">ABOUT</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup></script>
<style scoped>
.nav .nav {
  display: flex;
  justify-content: center;
  color: aliceblue;
}
.color_bg {
  background-color: #3e5e84;
}
#color_item .color_item {
  color: white;
}
</style>
