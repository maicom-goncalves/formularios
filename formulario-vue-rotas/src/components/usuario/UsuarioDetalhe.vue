<template>
  <div class="usuario-detalhe">
    <h2>Dados do morador</h2>
    <table id="customers" @submit.prevent="onUpdateForm" class="dados-usuario">
      <h3 id="nomesobrenome">{{ user.nome }} {{ user.sobrenome }}</h3>
      <hr />
      <h4 clas="titulo" >Informações Pessoais</h4>
      <tr>
        <th>Nome da Mãe</th>
        <th>Nome do Pai</th>
        <th>Etnia</th>
        <th>Aldeia</th>
        <th>Polo base</th>
        <th>Data de Nascimento</th>
       
      </tr>
      <tr>
        <td>{{ user.Mae }}</td>
        <td>{{ user.pai }}</td>
        <td>{{ user.Etnia }}</td>
        <td>{{ user.aldeia }}</td>
        <td>{{ user.polobase }}</td>
        <td>{{ user.data }}</td>
      </tr>
      <br />
      <tr>
        <th>Cartão do SUS</th>
        <th>CPF</th>
        <th>Município</th>
        <th>Numero da casa</th>
        <th>Sexo</th>
      </tr>
      <tr>
        <td>{{ user.cartaosus }}</td>
        <td>{{ user.cpf }}</td>
        <td>{{user.cidade}}</td>
        <td>{{user.casa}}</td>
        <td>{{user.genero}}</td>
      </tr>
      <br />
      <h4 clas="titulo" >Vacinas</h4 >
      <tr>
        <th>Nome da Vacina</th>
        <th>Doze</th>
        <th>Data</th>
        <th>Lote</th>
        <th>Validade</th>
      </tr>
      <tr>
        <td>{{ user.vacina }}</td>
        <td>{{ user.doze }}</td>
        <td>{{ user.data2 }}</td>
        <td>{{ user.lote }}</td>
        <td>{{ user.validade }}</td>
      </tr>
      <h4 clas="titulo" >Doenças</h4>
        <tr>
        <th>ID</th>
        <th>Data do Diagnostico</th>
        <th>Data</th>
        <th>Situação</th>
      </tr>
      <tr>
        <td>{{ user.doencaId }}</td>
        <td>{{ user.dataDiagnosticoId }}</td>
        <td>{{ user.data2 }}</td>
        <td>{{ user.situacaoId }}</td>
      </tr>
      <h4 clas="titulo" >Medicações de uso continuo</h4>
       <tr>
        <th>Medicamento</th>
        <th>Doze</th>
        <th>Horarios</th>
      </tr>
      <tr>
        <td>{{ user.medicamentoId }}</td>
        <td>{{ user.doze2Id }}</td>
        <td>{{ user.horarioId }}</td>
      </tr>
      <br/>
      <router-link class="editarlink" :to="{ name: 'editarUsuario', params: { id: $route.params.id } }">
        EDITAR
      </router-link>
    </table>
  </div>
</template>

<script>
import { db } from "../../firebase";
import "../../fonts/fontes.css";
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

<style scoped>
#nomesobrenome{
  font-size: 39px ;
  color:#115f37;
}
.usuario-detalhe{
  text-align:justify;
}
.titulo {font-size: 38;}
#customers {
  font-family: "Hind Madurai", sans-serif;
  margin-top: 25px;
  border-radius: 18px;
  color: black;
  padding: 20px;
  margin: 5px;
}
#customers td{font-size: 30px;}
#customers tr:nth-child(even) {
  background-color: #f1f0ea;
}
#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  background-color: #04aa6d;
  color: white;
  font-family: "Hind Madurai", sans-serif;
  font-size: 37px;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  padding: 8px;
}
.editarlink {
  font-size: 40px;
  background-color: #5e747f;
  border-style: none;
  color: #ffffff;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
  margin: 20px;
  padding: 12px;
  list-style: none;
  text-decoration: none;
}
.editarlink:hover {
  background-color: #E98A15;
  color: #fff;
}
</style>
