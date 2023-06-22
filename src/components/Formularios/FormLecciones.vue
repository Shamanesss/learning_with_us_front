<template>
  <div>
    <div class="form-container">
      <form @submit.prevent="submitForm" class="form">
        <h1>Lecciones</h1>
        <div class="form-group">
          <label for="id" class="label">ID:</label>
          <input type="text" id="id" v-model="form.id" class="input" />
        </div>
        <div class="form-group">
          <label for="curso_id" class="label">Curso ID:</label>
          <input
            type="text"
            id="curso_id"
            v-model="form.curso_id"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="titulo" class="label">Título:</label>
          <input
            type="text"
            id="titulo"
            v-model="form.titulo"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="lenguaje" class="label">Lenguaje:</label>
          <input
            type="text"
            id="lenguaje"
            v-model="form.lenguaje"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="ejercicio_path" class="label">Ejemplo:</label>
          <input
            type="text"
            id="ejercicio_path"
            v-model="form.ejercicio_path"
            required
            class="input"
          />
        </div>
        <div>
          <label for="contenido" class="label">Contenido:</label>
          <textarea
            id="contenido"
            v-model="form.contenido"
            required
            class="textarea"
          ></textarea>
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
  ejemplo_path: "",
  contenido: "",
});

const submitForm = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/lesson",
      form.value
    );
    console.log(response.data); // Maneja la respuesta del servidor según tus necesidades
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

.input,
.textarea {
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
