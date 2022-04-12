<template>
<div>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="li" active-class="active" exact>
        Início
      </router-link>
      <router-link to="/usuario" tag="li" active-class="active" exact>
        Usuário
      </router-link>
      <router-link to="/cadastro" tag="li" active-class="active" exact>
        Cadastro
      </router-link>
    </ul>
  </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.menu ul {
    display: flex;    
    background-color: #00a6ed;
    list-style: none;
    padding: 3px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    font-size: 27px;
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

.menu .active {
    background-color: #af2bbf;
}

.menu .active a {
    color: #0c0c0c;
}

.menu a {
    color: #FFF;
}
</style>
