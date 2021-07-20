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
          <div> <label for="nome">Nome</label>

            <input id="nameId" type="text" v-model="newUser.nameId" required></div>

          <div><label for="sobrenome">Sobrenome</label>
            <input id="lastnameId" type="text" v-model="newUser.lastnameId" required></div>

          <button type="reset" id="loadButton">Carregar</button>
          <button type="submit" value="AddUser">Enviar</button>
        </form>
        <li v-for="user in users" class="user" :key="user['.key']">
          <span>{{user.name}} - {{user.lastname}}</span>
          <button v-on:click="removeUser(user)"><b>REMOVE</b></button>
        </li>
    </article>
  </div>
</template>

<script>
  import { db } from './firebase';
  //import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    data() {
      return {
        pacientes: [],
        newUser: {
          nameId: "",
          lastnameId: ""}
  }},
    firestore(){
      return {
        pacientes: db.collection('pacientes'),
      }
  },
  methods: {
      addUsers: function() {
        this.$firestore.pacientes.add(
          {
          name: this.newUser.nameId,
          lastname: this.newUser.lastnameId
          /*this.newUser.nameId = "";
          this.newUser.lastnameId = "";*/

          }
        );
        this.newUsers = '';
      },
      deleteUser: function(paciente) {
        this.$firestore.pacientes.doc(paciente['.key']).delete();
      }
    }
  }

</script>

<style>

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>

