<template>
  <nav class="navbar navbar-expand-lg color_bg" id="color_item">
    <div class="container">
      <div>
        <!-- Logo -->
        <a class="navbar-brand" href="#">
          <img
            src="../assets/log_navbar_white.png"
            alt=""
            class="imagen-logo"
          />
        </a>
        <div id="user-info">
          <p
            v-if="
              account &&
              account.data &&
              account.data.session &&
              account.data.session.user
            "
          >
            {{ account.data.session.user.user_metadata.full_name }}
          </p>

          <p v-else></p>
        </div>
        <div>
          <button class="btn_color" @click="logout">Cerrar sesión</button>
        </div>
      </div>
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
          <a class="nav-link color_item" href="/secret">secret</a>
        </li>
        <li class="nav-item">
          <a class="nav-link color_item" href="/course">CURSOS</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { supabase } from "@/Clients/supabase";
import { ref } from "vue";

const account = ref();
getSession();

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  } else {
    console.log("cerrado sesion satisfactoriamente");
    window.location.reload();
  }
}
async function getSession() {
  account.value = await supabase.auth.getSession();
  console.log(account.value);
}
</script>
<style scoped>
.color_bg {
  background-color: #3e5e84;
}
#user-info {
  color: white;
}
#color_item .color_item {
  color: white;
}

.imagen-logo {
  width: 5rem;
}
.btn_color {
  background: #848d68;
  color: white;
  padding: 0.5rem;
  font-size: 0.8rem;

  border-radius: 1rem;
}
</style>
