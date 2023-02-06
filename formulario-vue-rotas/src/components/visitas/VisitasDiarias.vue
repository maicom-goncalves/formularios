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
}
</script>

<style>

</style>