<template>
  <form class="row flex-center flex" @submit.prevent="handleRegistration">
    <div class="col-6 form-widget">
      <h1 class="header">REGISTRO</h1>
      <p class="description">Revise su correo para autorizar el registro</p>
      <div>
        <input
          class="inputField"
          required
          type="email"
          placeholder="Your email"
          v-model="email"
        />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Send magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";

const email = ref("");
const loading = ref(false);

const handleRegistration = async () => {
  try {
    loading.value = true;
    const response = await axios.post("http://127.0.0.1:5000/register", {
      email: email.value,
    });
    const data = response.data;
    if (data.success) {
      alert("Revise su correo para autorizar el registro.");
    } else {
      throw new Error("Hubo un error en el registro.");
    }
  } catch (error) {
    console.error("Error de registro:", error.message);
  } finally {
    loading.value = false;
  }
};
</script>
