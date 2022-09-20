<template>
  <div>
    <h1>Visitas </h1>
    <h3>Lista de Visitas</h3>
    <li class="lista" v-for="morador in moradors" :key="morador['.key']">
      <router-link
        tag="li"
        :to="{ name: 'agenda', params: { id: morador['.key'] } }"
        class="item-lista"
      >
        {{ morador.nome }} {{ morador.sobrenome }}
      </router-link>
    </li>  
  </div>
</template>

<script>
import { db } from "../../firebase";

export default {
  firestore() {
    return {
      moradors: db.collection("morador").orderBy("nome", "asc")
    };
  },
};
</script>

<style>
.lista {
  list-style: none;
  padding: 0px;
  border: 3px solid #006e90;
  background-color: #006e90;
  box-shadow: 1px 1px #7e6e6c, 0.5px 0.5px #868281, 1px 1px #0896a8;
  border-radius: 8px;
  overflow: hidden;
  font-size: 17px;
  margin-bottom: 4px;
  color:#e9dfdfe7;
}
.lista .item-lista {
  padding: 17px 27px;
  cursor: pointer;
}
.lista .item-lista:hover {
  background-color: #d7263d;
  color: #13110c;
}
.lista .item-lista:nth-child(n + 2) {
  border-top: 1px solid #faf0ca;
}
</style>