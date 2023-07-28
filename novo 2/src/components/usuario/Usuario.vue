<template>
  <div>
    <Menu />
    <div class="usuario">
      <transition name="slide-fade" mode="out-in">
       <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
import Menu from "../template/Menu.vue";
export default {
  components: { Menu }
};
</script>

<style>
.usuario {
  margin-top: 2%;
  background: #f9f9f9fd;
  border: 1px solid #dfded8;
  box-shadow: 1px 2px #020402a6;
  border-radius: 18px;
  padding: 2%;
}
.enviarForm{
  font-size: 100%;
  background-color: #02C39A;
  color:#f0f8f5;
  border-style: none;
  border-radius: 14px;
  width: 17%;
  height: 6%;
  margin: 12px;
  cursor: pointer;
  padding: 5% 3%;
}
.enviarForm:hover {
  background-color: #0b5d1e;
  color: #f5eded;
}
.vermelhopastel {
  font-size: 45px;
  background-color: #b10f2e;
  border-style: none;
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
.novoCadastro {
    margin-top: 5%;
    font-size: 43px;
    background-color: #2b93a5;
    border-style: none;
    color: #ecebe3;
    border-radius: 15px;
    padding: 12px;
    cursor: pointer;
    }  
.novoCadastro:hover {
    background-color: #375c5b;
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
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
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
