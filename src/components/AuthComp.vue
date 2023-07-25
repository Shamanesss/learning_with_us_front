<template>
  <div class="my-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <div class="card-header">
              <h2 class="card-title">Registro</h2>
            </div>

            <div class="card-body">
              <div class="form-group text-start mb3">
                <label class="form-label" for="name"> Nombre </label>
                <input
                  class="form-control w-100 mx-auto"
                  name="name"
                  type="text"
                  v-model="name"
                  required
                />
              </div>
              <div class="form-group text-start mb-3">
                <label class="form-label" for="email"> Email </label>
                <input
                  class="form-control w-100 mx-auto"
                  name="email"
                  type="text"
                  v-model="email"
                  required
                />
              </div>

              <div class="form-group text-start mb-3">
                <label class="form-label" for="password"> Password </label>
                <input
                  class="form-control w-100 mx-auto"
                  name="password"
                  type="password"
                  v-model="password"
                  required
                />
              </div>
              <button @click="createAccount" class="btn">Crear Cuenta</button>
              <p id="usuario_creado"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { supabase } from "../Clients/supabase.js";

let email = ref("");
let password = ref("");
let name = ref("");
async function createAccount() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        full_name: name.value,
      },
    },
  });
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    alert("usuario creado");
    // Reiniciar los campos de entrada.
    name.value = "";
    email.value = "";
    password.value = "";
  }
}
</script>
<style>
.card {
  background-image: url(../assets/bg_degradado.png);
  background-position: center;
  background-size: cover;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
}
.btn {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: #3e5e84;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  outline: none;
}
.btn:hover {
  background: #79aadb;
}
h2 {
  font-size: 2rem;
  color: #555;
  text-align: center;
}
</style>
