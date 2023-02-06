<template>
  <div class="usuario-detalhe">
    <h2>Dados do morador</h2>
    <table id="customers" @submit.prevent="onUpdateForm" class="dados-usuario">
      <h3 id="nomesobrenome">{{ morador.nome }} {{ morador.sobrenome }}</h3>
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
        <td>{{ morador.Mae }}</td>
        <td>{{ morador.pai }}</td>
        <td>{{ morador.Etnia }}</td>
        <td>{{ morador.aldeia }}</td>
        <td>{{ morador.polobase }}</td>
        <td>{{printDia(morador.data)}}</td>
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
        <td>{{ morador.cartaosus }}</td>
        <td>{{ morador.cpf }}</td>
        <td>{{morador.cidade}}</td>
        <td>{{morador.casa}}</td>
        <td>{{morador.genero}}</td>
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
        <td>{{ morador.vacina }}</td>
        <td>{{ morador.doze }}</td>
        <td>{{printDia(morador.data2)}}</td>
        <td>{{ morador.lote }}</td>
        <td>{{printDia(morador.validade)}}</td>
      </tr>
      <h4 clas="titulo" >Doenças</h4>
        <tr>
        <th>ID</th>
        <th>Data do Diagnostico</th>
        <th>Data</th>
        <th>Situação</th>
      </tr>
      <tr>
        <td>{{ morador.doencaId }}</td>
        <td>{{printDia(morador.dataDiagnosticoId)}}</td>
        <td>{{printDia(morador.data2)}}</td>
        <td>{{ morador.situacaoId }}</td>
      </tr>
      <h4 clas="titulo" >Medicações de uso continuo</h4>
       <tr>
        <th>Medicamento</th>
        <th>Doze</th>
        <th>Horarios</th>
      </tr>
      <tr>
        <td>{{ morador.medicamentoId }}</td>
        <td>{{printDia(morador.doze2Id)}}</td>
        <td>{{ morador.horarioId }}</td>
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
  props: ["id","id3"],

  firestore() {
    return {
      //morador: db.collection("morador"),
      moradores: db.collection("morador").doc(this.id).collection("moradores").doc(this.id3)
    };
  },
  methods: {
    printDia: function (data) {
      return new Date(data).toLocaleDateString();
    },
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("morador")
        .doc(this.$route.params.id)
        .update(this.morador)
        .then(() => {
          console.log("morador successfully updated!");
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
      morador: {},
    };
  },
  created() {
    let dbRef = db.collection("morador").doc(this.id).collection("moradores").doc(this.id3);
    dbRef
      .get()
      .then((doc) => {
        this.morador = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });

      console.log(this.id3);
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
