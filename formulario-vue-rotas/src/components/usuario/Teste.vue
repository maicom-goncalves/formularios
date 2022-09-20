<template>
    <div class="usuario-editar">
      <h3>Editar</h3>
      <form @submit.prevent="onUpdateForm" id="editar">
        <h3 id="nomesobrenome">{{ teste.nome }} {{ teste.sobrenome }}</h3>
        <hr/>
          <table>
        <hr/>
        <h4 clas="titulo" >Editando</h4>
        <tr>
          <th>Nome da Mãe</th>
          <th>Nome do Pai</th>
          <th>Etnia</th> 
        </tr>
        <tr>
          <td><input type="text" v-model="teste.Mae"/></td>
          <td><input type="text" v-model="teste.pai"/></td>
          <td><input type="text" v-model="teste.Etnia"/></td>
        </tr>
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
        teste: db.collection("area"),
      };
    },
    data() {
      return {
        teste: {},
        confirmou: false,
      };
    },
    methods: {
      onUpdateForm(event) {
        event.preventDefault();
        db.collection("area")
          .doc(this.id)
          .update(this.teste)
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
      let dbRef = db.collection("area").doc(this.$route.params.id);
      dbRef
        .get()
        .then((doc) => {
          this.teste = doc.data();
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
  