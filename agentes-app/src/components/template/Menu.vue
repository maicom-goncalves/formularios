<template>
  <div>
    <nav class="menu">
      <ul>
        <router-link to="/pagina" tag="li" active-class="active" exact>
          LISTA DE VISITAS
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

.menu .active {
  background-color: #006e90;
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
    padding:12%;
    width: 8%;
    border-radius: 20px;
    background-image: linear-gradient(to right, #56c2ec , #57a0bde0,#5897af9f);
  }
  .menu a {
    padding: 15px 20px;
  }
  /*.menu img{
  width: 40%;
}*/
}
</style>
