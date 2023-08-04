<template>
  <div class="aldeias">
    <p><b>Escolha a aldeia onde trabalha</b></p>
    <router-link class="aldeiaLink" :to="`/formulario/${'Água Clara'}`" exact>
      Água Clara
    </router-link>
    <router-link class="aldeiaLink" :to="`/formulario/${'Bananal'}`" exact>
      Bananal
    </router-link>

    <router-link class="aldeiaLink" :to="`/formulario/${'Buritizinho'}`" exact>
      Buritizinho
    </router-link>

    <router-link class="aldeiaLink" :to="`/formulario/${'Ipegue'}`" exact>
      Ipegue
    </router-link>

    <router-link class="aldeiaLink" :to="`/formulario/${'Morrinho'}`" exact>
      Morrinho
    </router-link>
  </div>
</template>

<script scoped>
//import "../fonts/fontes.css"
</script>

<style scoped>
.aldeias {
  display: flex;
  background-color: #fcffff;
  padding: 5%;
  flex-direction: column;
  text-align: center;
  align-items: stretch;
  /*font-family: 'Righteous', sans-serif;*/
}
.aldeiaB {
  background-color: #04aa6d;
  border-style: none;
  font-weight: bold;
  list-style: none;
  padding: 5% 10%;
  margin-right: 20%;
  font-size: 90%;
  margin-bottom: 6%;
  text-align: left;
  color: #fff;
}
.aldeiaLink {
  list-style: none;
  width: 90%;
  text-decoration: none;
  justify-content: center;
  margin: 1%;
  background-color: #04aa6d;
  border-radius: 10px;
  padding: 5% 10%;
  margin-right: 20%;
  font-size: 90%;
  margin-bottom: 6%;
  font-weight: bold;
  color: antiquewhite;
  font-family:  'Righteous', sans-serif;
}
</style>