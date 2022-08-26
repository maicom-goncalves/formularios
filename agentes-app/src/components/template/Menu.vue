<template>
  <div>
    <nav class="menu">
      <ul>
        <router-link to="/lista" tag="li" active-class="active" exact>
          USUÁRIO
          <img src="../../img/medicine2.png" alt="user"/>
        </router-link>
        <router-link to="/visitas" tag="li" active-class="active" exact>
          LISTA DE VISITAS
          <img src="../../img/visit2.png" alt="visitas"/>
        </router-link>
        <router-link to="/visita" tag="li" active-class="active" exact>
          FICHA DE VISITA
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
  background-color: #f1f0ea;
  list-style: none;
  padding: 3px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  font-size: 37px;
  text-align: center;
}
.menu li {
  flex: 1;
  box-shadow: 1px 1px #888888;
 
}
.menu a {
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
}
.menu ul :hover {
  background-color: #F05D5E;
  color: #faf0ca;
}
.menu .active {
  background-color: #2E86AB;
  color: whitesmoke;
}
.menu .active a {
  color: #F05D5E;
}
.menu a {
  color: #fff;
}
.menu img{
  width: 40px;
}
@media screen and (max-width: 600px) {
  .agente img{
    border-radius: 90px;
    width: 15%;
    text-align: center;
  }
  .menu ul {
    font-size: 17px;
    justify-content:space-between;
    flex-wrap:wrap;
    margin: 2px;
  }
  .menu li {
    flex: 2;
    margin: 10px;
    border-radius: 8px;
    padding:6%;
    width: 12%;
    background-color: #00ffc5;
  }
  .menu a {
    padding: 15px 20px;
  }
  /*.menu img{
  width: 40%;
}*/
}
</style>