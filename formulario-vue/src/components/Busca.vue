<template>
<div id="busca">
    <li v-for="user in users" class="user" :key="user['.key']">
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

<style scoped>
    #busca{
        display: grid;
        background-color: #e0df95;
        color:black;
        border: 1px solid #ffeeee;
        margin:10px;
        font-size:24px;
        text-align:justify;
        padding:20px;
    }
    .destaque{
        font-size:26px;
    }
    button{
      font-size: 30px;
      background-color: #bf0603;
      color: #ecebe3;
      border-radius: 10px;
      margin:5px;
    }
</style>
