<template>
  <div>
    <nav class="menu">
      <ul>
        <router-link to="/" tag="li" active-class="active" exact>
          INÍCIO
          <img src="../../img/medic5.png" alt="753">
        </router-link>
        <router-link to="/lista" tag="li" active-class="active" exact>
          USUÁRIO
        </router-link>
        <router-link to="/visitas" tag="li" active-class="active" exact>
          VISITAS
        </router-link>
        <router-link to="/visita" tag="li" active-class="active" exact>
          VISITA
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
  .menu ul {
    font-size: 14px;
    justify-content:space-around;
    flex-wrap:wrap;
  }
  .menu li {
    flex: 2;
    margin: 10px;
    border-radius: 98px;
    padding:6%;
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