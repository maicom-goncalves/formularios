<template>
  <div>
    <img class="icones" src="../../img/home03.png" alt="casa" />
    <h2><b>Agente:</b>{{ agentes.nome }}</h2>
    <h2>{{agentes.aldeia}}</h2>
    <h2>Lista de Casas</h2>
    <li class="lista">
      <router-link
        tag="li"
        :to="{ name: 'moradores', params: { id2: agentes.casa1 } }"
        class="item-lista"
      > 
          <b>{{ agentes.casa1 }}</b>  
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'moradores', params: { id2: agentes.casa2 } }"
        class="item-lista"
      >
        <b>{{ agentes.casa2 }}</b>
      </router-link>
    </li>
  </div>
</template>
<script>
import { db } from "../../firebase";
export default {
  props: ["id"],
  firestore() {
    return {
      agentes: db.collection("agentes").doc(this.id),
    };
  }
};
</script>

<style>
</style>