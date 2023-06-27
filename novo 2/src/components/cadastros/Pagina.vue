<template>
<div>
  <Menu />
  <div class="usuario">
       <router-view />
  </div>
</div>
  
</template>

<script>
import Menu from '../template/Menu.vue'
export default {
   components: { Menu },
}
</script>

<style>
.novoCadastro {
  font-size: 40px;
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
.enviar{
    font-size: 40px;
    background-color:#00a878;
    border-style:none;
    color: #ecebe3;
    border-radius: 15px;
    padding: 12px;
    cursor: pointer;
}
.enviar:hover {
    background-color: #00a878a6;
    color: rgb(46, 45, 45);
}
</style>