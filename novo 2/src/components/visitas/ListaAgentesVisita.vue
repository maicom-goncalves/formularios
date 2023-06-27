<template>
  <div id="agentesDiarias">
    <h4>Nome dos agentes</h4>
    <p>{{ this.id}}</p>
    <div class="visita" v-for="agente in agentes" :key="agente.key">
      <div class="agentesCom">
        <tr>
          <th>Nome</th>
        </tr>
        <tr>
          <td>{{ agente.nome }} {{ agente.sobrenome }}</td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  props: ["id"],
  data() {
    return {
      visitas:[]
    };
  },
  firestore() {
    return {
      visitas: db.collection("Visita").doc(this.id).collection("visitas").orderBy("dataAtual", "asc")
    };
  },
  computed: {
    aldeias() {
      return this.$store.state.aldeia;
    }
  }
};
</script>

<style scoped>
.agentesDiarias {
  display: flex;
  align-content: space-between;
  width: 40%;
  flex-direction: row;
  align-items: stretch;
  padding: 0%;
}
.agentesCom {
  border: 2px solid #08415c;
  background-color: #08415c;

  color: whitesmoke;
  padding: 1%;
}
th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  /*width: 40%;*/
}
.visita {
  cursor: pointer;
  list-style: none;
  padding: 2%;
  background-color: #83cef1;
  border-radius: 8px;
  overflow: hidden;
  font-size: 98%;
  margin: 7px;
  width: 14%;
  height: 12%;
  display: inline-block;
}
.visita .item-visita {
  padding: 3% 3%;
  cursor: pointer;
  width: 97%;
  height: 96%;
}
.visita .item-visita:hover {
  background-color: #db4c40;
  color: #faf0ca;
}
.visita .item-visita:nth-child(n + 2) {
  border-top: 1px solid #faf0ca;
}
</style>