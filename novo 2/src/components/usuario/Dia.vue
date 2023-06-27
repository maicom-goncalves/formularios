<template>
  <div class="area">
   teste testado
    <form v-on:submit.prevent="addUser" v-if="!enviado" id="newUsers">
      <p><b>Nome do Agente</b></p>
      <select class="opcoes" v-model="newUsers.agente">
        <option
         v-for="agentes in agentes"
        :key="agentes['.key']"
        >
          <b>{{ agentes.nome }}</b>
        </option>
      </select>
      <p><b>Número da Area</b></p>
      <select class="opcoes" v-model="newUsers.area">
        <option v-for="area in areas" :key="area['.key']" >
          <b>{{ area.numero }}</b>
        </option>
      </select>
      <button class="confirmar" @click="confirmou = true">Confirmar</button>
    </form>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
    data() {
    return {
      enviado: false,
      visitas: [],
      areas:[],
      agentes:[],
      date: "",
      newUsers: {
        agente: "",
        area: "",
      }
    }
},
    firestore() {
    return {
      areas: db.collection("area").orderBy("numero", "asc"),
      visitas: db.collection("visita"),
      agentes: db.collection("agentes").orderBy("nome", "asc"),
      moradores: db.collection("morador").orderBy("nome", "asc"),
    };
  },
  methods:{
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printDia: function (data) {
      return new Date(data).toLocaleDateString();
    },
    addUser: function () {
        db.collection("visitas").doc("dia").collection("visita").add({
            area:`${this.newUsers.area}`,    
            agente: `${this.newUsers.agente}`,
            dia: `${this.date}`,
         });
      this.enviado = true;
    },
    },
    mounted: function () {
    this.date = this.printDate();
  },
  };
</script>

<style>
.selecao {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  font-size: 13pt;
}
.opcoes {
  position: relative;
  font-family: Arial;
  background-color: #faa513c9;
  border-radius: 5px;
  width: 70%;
  font-size: 13pt;
}
.opcoes:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 0px;
  width: 0%;
  height: 0;
  border: 2px solid transparent;
  border-color: #e98a15cc transparent transparent transparent;
  border-radius: 5px;
  padding-right: 0%;
}
.opcoes.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}
.select-items div,
.opcoes {
  color: #131313;
  padding: 3% 2%;
  border: 1px solid transparent;
  border-color: transparent transparent #0000001a transparent;
  cursor: pointer;
}
.confirmar {
  font-size: 40px;
  background-color: #5e747f;
  border-style: none;
  color: #ecebe3;
  border-radius: 20px;
  margin: 6px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
  text-align: center;
}
.confirmar:hover {
  background-color: #90e0ef;
  color: black;
}
</style>