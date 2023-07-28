<template>
  <div>
    <Menu />
    <h1>Cadastros</h1>
    <nav class="cadastros">
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
//import '../../fonts/fontes'
export default {
  components: {Menu},
}
</script>

<style scoped>
  .cadastros{
    display: flex;
    flex-direction: column;    
    overflow: hidden;
    font-family: 'HindMadurai-Regular', sans-serif;
  }
  .cadastros li {
    flex: 1;
    list-style: none;
    background-color: #f1f0ea;
    border: 1px solid #dfded8;
    margin-top:2% ;
    padding:0;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 3vh;
    padding: 2% 1%;
  }
  .cadastros a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-weight: 400;
    white-space: nowrap;
  }
  .cadastros ul :hover {
    background-color: #3da5d9;
    color: #FAF0CA;
  }
  .cadastros .active {
    background-color: #af2bbf;
    color: whitesmoke;
  }

  .cadastros .active a {
    color: #da4167;
  }
  .cadastros a {
      color: #FFF;
  }
</style>