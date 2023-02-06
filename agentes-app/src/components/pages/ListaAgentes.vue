<template>
  <div class="lista">
    <!--<select class="opcoes" name="agente">
      <option
        value="{agentes.nome}"
        v-for="agentes in agentes"
        :key="agentes['.key']">
        <router-link :to="{ name: 'pagina', params: { id: agentes['.key'] } }" >
          <b>{{ agentes.nome }}</b>
        </router-link>
      </option>
    </select>-->
     <li class="lista" v-for="agentes in agentes" :key="agentes['.key']">
      <router-link
        tag="li"
        :to="{ name: 'casas', params: { id: agentes['.key'] } }"
        class="item-lista"
      >
        <b>{{ agentes.nome }}</b>
      </router-link>
    </li>  
  </div>
</template>
<script>
import { db } from "../../firebase";
export default {
  firestore() {
    return {
      agentes: db.collection("agentes").orderBy("nome", "asc"),
    };
  },
};
</script>

<style scoped>
.lista {
  margin-top: 20%;
  text-align: center;
}
</style>