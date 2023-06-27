<template>
  <div>
    <h3>Casas</h3>
   <li class="lista" v-for="casa in casas" :key="casa['.key']">
      <router-link
        tag="li"
        :to="{ name: 'UsuarioLista', params: { id2: casa.numero }}"
        class="item-lista">
        <b>Casa :</b> {{ casa.numero }}
      </router-link>
    </li>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  props: [
    "id",
    ],
  data() {
    return {
      casas: []
    };
  },
  firestore() {
    return {
      casas: db.collection("morador").doc(this.id).collection("casa"),
      //.orderBy("casa","asc")
    };
  }
};
</script>

<style>
</style>