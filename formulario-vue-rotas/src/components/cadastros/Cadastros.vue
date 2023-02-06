<template>
  <div>
    <h1>Cadastros</h1>
    <nav class="menu">
    <ul>
      <router-link to="/cadastro" tag="li" active-class="active" exact>
        CADASTRO MORADOR
      </router-link>
      <router-link to="/cadastroAgente" tag="li" active-class="active" exact>
        CADASTRO AGENTE
      </router-link>
      <router-link to="/cadastroArea" tag="li" active-class="active" exact>
        CADASTRO AREA
      </router-link>
    </ul>
  </nav>
  </div>
</template>
<script>
export default {

}
</script>

<style>

</style>