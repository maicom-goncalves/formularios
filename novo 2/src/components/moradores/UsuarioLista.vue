<template>
  <div class="usuario-lista">
    <h3>Lista de Moradores</h3>
    <li class="lista" v-for="morador in moradores" :key="morador['.key']">
      <router-link tag="li" :to="{ name: 'usuarioDetalhe',
       params: { id3: morador['.key']} }" class="item-lista">
       <b> {{ morador.nome }} {{ morador.sobrenome}} </b> 
      </router-link>
    </li>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  props: [
    "id",
    "id2"
    ],
  data() {
    return {
      moradores:[],
    };
  },
   firestore() {
    return {
      moradores: db.collection("morador").doc(this.id).collection("moradores").where("casa","==",this.id2)
    };
  }
};
</script>

<style>
#usuarios {
  padding: 0;
  margin: 0;
  border: none;
}

.lista {
  list-style: none;
  padding: 0px;
  border: 3px solid #db4c40;
  border-radius: 8px;
  overflow: hidden;
  font-size: 23px;
  margin-bottom: 4px;
}

.lista .item-lista {
  padding: 17px 27px;
  cursor: pointer;
}

.lista .item-lista:hover {
  background-color: #db4c40;
  color: #faf0ca;
}

.lista .item-lista:nth-child(n + 2) {
  border-top: 1px solid #faf0ca;
}
</style>