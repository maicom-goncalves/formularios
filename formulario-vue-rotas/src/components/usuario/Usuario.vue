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
  },
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
}
.vermelhopastel {
  font-size: 45px;
  background-color: #e01674;
  border-style:none;
  color: #ffffff;
  border-radius: 20px;
  margin: 6px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
}
</style>
