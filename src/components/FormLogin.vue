<template>
  <div class="wrapper">
    <div class="form-wrapper sign-up">
      <h2>Registro</h2>

      <div class="input-group">
        <input type="name" required name="name" v-model="name" />
        <label for="name">Name</label>
      </div>
      <div class="input-group">
        <input type="email" required name="Email" v-model="email" />
        <label for="email">Correo</label>
      </div>
      <div class="input-group">
        <input type="password" required name="Password" v-model="password" />
        <label for="password">Contraseña</label>
      </div>
      <button class="btn">Sign Up</button>
      <button @click="createAccount" class="btn">Create</button>
      <button @click="login" class="btn">login</button>
      <button @click="seeCurrentUser" class="btn">See user</button>
      <button @click="logout" type="submit" class="btn">logout</button>
      <div class="sign-link">
        <p>
          Ya tienes cuenta <router-link to="/register">Sign In</router-link>
        </p>
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
let name = ref("");

//Create account

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
  }
}
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
  }
}
//seeCurrentUser
async function seeCurrentUser() {
  const localUser = await supabase.auth.getSession();
  console.log(localUser);
}
//logout
async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  } else {
    console.log("Logout has been successfull");
  }
}

// async function getCursos() {
//   try {
//     const response = await axios.get(`${ApiUrl}/cursos?select=*`, {
//       headers: {
//         apikey: apikey,
//         Authorization: autorizacion,
//       },
//     }); // Cambia la URL de la API según tu configuración
//     cursos.value = await response.data;
//     console.log("****************", cursos.value);
//   } catch (error) {
//     console.error(error);
//   }
// }
// onMounted(() => {
//   getUsers();
// });
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.form-wrapper {
  width: 400px;
  background-image: url(../assets/bg_degradado.png);
  background-position: center;
  background-size: cover;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.input-group input {
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.input-group label {
  margin-bottom: 5px;
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
  color: forestgreen;
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
</style>
