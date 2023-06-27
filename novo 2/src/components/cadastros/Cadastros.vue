<template>
  <div>
    <Menu />
    <h1>Cadastros</h1>
    <nav class="menu">
    <ul>
      <router-link to="/cadastro" tag="li" active-class="active" exact>
        CADASTRO MORADOR
      </router-link>
      <router-link to="/cadastroAgente" tag="li" active-class="active" exact>
        CADASTRO AGENTE
      </router-link>
    </ul>
  </nav>
  </div>
</template>
<script>
import Menu from '../template/Menu.vue'
export default {
  components: {Menu},
}
</script>

<style>
   
</style>