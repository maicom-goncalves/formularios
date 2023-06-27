<template>
<div>
  <nav class="menu">
    <ul>
      <router-link to="/inicio" tag="li" active-class="active" exact>
        INICIO
      </router-link>
      <router-link to="/usuario" tag="li" active-class="active" exact>
        MORADORES
      </router-link>
      <router-link to="/cadastros" tag="li" active-class="active" exact>
        CADASTROS
      </router-link>
      <router-link to="/paginaVisita" tag="li" active-class="active" exact>
        VISITAS
      </router-link> 
      <button class="botao" @click="sair">SAIR</button>
    </ul>
  </nav>
  </div>
</template>
<script>
import "../../fonts/fontes.css";
import firebase from 'firebase';
export default {
   methods: {
    sair: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
  },
};
</script>
<style>
.botao{
  padding:0% 3%;
  background-color: #f1f0ea;
  font-family: 'Righteous', cursive;
  cursor: pointer;
  font-size: 33px;
  border-style: none;
  text-align: center;
}
.botao :hover {
    background-color: #3da5d9;
    color: #FAF0CA;
}
.menu ul {
    display: flex;    
    background-color: #f1f0ea;
    border: 1px solid #dfded8;
    box-shadow: 1px 2px #020402a6;
    list-style: none;
    padding: 3px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    font-size: 33px;
    text-align: center;
    font-family: 'Righteous', cursive;
}
.menu li {
    flex: 1;
}
.menu a {
    display: flex;
    justify-content: center;
    padding: 15px 40px;
    text-decoration: none;
    font-weight: 600;
    white-space: nowrap;
}
.menu ul :hover {
    background-color: #3da5d9;
    color: #FAF0CA;
}
.menu .active {
    background-color: #af2bbf;
    color: whitesmoke;
}

.menu .active a {
    color: #da4167;
}

.menu a {
    color: #FFF;
}
</style>
