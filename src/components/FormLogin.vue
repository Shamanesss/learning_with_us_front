<template>
  <div class="my-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">LOGIN</h3>
            </div>

            <div class="card-body">
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
              <button @click="login" class="btn">Iniciar Session</button>
              <div class="sign-link">
                <p>
                  Si no tienes cuenta
                  <router-link to="/register" class="registrate"
                    >Registrate</router-link
                  >
                </p>
              </div>
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
import { supabase } from "../Clients/supabase";

//connect inputs
let email = ref("");
let password = ref("");

//login
async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    email.value = "";
    password.value = "";
    window.location.reload();
  }
}
</script>
<style scoped>
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
.sign-link a {
  color: rgb(254, 254, 254);
}

.sign-link a:hover {
  text-decoration: underline;
}
.sign-link {
  margin-top: 10px;
  text-align: center;
}

.sign-link p {
  margin-bottom: 0;
}
h2 {
  font-size: 2rem;
  color: #555;
  text-align: center;
}
.btn:active {
  background-color: #2773d0;
  color: white;
}
.registrate {
  color: antiquewhite;
}
</style>
