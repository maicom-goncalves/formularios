<template>
<div>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="li" active-class="active" exact>
        INÍCIO
      </router-link>
      <router-link to="/usuario" tag="li" active-class="active" exact>
        MORADORES
      </router-link>
      <router-link to="/cadastros" tag="li" active-class="active" exact>
        CADASTROS
      </router-link>
      <router-link to="/" tag="li" active-class="active" exact>
        VISITAS DIARIAS
      </router-link>
    </ul>
  </nav>
  </div>
</template>
<script>
import "../../fonts/fontes.css";
export default {

};
</script>
<style >
.menu ul {
    display: flex;    
    background-color: #f1f0ea;
    list-style: none;
    padding: 3px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    font-size: 37px;
    text-align: center;
    font-family: 'Righteous', cursive;;
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
