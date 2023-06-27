<template>
  <div>
    <table @submit.prevent="onUpdateForm" class="dadosVisita">
      <div class="zero">
        <h2>{{ visitas.nome }} {{visitas.sobrenome}}</h2>
      </div>
      <div class="um">
        <p>
          <b>Data da visita : </b>
          <span>{{ visitas.dataAtual }}</span>
        </p>
        <p>
          <b>Numero do Prontuario :</b>
        <span>{{visitas.nprontuario}}</span>  
        </p>
        <p>
          <b>Lingua Materna :</b>
          <span>{{visitas.lmaterna}}</span>
        </p>
        <p>
          <b>Doença Crônica :</b>
          <span>{{ visitas.hdoenca }}</span>
        </p>
      </div>
      <div class="dois">
         <p>
          <b>Motivo da visita :</b>
          <span>{{visitas.mvisita}}</span>
        </p>
        <p>
          <b>Fumante</b>
          <span>{{visitas.tabagismo}}</span>
        </p>
        <p>
          <b>Peso :</b>
          <span>{{ visitas.peso }}</span>
        </p>
        <p>
          <b>Atividade Fisica :</b>
          <span>{{visitas.atividadeFisica}}</span>
        </p>
      </div>
      <div>
          <h4><b>Observações</b></h4>
          <p>{{visitas.observacoes}}</p>
      </div>
    </table>
  </div>
</template>

<script>
import { db } from "../../firebase";
import "../../fonts/fontes.css";
export default {
  props: ["id","id2"],
  firestore() {
    return {
      visitas: db.collection("Visita").doc(this.id).collection("visitas").doc(this.id2)
    };
  },
  methods: {
    prinspania: function (data) {
      return new Date(data).toLocaleDateString();
    },
    onUpdateForm(event) {
      event.prevenspanefault();
      db.collection("visitas")
        .doc(this.$route.params.id)
        .collection("visitas")
        .doc(this.$route.params.id2)
        .update(this.visitas)
        .then(() => {
          
          //this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  data() {
    return {
      visitas: {},
    };
  },
  created() {
    let dbRef = db.collection("visitas").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.visitas = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>

.dadosVisita{
  background-color: #c0eb808c;
  color: #1a1a1a;
  font-family: "Hind Madurai", sans-serif;
  font-size: 27px;
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  text-align: justify;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:  1fr;
  grid-template-areas: "zero zero" "um dois" " tres tres";
  border: 2px #1a1a1a;
  box-shadow: 1px #1a1a1a;
}
.zero{
  grid-area:zero;
  text-align: left;
  padding: 20px;
  background-color: aliceblue;
}
.um{
  grid-area:um;
  text-align: left;
  padding: 20px;
}
.dois {
  grid-area:dois;
  text-align: right;
  padding: 20px;
}
</style>