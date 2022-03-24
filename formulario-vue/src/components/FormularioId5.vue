<template>
<div id="formularioId3">
 <h1><b>SESSÃO E:ÓBITO</b></h1>
      <h4>POSTO DE SAÚDE INDÍGENA</h4>
  <div id="obito">
    <form id="form1" v-on:submit.prevent="addobito">
    <div class="item">
       <h3>Data do Óbito</h3>
       <input id="data" type="date" v-model="newUsers.obitoId" />
     </div>
     <div class="item">
       <h3>Atestado de Óbito</h3>
       <input  type="text" v-model="newUsers.atestadoId" />
     </div>   
     <div class="item">
       <h3>Causas do Óbito</h3>
       <input type="text" v-model="newUsers.causaObitoId" />
     </div>             
    </form>
  </div>
</div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "formularioId5",
  data() {
    return {
       users: [],
      newUsers: {
        obitoId: "",
        atestadoId: "",
        causaObitoId: "",
      },
    };
  },
  props: {
    newUser: {
      required: false,
      default: () => {
        return {};
      },
    },
  },
  firestore() {
    return {
      users: db.collection("users"),
    };
  },

  methods: {},
};
</script>

<style scoped>
input {
  font-size: 18pt;
  margin-bottom: 10px;
  margin-left: 5px;
  width: 98%;
}
button {
  font-size: 40px;
  background-color: #cf3c31;
  color: #ecebe3;
  border-radius: 20px;
}

#form1 {
  display: flex;
  flex-direction: row;
  background: #9ce0e9;
  border: 1px solid rgb(255, 238, 238);
  font-family: Arial;
  font-size: 27px;
  justify-content: space-between;
}
.obito{
  display: flex;
  flex-direction: row;
}
.item {
  /*grid-area: parte-um;*/
  text-align: center;
  padding: 36px;
}
</style>
