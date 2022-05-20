<template>
  <div class="usuario-editar">
    <h3>Editar</h3>
    <form @submit.prevent="onUpdateForm" id="editar">
      <h3>{{ user.nome }} {{ user.sobrenome }}</h3>
      <hr />
        <table>
      <hr />
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
        <td><input type="text" v-model="user.Mae"/></td>
        <td><input type="text" v-model="user.pai"/></td>
        <td><input type="text" v-model="user.Etnia"/></td>
        <td><input type="text" v-model="user.aldeia"/></td>
        <td><input type="text" v-model="user.polobase"/></td>
        <td><input type="date" v-model="user.data"/></td>
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
        <td><input type="number" v-model="user.cartaosus"/></td>
        <td><input type="text" v-model="user.cpf"/></td>
        <td><input type="text" v-model="user.cidade"/></td>
        <td><input type="text" v-model="user.casa"/></td>
        <td><input type="text" v-model="user.genero"/></td>
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
        <td><input type="text" v-model="user.vacina"/></td>
        <td><input type="text" v-model="user.doze"/></td>
        <td><input type="date" v-model="user.data2"/></td>
        <td><input type="text" v-model="user.lote"/></td>
        <td><input type="text" v-model="user.validade"/></td>
      </tr>
      <h4 clas="titulo" >Doenças</h4>
        <tr>
        <th>ID</th>
        <th>Data do Diagnostico</th>
        <th>Situação</th>
      </tr>
      <tr>
        <td><input type="text" v-model="user.doencaId"/></td>
        <td><input type="date" v-model="user.dataDiagnosticoId"/></td>
        <td><input type="text" v-model="user.situacaoId"/></td>
      </tr>
      <h4 clas="titulo" >Medicações de uso continuo</h4>
       <tr>
        <th>Medicamento</th>
        <th>Doze</th>
        <th>Horarios</th>
      </tr>
      <tr>
        <td><input type="text" v-model="user.medicamentoId"/></td>
        <td><input type="date" v-model="user.doze2Id"/></td>
        <td><input type="date" v-model="horarioId"/></td>
      </tr>
      <br/>
        </table>
        <button class="verde" @click="confirmou = true">Confirmar</button>
    </form>
    
    
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
#rodape {
  margin-top: 1000px;
}
.usuario-detalhe{
  text-align:justify;
}
h3{font-size: 40;}
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
.verde {
  font-size: 45px;
  background-color: #2ba162;
  border-style:none;
  color: #ecebe3;
  border-radius: 20px;
  margin: 6px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
  text-align: center;
}
</style>
