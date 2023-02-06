<template>
  <div id="inicio">
    <Agente/>
    <Menu />
    <div id="footer">
      <button class="voltar" @click="sair">
       <img class="iconbotao" src="../img/sair03.png" alt="sair" />
      </button>
      <button class="home" @click="irParaInicio">
        <img class="iconbotao" src="../img/home04.png" alt="voltar" />
      </button>
    </div>
  </div>
</template>
<script>
import Menu from "./template/Menu.vue";
import Agente from "./pages/Agente.vue";

import firebase from 'firebase'
export default {
  components: { Menu, Agente },
   methods: {
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
};
</script>

<style>
#inicial {
  /*margin-top: 33px;*/
  padding-top: 20px;
  text-align: justify;
  margin:2px;
}
#inicial h1 {
  font-size: 140%;
}
.switch {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #1c1f1c21;
}
input:focus + .slider {
  box-shadow: 0 0 1px #02040234;
  
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 44px;
  
}
.slider.round:before {
  border-radius: 50%;
  
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