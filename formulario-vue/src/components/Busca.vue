<template>
<div id="busca">
    <li v-for="user in users" class="user" :key="user['.key']">
        <p>nome:{{ user.nome }} -sobrenome: {{ user.sobrenome }}</p>
        <p>mãe:{{ user.Mae }}</p>
        <p>Pai {{ user.pai }} </p>
        <p>etnia:{{ user.etnia }}  </p>
        <p>aldeia:{{ user.aldeia }}</p>
        <p>cidade:{{ user.cidade }} - Polo-base:{{ user.polobase }} </p>
        <p>cartão do SUS:{{ user.cartaosus }}</p>
        <p>CPF:{user.cpfId}</p>
        <p>Data de Nascimento:{{ user.data }} </p>
        <hr/>
        <button v-on:click="deleteUser(user)"><b>REMOVE</b></button>
    </li>
</div>
 
</template>

<script>
import { db } from "../firebase"
export default {
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
    #busca{
        display: grid;
    }
</style>