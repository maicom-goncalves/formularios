<template>
  <div>
    <h1>Visitas </h1>
    <h3>Lista de Visitas</h3>
    <li class="lista" v-for="user in users" :key="user['.key']">
      <router-link
        tag="li"
        :to="{ name: 'visita', params: { id: user['.key'] } }"
        class="item-lista"
      >
        {{ user.nome }} {{ user.sobrenome }}
      </router-link>
    </li>  
  </div>
</template>

<script>
import { db } from "../../firebase";

export default {
  firestore() {
    return {
      users: db.collection("users"),
    };
  },
};
</script>

<style>
.lista {
  list-style: none;
  padding: 0px;
  border: 3px solid #db4c40;
  background-color: #db4c40;
  box-shadow: 1px 1px #c2928e, 2px 2px #775450, 1px 1px #965049;
  border-radius: 8px;
  overflow: hidden;
  font-size: 23px;
  margin-bottom: 4px;
  color:#e9dfdfe7;
}
.lista .item-lista {
  padding: 17px 27px;
  cursor: pointer;
}
.lista .item-lista:hover {
  background-color: #db4c40;
  color: #13110c;
}
.lista .item-lista:nth-child(n + 2) {
  border-top: 1px solid #faf0ca;
}
</style>