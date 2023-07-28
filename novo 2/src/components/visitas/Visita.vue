<template>
  <div>
    <table @submit.prevent="onUpdateForm" class="dadosVisita">
      <div class="zero">
        <h2>{{ visitas.nome }} {{ visitas.sobrenome }}</h2>
      </div>
      <div class="um">
        <p>
          <b>Data da visita : </b>
          <span>{{ visitas.dataAtual }}</span>
        </p>
        <p>
          <b>Agente :</b>
          <span>{{ visitas.agente }}</span>
        </p>
        <p>
          <b>Numero do Prontuario :</b>
          <span>{{ visitas.nprontuario }}</span>
        </p>
      </div>
      <div class="dois">
       <p>
          <b>Motivo da Visita:</b>
          <span>{{visitas.motivo}}</span>
        </p>
        <p>
          <b>Doença Crônica :</b>
          <span>{{ visitas.hdoenca }}</span>
        </p>
        <p>
          <b>Fumante</b>
          <span>{{ visitas.tabagismo }}</span>
        </p>
        <p>
          <b>Atividade Fisica :</b>
          <span>{{ visitas.atividadeFisica }}</span>
        </p>
        <p>
          <b>Trato digestivo :</b>
          <span>{{ visitas.digestivo }}</span>
        </p>
      </div>
      <div>
        <h4><b>Observações</b></h4>
        <p>{{ visitas.observacoes }}</p>
      </div>
    </table>
  </div>
</template>

<script>
import { db } from "../../firebase";
import "../../fonts/fontes.css";
export default {
  props: ["id","id2"],
  data() {
    return {
      visitas: "",
      aldeia: "",
    };
  },
  firestore() {
    return {
      visitas: db
        .collection("Visita")
        .doc(this.id)
        .collection("visitas")
        .doc(this.id2),
    };
  }
};
</script>
<style scoped>
.dadosVisita {
  background-color: #c0eb808c;
  color: #1a1a1a;
  font-family: "Hind Madurai", sans-serif;
  font-size:3vh;
  margin-top: 1%;
  margin-left: 2%;
  margin-right: 2%;
  text-align: justify;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "zero zero" "um dois" " tres tres";
  border: 2px #1a1a1a;
  box-shadow: 1px #1a1a1a;
}
.zero {
  grid-area: zero;
  text-align: left;
  padding: 1%;
  background-color: aliceblue;
}
.um {
  grid-area: um;
  text-align: left;
  padding: 1%;
}
.dois {
  grid-area: dois;
  text-align: right;
  padding: 1%;
}
</style>