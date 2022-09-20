<template>
  <div class="usuario-editar">
    <h3>Editar</h3>
    <form @submit.prevent="onUpdateForm" id="editar">
      <h3 id="nomesobrenome">{{ morador.nome }} {{ morador.sobrenome }}</h3>
      <hr/>
        <table>
      <hr/>
      <h4 clas="titulo" >Editando</h4>
      <tr>
        <th>Nome da Mãe</th>
        <th>Nome do Pai</th>
        <th>Etnia</th>
        <th>Aldeia</th>
        <th>Polo base</th>
        <th>Data de Nascimento</th>
       
      </tr>
      <tr>
        <td><input type="text" v-model="morador.Mae"/></td>
        <td><input type="text" v-model="morador.pai"/></td>
        <td><input type="text" v-model="morador.Etnia"/></td>
        <td><input type="text" v-model="morador.aldeia"/></td>
        <td><input type="text" v-model="morador.polobase"/></td>
        <td><input type="date" v-model="morador.data"/></td>
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
        <td><input type="number" v-model="morador.cartaosus"/></td>
        <td><input type="text" v-model="morador.cpf"/></td>
        <td><input type="text" v-model="morador.cidade"/></td>
        <td><input type="text" v-model="morador.casa"/></td>
        <td><input type="text" v-model="morador.genero"/></td>
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
        <td><input type="text" v-model="morador.vacina"/></td>
        <td><input type="text" v-model="morador.doze"/></td>
        <td><input type="date" v-model="morador.data2"/></td>
        <td><input type="text" v-model="morador.lote"/></td>
        <td><input type="text" v-model="morador.validade"/></td>
      </tr>
      <h4 clas="titulo" >Doenças</h4>
        <tr>
        <th>ID</th>
        <th>Data do Diagnostico</th>
        <th>Situação</th>
      </tr>
      <tr>
        <td><input type="text" v-model="morador.doencaId"/></td>
        <td><input type="date" v-model="morador.dataDiagnosticoId"/></td>
        <td><input type="text" v-model="morador.situacaoId"/></td>
      </tr>
      <h4 clas="titulo" >Medicações de uso continuo</h4>
       <tr>
        <th>Medicamento</th>
        <th>Doze</th>
        <th>Horarios</th>
      </tr>
      <tr>
        <td><input type="text" v-model="morador.medicamentoId"/></td>
        <td><input type="date" v-model="morador.doze2Id"/></td>
        <td><input type="date" v-model="horarioId"/></td>
      </tr>
      <br/>
        </table>
        <button class="confirmar" @click="confirmou = true">Confirmar</button>
    </form>
    
    
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  props: ["id"],
  firestore() {
    return {
      morador: db.collection("morador"),
    };
  },
  data() {
    return {
      morador: {},
      confirmou: false,
    };
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("morador")
        .doc(this.id)
        .update(this.morador)
        .then(() => {
          console.log("Usuario Modificado com sucesso");
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
    let dbRef = db.collection("morador").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.morador = doc.data();
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
#rodape {
  margin-top: 1000px;
}
.usuario-detalhe{
  text-align:justify;
}
.titulo {font-size: 38;}
#editar {
  font-family: "Hind Madurai", sans-serif;
  margin-top: 25px;
  border-radius: 18px;
  color: black;
  padding: 20px;
  margin: 5px;
}
#editar td{font-size: 30px;}
#editar tr:nth-child(even) {
  background-color: #f1f0ea;
}
#editar tr:hover {
  background-color: #ddd;
}

#editar th {
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
#editar input {
  font-size: 18pt;
  margin-bottom: 10px;
  margin-left: 5px;
  width: 86%;
}
.confirmar {
  font-size: 40px;
  background-color: #5e747f;
  border-style:none;
  color: #ecebe3;
  border-radius: 20px;
  margin: 6px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
  text-align: center;
}
.confirmar:hover{
  background-color: #90e0ef;
  color:black;
}
</style>
