<template>
  <div>
    <h1>Visitas dos agentes</h1>
    <h4>{{ this.nomeAldeia }}</h4>
    <div id="visitasDiarias">
      <table class="visita">
        <tr class="item-visita">
          <th>Nome</th>
          <th>Data da visita</th>
          <th>Agente</th>
        </tr>
        <router-link
          tag="tr"
          v-for="visita in visitas"
          :key="visita['.key']"
          :to="{ name: 'visita', params: { id: visita.aldeia, id2: visita.id } }"
          class="item-visita"
        >
          <td>{{ visita.nome }} {{ visita.sobrenome }}</td>
          <td>{{ visita.dataAtual }}</td>
          <td>{{ visita.agente }}</td>
        </router-link>
      </table>
    </div>
    <!-- <vue-calendar :events="events" />-->
  </div>
</template>
  <script>
import { db } from "../../firebase";
//import VueCalendar from "vue-calendar";
import EventBus from "../../EventBus";
export default {
  components: {
    //VueCalendar,
  },
  data() {
    return {
      visitas: [],
      //events:[]
    };
  },
  created() {
    EventBus.$on("aldeia", (nomeAldeia) => {
      this.nomeAldeia = nomeAldeia;
      this.visitas = [];
      //receber documento do firebase
      var docRef = db
        .collection("Visita")
        .doc(nomeAldeia)
        .collection("visitas")
        .orderBy("dataAtual", "asc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const item = {
              id: doc.id,
              ...doc.data(),
            };
            this.visitas.push(item);
          });
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(docRef);
    });
  },
   beforeDestroy() {
    EventBus.$off('aldeia',this.nomeAldeia);
  }
};
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 17pt;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

tr:hover {
  background-color: coral;
}

/*
.visitasDiarias {
  display: flex;
  align-content: space-between;
  width: 100%;
}
th,
td {
  padding: 2%;
  text-align: left;
  border-bottom: 1px solid #534646;
  background-color: #8981fa;
  flex-flow: row nowrap ;
  vertical-align: none;
}
.visita {
  padding: 2%;
  border: 2px solid #db4c40;
  border-radius: 5px;
  font-size: 23px;
  margin: 1%;
  width: 100%;
  justify-content: space-around ;
}

.visita .item-visita {
  cursor: pointer;
  background-color: #76f5a6;

}
.visita .item-visita:hover {
  background-color: #db4c40;
  color: #faf0ca;
}
*/
</style>