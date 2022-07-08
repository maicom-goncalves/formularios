<template>
  <div>
    <nav class="menu">
      <div class="agente">
        <img src="../../img/agente03.png" alt="img-agente">
        <h2>Nome Agente:</h2>
        <span>Micro Area:</span>
        <br/>
        <span>Dia:</span>
      </div>
      <ul>
        <router-link to="/" tag="li" active-class="active" exact>
          INÍCIO
          <img src="../../img/medic5.png" alt="753"/>
        </router-link>
        <router-link to="/" tag="li" active-class="active" exact>
          INÍCIO2
          <img src="../../img/medic5.png" alt="753"/>
        </router-link>
        <router-link to="/lista" tag="li" active-class="active" exact>
          USUÁRIO
          <img src="../../img/medicine2.png" alt="user"/>
        </router-link>
        <router-link to="/visitas" tag="li" active-class="active" exact>
          VISITAS
          <img src="../../img/visit2.png" alt="visitas"/>
        </router-link>
        <router-link to="/visita" tag="li" active-class="active" exact>
          VISITA
        </router-link>
        <router-link to="/lista" tag="li" active-class="active" exact>
          LISTA
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
  background-color: #3da5d9;
  color: #faf0ca;
}
.menu .active {
  background-color: #af2bbf;
  color: whitesmoke;
}
.menu .active a {
  color: #da4167;
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
    padding:5%;
    width: 10%;
    background-color: #60cee263;
  }
  .menu a {
    padding: 15px 20px;
  }
  .menu img{
  width: 40%;
}
}
</style>