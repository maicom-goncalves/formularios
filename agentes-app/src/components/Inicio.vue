<template>
  <div id="inicio">
    <header id="inicial">
      <h1>DISTRITO SANITÁRIO ESPECIAL DE INDÍGENA MATO GROSSO DO SUL</h1>
    </header>
    <Agente/>
    <Menu />
  </div>
</template>

<script>
import Menu from "./template/Menu.vue";
import Agente from "./pages/Agente.vue";
export default {
  components: { Menu, Agente },
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
/* The slider */
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
</style>