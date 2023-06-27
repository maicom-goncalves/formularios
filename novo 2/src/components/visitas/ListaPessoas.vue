<template>
  <div id="moradoresDiarias">
    <p>{{ this.casaNumero }}</p>
    <p> numero de la casa:{{this.numeroCasa}}</p>
    <div @click="diasVisita(morador.nome)">
      <li class="visita"  v-for="morador in moradores" :key="morador.key" >
      {{ morador.nome }} {{ morador.sobrenome }}
    </li>
    </div>
  </div>
</template>

<script>
//import { db } from "../../firebase";

export default {
  props: ["casaNumero","numeroCasa"],
  data() {
    return {
      moradores: [],
    };
  },
  created() {
    /*EventBus.$on("residencia", (casaNumero) => {
      this.casaNumero = casaNumero;
      this.moradores = [];
      var numeros = [];
      console.log(this.casaNumero);
      //receber documento do firebase
      var docRef = db
        .collection("morador")
        .doc("Água Clara")
        .collection("moradores")
        .where("casa", "==",this.casaNumero)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.moradores.push((numeros = (doc.id, " => ", doc.data())));
            console.log(this.moradores);
          });
        });
    });
    */
  }
};
</script>

<style scoped>
#moradoresDiarias {
  display: flex;
  width: 40%;
  height: 80%;
  flex-direction: column;
  background-color: #8af88fe1;
}
.visita {
  list-style: none;
  padding: 10px;
  background-color: #85c7f2;
  border-radius: 8px;
  font-size: 23px;
  margin: 7px;
  width: 30%;
  height: 24%;
  display: inline-block;
}

.visita .item-visita {
  padding: 1px 1px;
  cursor: pointer;
  width: 97%;
  height: 96%;
}
.visita .item-visita:hover {
  background-color: #08415C;
  color: #faf0ca;
}
.visita .item-visita:nth-child(n + 2) {
  border-top: 1px solid #faf0ca;
}
</style>