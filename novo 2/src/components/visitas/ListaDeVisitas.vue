<template>
  <div >
    <h1>Visitas dos agentes</h1>
    <div id="visitasDiarias">
      <div class="visita" v-for="visita in visitas" :key="visita['.key']">
        <router-link tag="table"
              :to="{ name: 'visita', params: { id2: visita['.key']} }"
              class="item-visita" >
          <tr>
            <th>Data da visita</th>
            <th>Nome</th>
          </tr>
          <tr>
            <td>{{ visita.dataAtual }} </td>
           <td>{{ visita.nome }} {{ visita.sobrenome }}</td>
          </tr>
        </router-link>
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
      visitas:[],
    };
  },
  firestore() {
    return {
      visitas: db.collection("Visita").doc(this.id).collection("visitas").orderBy("dataAtual", "asc")
    };
  },
};
</script>
  
  <style scoped>
.visitasDiarias {
  display: flex;
  align-content: space-between;
  width: 100%;
  flex-direction: row;
  align-items: stretch;
}
th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  /*width: 40%;*/
}
.visita {
    list-style: none;
    padding: 10px;
    border: 2px solid #db4c40;
    border-radius: 8px;
    overflow: hidden;
    font-size: 23px;
    margin: 7px;
    width: 18%;
    height: 22%;
    display: inline-block;
  }

  .visita .item-visita {
    padding: 1px 1px;
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