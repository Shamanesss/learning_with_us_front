<template>
  <div>
    <div class="form-container">
      <form @submit.prevent="submitForm" class="form">
        <h1>Cursos</h1>
        <div class="form-group">
          <label for="id" class="label">ID:</label>
          <input type="text" id="id" v-model="form.id" class="input" />
        </div>
        <div class="form-group">
          <label for="titulo" class="label">Curso</label>
          <input
            type="text"
            id="titulo"
            v-model="form.titulo"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="descripcion" class="label">Descripcion</label>
          <input
            type="text"
            id="descripcion"
            v-model="form.descripcion"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="contenido" class="label">Contenido</label>
          <input
            type="text"
            id="contenido"
            v-model="form.contenido"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="nivel" class="label">Nivel</label>
          <input
            type="text"
            id="nivel"
            v-model="form.nivel"
            required
            class="input"
          />
        </div>

        <button type="submit" class="button">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const form = ref({
  id: "",
  curso_id: "",
  titulo: "",
  lenguaje: "",

  contenido: "",
});

const submitForm = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:5000", form.value);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  width: 25rem;
  background-color: #bdb1b1;
  padding: 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.25rem;
}

.label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.input {
  width: 95%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #c7d0ad;
  resize: vertical;
}

.button {
  width: 100%;
  padding: 0.625rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #45a049;
}
</style>
