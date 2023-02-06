<template>
  <div class="pagina">
    <h3 class="data">Dia:{{ date }}</h3>
    <!--<Menu/> -->
    <transition mode="out-in">
      <router-view />
    </transition>
    <div id="footer">
      <button class="voltar" @click="sair">
       <img class="iconbotao" src="../../img/sair03.png" alt="sair" />
      </button>
      <button class="home" @click="irParaInicio">
        <img class="iconbotao" src="../../img/home04.png" alt="voltar" />
      </button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
 /* components: { Menu },*/
 data() {
    return {
      date: ""
    }},
 methods: {
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printDia: function (data) {
      return new Date(data).toLocaleDateString();
    },
    irParaInicio() {
      //voltar a pagina incial
      this.$router.push({ name: "inicio" });
    },
    sair: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
 },
  mounted: function () {
    this.date = this.printDate();
  }
}
</script>

<style>
.data{
  font-size: 17pt;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.pagina{
  margin-top: 10%;
  margin-bottom: 5%;
}
 .icones{
  width: 8%;
  height: 4%;
  margin-right: 4% ;
 }
 .iconbotao {
    width: 18%;
    /*height: 2%;*/
  }
  .home {
  font-size: 12px;
  background-color: #ff5e5b;
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
  background-color: #ff5e5b;
  border-style: none;
  color: #ecebe3;
  border-radius: 12px;
  padding: 2px;
  cursor: pointer;
  margin-left: 4%;
  text-align: left;
}
</style>