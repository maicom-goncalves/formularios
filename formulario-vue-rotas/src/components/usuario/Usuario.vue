<template>
  <div class="usuario">
    <router-view />
    <button class="voltar" @click="irParaInicio">VOLTAR</button>
  </div>
</template>

<script>

export default {
  methods: {
    irParaInicio() {
      //voltar a pagina incial
      this.$router.push({ name: "inicio" });
    },
  }
};
</script>

<style>
 .voltar{
  font-size: 40px;
  background-color:#cf66e9;
  border-style:none;
  color: #ecebe3;
  border-radius: 15px;
  padding: 12px;
  cursor: pointer;
}
.voltar:hover {
  background-color: #48A9A6;
  color: #fff;
}
.vermelhopastel {
  font-size: 45px;
  background-color: #b10f2e;
  border-style:none;
  color: #ffffff;
  border-radius: 14px;
  margin: 12px;
  cursor: pointer;
  padding: 12px;
}
.vermelhopastel:hover {
  background-color: #26532b;
  color: #fff;
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
  background-color: #020402;
}

input:focus + .slider {
  box-shadow: 0 0 1px #020402;
  
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
