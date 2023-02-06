<template>
  <div id="app">
    <!--<Loading v-model:="isLoading" />-->
    <router-view name="usuario"></router-view>
    <!--<Menu />-->
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
     <div class="footer" v-show="testando">
      <button class="voltar" @click="sair">SAIR</button>
      <button class="voltar" @click="irParaInicio">VOLTAR</button>
    </div>
  </div>
</template>
<script>
//import Menu from "./components/template/Menu.vue";
import Barramento from "./Barramento"
import firebase from "firebase";
export default {
  //components: { Menu },
  name: "App",
  data() {
    return {
      isLoading: true,
      testando:false
    };
  },
  methods: {
    irParaInicio() {
      //voltar a pagina incial
      this.$router.push({ name: "inicio" });
    },
    sair: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
        this.testando=false;
    },
  },
  created(){
    Barramento.$on('deslogar',testando =>{
      this.testando=testando
    })
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  align-content: space-around;
  padding-left: 140px;
  padding-right: 140px;
  background-color: #ffffffa2;
}
.footer{
  display: flex;
  justify-content:space-between;
}
.verdeagua {
  font-size: 45px;
  background-color: #41eb90;
  border-style: none;
  color: #ecebe3;
  border-radius: 20px;
  margin: 6px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
}
.azulclaro {
  font-size: 45px;
  background-color: #56d3e4;
  border-style: none;
  color: #ffffff;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
}
.slide-fade-enter-active {
  /*transition: all .5s ease;*/
 transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


</style>
