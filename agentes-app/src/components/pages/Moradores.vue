<template>
  <div>
    <img class="icones" src="../../img/people02.png" alt="morador" />
    <h2>{{agentes.aldeia}}</h2>
    <h2>Pessoas da casa:{{this.id2}}</h2>
    <li class="lista" v-for="moradores in moradores" :key="moradores['.key']">
      <router-link
        tag="li"
        :to="{ name: 'agenda', params: { id3: moradores['.key'] } }"
        class="item-lista"
      >
        <b>{{ moradores.nome }}</b>   
      </router-link>
    </li>
  </div>
</template>

<script>
import {db} from '../../firebase'
export default {
  props: ["id","id2"],
  data() {
      return {
        //aldeia:this.agentes.aldeia
      }
      },
  firestore() {
    return {
      agentes:db.collection("agentes").doc(this.id),
      moradores: db.collection("morador").doc("Bananal").collection("moradores").where("casa", "==", this.id2)
      //.orderBy("casa")
    };
  }/*,
  created() {
    console.log(this.id2);
    console.log(this.id);
    console.log(this.moradores);
  }*/
};
</script>

<style>
</style>