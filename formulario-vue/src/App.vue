<template>
  <div id="app">
    <header>
      <h1><b>SAÚDE INDÍGENA</b></h1>
      <h2>MINISTERIO DA SAÚDE</h2>
      <h2>SECRETARIA ESPECIAL INDÍGENA</h2>
      <h3>DISTRITO SANITÁRIO ESPECIAL DE INDÍGENA MATO GROSSO DO SUL</h3>
      <h4>POSTO DE SAÚDE INDÍGENA</h4>
    </header>
    <article>
      <form id="form" v-on:submit="addUser">
        <div>
          <label for="nome">Nome</label>
          <input id="nameId" type="text" v-model="newUsers.nameId" required />
          <label for="sobrenome">Sobrenome</label>
          <input id="lastnameId" type="text" v-model="newUsers.lastnameId" required />
        </div>

        <button type="reset" id="loadButton">Carregar</button>
        <button type="submit" value="AddUser">Enviar</button>
      </form>
      <li v-for="user in users" class="user" :key="user['.key']">
        <span>{{ user.nome }} - {{ user.sobrenome }}</span>
        <button v-on:click="removeUser(user)"><b>REMOVE</b></button>
      </li>
    </article>
  </div>
</template>

<script>
import { db } from "./firebase";

export default {
  name: "App",
  
  data() {
    return {
      users: [],
      newUsers: {
          nameId: "",
          lastnameId: ""}
    };
  },
  props: {
    newUser: {
      required: false,
      default: () => {
        return {
          nameId:'',
          lastnameId:''
        }
      }
    },
  },
  firestore(){
   return {
        users: db.collection('users'),
      }
  },
   /*firestore(nameId,lastnameId) {
     console.log(nameId+'')
    return {
      users: db.collection("users").add({ nome:nameId+':id', sobrenome:lastnameId+':id'})
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          })
    };
  },*/

  methods: { 
    addUser: function () {
     console.log(this.newUsers.nameId);
      //this.$firestore.users.add(this.newUser.nameId,this.newUser.lastnameId)
      this.$firestore().db.collection("users")
      .add({ nome:this.newUser.nameId+':idwudund', sobrenome:this.newUser.lastnameId+':iddwdwd'})
      .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      this.newUsers = '';
    },
    
    deleteUser: function (user) {
      this.$firestore.users.doc(user[".key"]).delete();
    }
    },
   
  
  /*methods: {
    this.newUser.nameId = "";
     this.newUser.lastnameId = "";
     
    addUsers: function () {
      this.$firestore.users.add({
        name: this.newUser.nameId,
        lastname: this.newUser.lastnameId,
        this.newUser.nameId = "";
          this.newUser.lastnameId = "";
      });
      this.newUsers = "";
    },
    deleteUser: function (paciente) {
      this.$firestore.users.doc(paciente[".key"]).delete();
    },
  },*/
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #05074b;
  margin-top: 60px;
}
</style>
