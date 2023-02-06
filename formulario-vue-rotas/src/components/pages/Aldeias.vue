<template>
  <div class="area">
    <h1>Aldeias</h1>
    <li class="lista" v-for="dia in dias" :key="dia['.key']">
      <router-link
        tag="li"
        :to="{ name: 'pagina', params: { id: dia['.key'] } }"
        class="item-lista"
      >
        {{ dia['.key']}}
      </router-link>
    </li>
  </div>
</template>
  
<script>
import { db } from "../../firebase";
export default {
  data() {
    return {
      dias: {},
    };
  },
  firestore() {
    return {
      dias: db.collection("dia"),
    };
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
};
</script>
<style>
</style>
  