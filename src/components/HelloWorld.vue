<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="curso in cursos" :key="curso.id">
          <div class="card justify-t border-info mb-3">
            <div class="card-body">
              <h4 class="card-title text-center">{{ curso.titulo }}</h4>
              <p class="card-text text-center">
                {{ curso.descripcion }}
              </p>
              <ol class="text-left">
                <li
                  class="text-left"
                  v-for="item in curso.contenido.split(';')"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ol>
            </div>

            <button href="#" class="btn btn-primary">Entrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ul>
    <li v-for="curso in cursos" :key="curso.id">
      {{ curso.titulo }}
    </li>
  </ul>
  <p>
    For a guide and recipes on how to configure / customize this project,<br />
    check out the
    <a href="../assets/logo_br.jpg" target="_blank" rel="noopener"
      >vue-cli documentation</a
    >.
  </p>
  <h3>Installed CLI Plugins</h3>
  <ul>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
        target="_blank"
        rel="noopener"
        >babel</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
        target="_blank"
        rel="noopener"
        >router</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
        target="_blank"
        rel="noopener"
        >eslint</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
        target="_blank"
        rel="noopener"
        >unit-jest</a
      >
    </li>
  </ul>
  <h3>Essential Links</h3>
  <ul>
    <li>
      <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
    </li>
    <li>
      <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
    </li>
    <li>
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
        >Community Chat</a
      >
    </li>
    <li>
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
        >Twitter</a
      >
    </li>
    <li>
      <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
    </li>
  </ul>
  <h3>Ecosystem</h3>
  <ul>
    <li>
      <a href="https://router.vuejs.org" target="_blank" rel="noopener"
        >vue-router</a
      >
    </li>
    <li>
      <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-devtools#vue-devtools"
        target="_blank"
        rel="noopener"
        >vue-devtools</a
      >
    </li>
    <li>
      <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
        >vue-loader</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener"
        >awesome-vue</a
      >
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient.js";

const cursos = ref([]);

async function getCursos() {
  const { data } = await supabase.from("cursos").select();
  cursos.value = data;
}

onMounted(() => {
  getCursos();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body {
  height: 20rem;
}

a {
  color: #42b983;
}
</style>
