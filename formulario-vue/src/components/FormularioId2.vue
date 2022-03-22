<template>
  <div id="formularioId">
    <h1><b>SESSÃO B:HISTÓRICO VACINAL</b></h1>
    <h4>POSTO DE SAÚDE INDÍGENA</h4>
    <div id="vacinas">
      <form id="form1" v-on:submit.prevent="addUser">
        <div class="item">
          <h3>Vacina</h3>
          <label for="vacina">Nome</label>
          <input id="vacina" type="text" v-model="newUsers.vacinaId" />
        </div>
        <div class="item">
          <h3>Doze</h3>
          <label for="doze">Nome</label>
          <input id="doze" type="text" v-model="newUsers.dozeId" />
        </div>
        <div class="item">
          <h3>Data</h3>
          <label for="data">Nome</label>
          <input id="data" type="date" v-model="newUsers.dataId" />
        </div>
        <div class="item">
          <h3>Lote</h3>
          <label for="lote">Lote</label>
          <input id="lote" type="text" v-model="newUsers.loteId" />
        </div>
        <div class="item">
          <h3>Validade</h3>
          <label for="validade">Nome</label>
          <input id="validade" type="date" v-model="newUsers.validadeId" />
        </div>
        <div class="parte-tres">
        <button type="submit" value="AddUser">Enviar</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "formularioId2",
  data() {
    return {
      users: [],
      newUsers: {
        vacinaId: "",
        dozeId: "",
        dataId: "",
        loteId: "",
        validadeId: "",
      },
    };
  },
  props: {
    newUser: {
      required: false,
      default: () => {
        return {
          vacinaId: "",
          dozeId: "",
          dataId: "",
          loteId: "",
          validadeId: "",
        };
      },
    },
  },
  firestore() {
    return {
      users: db.collection("users"),
    };
  },

  methods: {
    addUser: function () {
      db.collection("users").add({
          vacina: `${this.newUsers.vacinaId}`,
          doze: `${this.newUsers.dozeId}`,
          data: `${this.newUsers.dataId}`,
          lote: `${this.newUsers.loteId}`,
          validade: `${this.newUsers.validadeId}`,
         
        });
    }
     
  },
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
.vacinas {
  display: flex;
  flex-direction: row;
}
.item {
  /*grid-area: parte-um;*/
  text-align: center;
  padding: 36px;
}
</style>
