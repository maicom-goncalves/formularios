<template>
<div id="formularioId3">
 <h1><b>SESSÃO C:HISTÓRICO DE DOENÇAS RELEVANTES</b></h1>
      <h4>POSTO DE SAÚDE INDÍGENA</h4>
  <div id="vacinas">
    <form id="form1" v-on:submit.prevent="addDoenca">
    <div class="item">
       <h3>Doença</h3>
     </div>
     <div class="item">
       <h3>Data do Diagnóstico</h3>
     </div>   
     <div class="item">
       <h3>Situação Atual</h3>
     </div>             
    </form>
  </div>
</div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "formularioId3",
  data() {
    return {};
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
.vacinas{
  display: flex;
  flex-direction: row;
}
.item {
  /*grid-area: parte-um;*/
  text-align: center;
  padding: 36px;
}
</style>
