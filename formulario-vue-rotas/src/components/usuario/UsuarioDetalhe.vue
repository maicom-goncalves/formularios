<template>
  <div class="usuario-detalhe">
      <h3>Dados do morador</h3>
      <hr/>
      <p><strong>Código:</strong>{{ id }}</p>
      <!-- :to="`/usuario/${$route.params.id}/editar`" -->
      <h3 id="morador">{{ id.nome }} {{ id.sobrenome }}</h3>
        <p class="destaque"><b>{{ id.nome }} {{ id.sobrenome }}</b><p/>
        <p>nome:{{ id.nome }} -sobrenome: {{ id.sobrenome }}</p>
        <p>mãe:{{ id.Mae }}</p>
        <p>Pai {{ id.pai }} </p>
        <p>etnia:{{ id.etnia }}  </p>
        <p>aldeia:{{ id.aldeia }}</p>
        <p>cidade:{{ id.cidade }} - Polo-base:{{ id.polobase }} </p>
        <p>cartão do SUS:{{ id.cartaosus }}</p>
        <p>CPF:{{id.cpf}}</p>
        <p>Data de Nascimento:{{ id.data }} </p>
  </div>
</template>

<script>
import { db } from '../../firebase';   
export default {
props:['id'],
 firestore() {
    return {
      users: db.collection("user"),
    };
  },
beforeRouteEnter(to,from,next){
  next()
}
}
</script>

<style>

</style>
