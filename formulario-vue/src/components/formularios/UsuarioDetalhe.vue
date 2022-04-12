<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <hr/>
      <p><strong>Código:</strong>{{ id }}</p>
      <!-- :to="`/usuario/${$route.params.id}/editar`" -->
      <ul :key="user['.key']">
        <h3 id="morador">{{ user.nome }} {{ user.sobrenome }}</h3>
        <p class="destaque"><b>{{ user.nome }} {{ user.sobrenome }}</b><p/>
        <p>nome:{{ user.nome }} -sobrenome: {{ user.sobrenome }}</p>
        <p>mãe:{{ user.Mae }}</p>
        <p>Pai {{ user.pai }} </p>
        <p>etnia:{{ user.etnia }}  </p>
        <p>aldeia:{{ user.aldeia }}</p>
        <p>cidade:{{ user.cidade }} - Polo-base:{{ user.polobase }} </p>
        <p>cartão do SUS:{{ user.cartaosus }}</p>
        <p>CPF:{{user.cpf}}</p>
        <p>Data de Nascimento:{{ user.data }} </p>
        <br/>
        <button v-on:click="deleteUser(user)"><b>REMOVE</b></button>
        <hr/>
    </ul>
  </div>
</template>

<script>
import { db } from "../firebase"
export default { 
props:['id'],
firestore() {
    return {
      users: db.collection("users"),
        };
    },
 methods:{
    deleteUser: function (user) {
      this.$firestore.users.doc(user[".key"]).delete();
    },
    }
}
</script>

<style>

</style>