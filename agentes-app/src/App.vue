<template>
  <div id="app">
    <div id="banner">
      <Cabecalho />
    </div>
    <transition  name="bounce">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Cabecalho from "./components/pages/Cabecalho.vue";
//import firebase from 'firebase'
export default {
  
  name: "App",
  components: { Cabecalho },
};
</script>

<style>
#app{
  background-color: #ecf0e95d;
}
#banner {
  position: fixed;
  background: #ecf0e9;
  width: 100%;
  color: #1a1919;
  border-radius: 10px 10px 0px 0px;
  /*padding: 10px;*/
}
.errorForm{
  color:red;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
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
    background: #ff5e5b;
    display: flex;
    justify-content: space-between;
    flex-wrap:nowrap;
  }
  .iconbotao {
    width: 18%;
    /*height: 2%;*/
  }
}
</style>

