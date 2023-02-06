<template>
  <div class="inicio">
    <Menu />
    <div id="inicio">
      <header id="cabecalho">
        <img src="../img/logo01.png"/>
        <h1>DISTRITO SANITÁRIO ESPECIAL DE INDÍGENA MATO GROSSO DO SUL</h1>
        <h1><b>SAÚDE INDÍGENA</b></h1>
        <h2>MINISTERIO DA SAÚDE</h2>
        <h2>SECRETARIA ESPECIAL INDÍGENA</h2>
        <h2>POSTO DE SAÚDE INDÍGENA</h2>
      </header>
    </div>
  </div>
</template>

<script>
import "../fonts/fontes.css";
import Menu from "./template/Menu";

export default {
  components: { Menu },
};
</script>

<style scoped>
#cabecalho{
  margin-top: 10px;
  padding-top: 20px;
  text-align: center;
  font-family: 'Abril Fatface', cursive;
}
#cabecalho img{
  width: 300px;
}
#cabecalho h1 {
  font-size: 45px;
}
#cabecalho h2{
  font-size: 40px;
}
</style>