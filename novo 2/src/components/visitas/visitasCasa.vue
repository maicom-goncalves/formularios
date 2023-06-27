<template>
  <div id="casasDiarias">
    <div
      @click="mudarCasa(casa.numero)"
      class="visita"
      v-for="casa in casas"
      :key="casa.key"
    >
      {{ casa.numero }}
      <ListaPessoas2 numeroCasa="001"/>
    </div>
     
  </div>
</template>

<script>

//import { db } from "../../firebase";
import ListaPessoas2 from './ListaPessoasDois.vue';
export default {
  components: { ListaPessoas2},
  props: ["nomeSobrenome"],
  data() {
    return {
      casas: [],
    };
  }
};
</script>

<style scoped>
.casasDiarias {
  display: flex;
  align-content: space-between;
  width: 100%;
  flex-direction:column;
  align-items: stretch;
}
.visita {
  cursor: pointer;
  list-style: none;
  padding: 10px;
  border: 2px solid #db4c40;
  border-radius: 8px;
  overflow: hidden;
  font-size: 23px;
  margin: 7px;
  width: 18%;
  height: 22%;
  display: inline-block;
}
.visita .item-visita {
  padding: 1px 1px;
  cursor: pointer;
  width: 97%;
  height: 96%;
}
.visita .item-visita:hover {
  background-color: #db4c40;
  color: #faf0ca;
}
.visita .item-visita:nth-child(n + 2) {
  border-top: 1px solid #faf0ca;
}
</style>