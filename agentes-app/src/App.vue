<template>
  <div id="app">
    <div id="banner">
      <Cabecalho/>
    </div>
    <router-view name="incio"></router-view>
    <router-view />
    <div id="footer">
      <button class="voltar" @click="voltarPagina">
          <img class="iconbotao" src="../src/img/back01.png" alt="voltar" />
      </button>
      <button class="home" @click="irParaInicio">
        <img class="iconbotao" src="../src/img/home02.png" alt="voltar" />
      </button>
    </div>
  </div>
</template>
<script>
import Cabecalho from './components/pages/Cabecalho.vue';
export default {
  name: "App",
  methods: {
    irParaInicio() {
      //voltar a pagina incial
      this.$router.push({ name: "inicio" });
    },
    voltarPagina() {
      //voltar a pagina anterior
      this.$store.push();
    },
  },
  components: {Cabecalho },
};
</script>

<style>
#app {
  padding: 2px;
}
#banner {
  position: fixed;
  background: #cbd4c2;
  width: 100%;
  color: #1a1919;
  border-radius: 10px 10px 0px 0px;
  /*padding: 10px;*/
}
.home {
  font-size: 12px;
  background-color: #d81e5c7c;
  border-style: none;
  color: #ecebe3;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  text-align: right;
  margin-right: 0%;
}
.voltar {
  font-size: 12px;
  background-color: #d81e5c7c;
  border-style: none;
  color: #ecebe3;
  border-radius: 12px;
  padding: 2px;
  cursor: pointer;
  margin-left: 4%;
  text-align: left;
}
@media screen and (max-width: 600px) {
  #app {
    padding: 1px;
    margin: 1px;
  }
  #footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-radius: 0px 0px 10px 10px;
    /*background: #297045;*/
    background: #d81e5c7c;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .iconbotao {
    width: 25%;
  }
}
</style>
