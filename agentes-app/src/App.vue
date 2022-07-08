<template>
  <div id="app">
    <router-view name="incio"></router-view>
    <router-view />
    <button class="voltar" @click="irParaInicio">VOLTAR</button>
  </div>
</template>

<script>
//import Menu from "./components/template/Menu";
export default {
  name: "App",
  methods: {
    irParaInicio() {
      //voltar a pagina incial
      this.$router.push({ name: "inicio" });
    },
  },
};
</script>

<style>
#app {
  padding: 2px;
}
.voltar{
  font-size: 12px;
  background-color:#cf66e9;
  border-style:none;
  color: #ecebe3;
  border-radius: 15px;
  padding: 12px;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  #app {
    padding: 0px;
    margin: 0px;
  }
}
</style>
