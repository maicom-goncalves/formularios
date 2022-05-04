<template>
  <div class="usuario-detalhe">
    <h3>Dados do morador</h3>
    <hr />
    <!-- :to="`/usuario/${$route.params.user}/editar`" -->
    <form  @submit.prevent="onUpdateForm" class="dados-usuario">
      <h3>{{ user.nome }} {{ user.sobrenome }}</h3>
      <br/>
      <div>
        <p>Mãe: {{ user.Mae }}</p>
      </div>
      <div>
        <p>Pai {{ user.pai }}</p>
      </div>
      <p>etnia:{{ user.etnia }}</p>
      <p>aldeia:{{ user.aldeia }}</p>
      <p>Polo-base:{{ user.polobase }}</p>
      <p>cartão do SUS:{{ user.cartaosus }}</p>
      <p>CPF:{{ user.cpf }}</p>
      <p>Data de Nascimento:{{ user.data }}</p>
      <b>Vacinas</b>
      <p>vacina:{{user.vacina}}</p>
      <p>Doze:{{user.doze}}</p>
      <p>Data:{{user.data2}}</p>
      <p>Lote:{{user.lote}}</p>
      <p>Validade:{{user.validade}}</p>
      <b>Doenças</b>
      <p>ID:{{user.doencaId}}</p>
      <p>Diagnostico:{{user.dataDiagnosticoId}}</p>
      <p>Situação:{{user.situacaoId}}</p>
      <p></p>
    </form>
  </div>
</template>

<script>
import { db } from "../../firebase";
import "../../fonts/fontes.css"
export default {
  props: ["id"],

  firestore() {
    return {
      user: db.collection("user"),
    };
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("users")
        .doc(this.$route.params.id)
        .update(this.user)
        .then(() => {
          console.log("User successfully updated!");
          this.$router.push("/list");
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
      user: {},
    };
  },
  created() {
    let dbRef = db.collection("users").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.user = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.dados-usuario{
  font-family: 'Hind Madurai', sans-serif;
  font-size: 30px;
  margin-top: 25px;
  background: #f1f0ea;
  border: 1px solid #ffeeee;
  display: grid;
  /*grid-template-columns: 1fr 1fr;
  grid-auto-columns: 800px;*/
  border-radius: 18px;
  color: black;
  padding: 20px;
}
</style>
