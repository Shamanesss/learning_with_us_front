<template>
  <div class="wrapper">
    <div class="form-wrapper sign-up">
      <form action="/register" method="POST" @submit="handleSubmit">
        <h2>Registro</h2>

        <div class="input-group">
          <input type="email" required name="Email" v-model="email" />
          <label>Correo</label>
        </div>
        <div class="input-group">
          <input type="password" required name="Password" v-model="password" />
          <label>Contraseña</label>
        </div>
        <button type="submit" class="btn">Sign Up</button>
        <div class="sign-link">
          <p>Ya tienes cuenta <router-link to="/login">Sign In</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../lib/supabaseClient"; // Importa el cliente de Supabase desde tu archivo de servicios

const email = ref("");
const password = ref("");

const router = useRouter();

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    // Registra al usuario utilizando Supabase Auth
    const { user, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (error) {
      console.error("Error de registro:", error.message);
      return;
    }

    // Almacena información adicional en la tabla de usuarios
    const { error: dataError } = await supabase.from("users").insert([
      {
        email: email.value,
      },
    ]);

    if (dataError) {
      console.error(
        "Error al guardar información adicional:",
        dataError.message
      );
      return;
    }

    console.log("Usuario registrado:", user);

    // Después de registrar, puedes redirigir al usuario a la página de inicio de sesión
    router.push("/login");
  } catch (e) {
    console.error("Error en el proceso de registro:", e.message);
  }
};
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

  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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

/* .wrapper {
  position: relative;
  width: 400px;
  height: 500px;
} 
/*
.form-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}



.input-group {
  position: relative;
  width: 320px;
  margin: 30px 0;
}

.input-group input {
  width: 100%;
  height: 30px;
  font-size: 16px;
  color: #333;
  padding: 0 10px;
  background: transparent;
  border: 1px solid #333;
  outline: none;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
}



.sign-link {
  font-size: 14px;
  text-align: center;
  margin: 25px 0;
}

.sign-link p {
  color: #333;
}

.sign-link p a {
  color: #e91e63;
  text-decoration: none;
  font-weight: 600;
}

.sign-link p a:hover {
  text-decoration: underline;
} -->*/
</style>
