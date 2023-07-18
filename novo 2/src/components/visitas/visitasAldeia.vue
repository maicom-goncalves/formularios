<template>
<div>
  <div class="VisitaAldeia">
    <h3>Aldeias</h3>
    <button class="aldeias" @click="mudarAldeia('Água Clara')">Água Clara</button>
    <button class="aldeias" @click="mudarAldeia('Bananal')">Bananal</button>
    <button class="aldeias" @click="mudarAldeia('Morrinho')">Morrinho</button>
    <button class="aldeias" @click="mudarAldeia('Ipegue')">Ipegue</button>
    <button class="aldeias" @click="mudarAldeia('Buritizinho')">Buritizinho</button>
</div>
<ListaDeVisitas />
</div>
  
</template>
<script>
import ListaDeVisitas from './ListaDeVisitas.vue';
import EventBus from '../../EventBus'
export default {
  props: ["nomeAldeia"],
  components: {
    ListaDeVisitas,
  },
  methods: {
   mudarAldeia(variavel) {
      EventBus.$emit("aldeia",(this.nomeAldeia = variavel));
    },
  },
};
</script>

<style scoped>
.VisitaAldeia {
  display: flex;
}
.aldeias {
  padding: 2%;
  border: 1px solid #d34b3e;
  border-radius: 8px;
  overflow: hidden;
  font-size: 23px;
  margin-bottom:1%;
  margin-left: 1%;
  cursor: pointer;
}
.aldeias:hover {
  background-color: #db4c40;
  color: #faf0ca;
}
.aldeias:focus {
  border: 1px solid #d34b3e;
  background-color: #db4c40;
  color: #faf0ca;
}
</style>