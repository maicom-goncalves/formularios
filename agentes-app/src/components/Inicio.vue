<template>
    <div id="inicio">
      <header id="cabecalho">
        <h1>DISTRITO SANITÁRIO ESPECIAL DE INDÍGENA MATO GROSSO DO SUL</h1>
      </header>
      <Menu/>
    </div>
</template>

<script>
import Menu from './template/Menu.vue'
export default {
  components: { Menu },
}
</script>

<style>
  #cabecalho{
  margin-top: 10px;
  padding-top: 20px;
  text-align: justify;
}

#cabecalho h1 {
  font-size: 25px;
}
#cabecalho h2{
  font-size: 20px;
}
</style>