<template>
  <div class="ListaMoradores">
      <li v-for="user in users" class="user" :key="user['.key']">
          <h3 id="morador">{{ user.nome }} {{ user.sobrenome }}</h3>
      </li>    
  </div>
</template>

<script>
import { db } from "../firebase"
export default {
    firestore() {
    return {
      users: db.collection("users"),
        };
    },
    methods:{}
}
</script>

<style>

</style>