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
      <form id="form" v-on:submit.prevent="addUser">
        <div>
          <label for="nome">Nome</label>
          <input id="nameId" type="text" v-model="newUsers.nameId" required />
          <label for="sobrenome">Sobrenome</label>
          <input id="lastnameId" type="text" v-model="newUsers.lastnameId" required />
        </div>
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
  
  methods: { 
    
     addUser: function () {
     console.log('testatando teste');
      db.collection('users').add({ nome:`${this.newUsers.nameId}`
      , sobrenome:`${this.newUsers.lastnameId}` });
              
    },
    
    deleteUser: function (user) {
      this.$firestore.users.doc(user[".key"]).delete();
    }
    },
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
