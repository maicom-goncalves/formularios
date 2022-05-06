<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p><strong>Código:</strong>{{ id }}</p>
    <p><strong>Completo:</strong>{{ $route.query.completo ? "Sim" : "Não" }}</p>
     <form @submit.prevent="onUpdateForm" class="dados-usuario">
      <h3>{{ user.nome }} {{ user.sobrenome }}</h3>
      <br />
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
      <p>vacina:{{ user.vacina }}</p>
      <p>Doze:{{ user.doze }}</p>
      <p>Data:{{ user.data2 }}</p>
      <p>Lote:{{ user.lote }}</p>
      <p>Validade:{{ user.validade }}</p>
      <b>Doenças</b>
      <p>ID:{{ user.doencaId }}</p>
      <p>Diagnostico:{{ user.dataDiagnosticoId }}</p>
      <p>Situação:{{ user.situacaoId }}</p>
      <p></p>
    </form>
    <hr />
    <button primario @click="confirmou = true">Confirmar</button>
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  props: ["id"],
  firestore() {
    return {
      user: db.collection("user"),
    };
  },
  data() {
    return {
      user: {},
      confirmou: false,
    };
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("users")
        .doc(this.id)
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
  beforeRouteLeave(to, from, next) {
    if (this.confirmou) {
      next();
    } else {
      if (confirm("Tem certeza")) {
        next();
      } else {
        next(false);
      }
    }
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
#rodape {
  margin-top: 1000px;
}
</style>
