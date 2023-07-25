<template>
  <div class="about">
    <h1>This is protected content</h1>
    <template
      v-if="
        account &&
        account.data &&
        account.data.session &&
        account.data.session.user
      "
    >
      <p id="account">Account: {{ account.data.session.user.email }}</p>
    </template>
    <template v-else>
      <p>Loading account information...</p>
    </template>
    <p>Protect the secret password: **TMX$$</p>
  </div>
</template>

<script setup>
import { supabase } from "../Clients/supabase";
import { ref } from "vue";

const account = ref();
getSession();

async function getSession() {
  account.value = await supabase.auth.getSession();
  console.log(account.value);
}
</script>
