<template>
  <div class="usuario-lista">
    <h3>Lista de Moradores</h3>
    <!-- buscando usuarios do banco de dados no firebase firestore-->     
    <li class="lista" v-for="morador in moradores" :key="morador['.key']">
      <router-link
        tag="li"
        :to="{ name: 'usuario', params: { id: morador['.key'] } }"
        class="item-lista"
      >
        {{ morador.nome }} {{ morador.sobrenome }}
      </router-link>
    </li>
    <!--<table >
      <tr>
        <th>NOME</th>
        <th>ALDEIA</th>
      </tr>
      <tr class="lista" v-for="user in users" :key="user['.key']">
        <router-link
          tag="td"
          :to="{ name: 'usuario', params: { id: user['.key'] } }"
          class="item-lista"
        >
          <td>{{ user.nome }} {{ user.sobrenome }}</td>
          <td>{{ user.aldeia }}</td>
        </router-link>
      </tr>
    </table>-->
  </div>
</template>

<script>
import { db } from "../../firebase";

export default {
  firestore() {
    return {
      moradores: db.collection("morador").orderBy("nome", "asc")
    };
  },
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