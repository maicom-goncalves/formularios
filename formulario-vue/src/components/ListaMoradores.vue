<template>
  <div class="ListaMoradores">
    <li v-for="user in users" class="usuarios" :key="user['.key']">
      <button class="moradores">
        <router-link
          :to="{
            name: 'usuarioDetalhe',
            params: { id: $route.params.id },
            query: { completo: true, lingua: 'pt' },
            hash: '#rodape',
          }"
        >
          <h3 id="morador">{{ user.nome }} {{ user.sobrenome }}</h3>
        </router-link>
      </button>
    </li>
    <div>
      <component :is="componentes" />
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import Busca from "./Busca.vue";
export default {
  props: ["id"],
  components: { Busca },
  firestore() {
    return {
      users: db.collection("users"),
    };
  },
  methods: {},
  data() {
    return {
      componentes: "Busca",
    };
  },
};
</script>

<style>
.ListaMoradores{
  padding: 0;
}
.usuarios {
  margin: 2px;
  display: block;
  width: 90%;
}
.moradores {
  background-color: rgb(0, 183, 255);
  color: whitesmoke;
  font-size: 40px;
  cursor: pointer;
}
</style>