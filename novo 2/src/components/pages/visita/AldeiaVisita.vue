<template>
<div class="VisitaAldeia">
    <h3>Aldeias</h3>
    <li class="aldeias">
      <router-link tag="li" :to="{ name: 'paginaVisita', params: { id: 'Água Clara' } }" class="item-aldeias">
        Água Clara
      </router-link>
    </li>
    <li class="aldeias">
      <router-link tag="li" :to="{ name: 'paginaVisita', params: { id: 'Bananal' } }" class="item-aldeias">
        Bananal
      </router-link>
    </li>
    <li class="aldeias">
      <router-link tag="li" :to="{ name: 'paginaVisita', params: { id: 'Morrinho' } }" class="item-aldeias">
        Morrinho
      </router-link>
    </li>
    <li class="aldeias">
      <router-link tag="li" :to="{ name: 'paginaVisita', params: { id: 'Ipegue' } }" class="item-aldeias">
        Ipegue
      </router-link>
    </li>
</div>
   
</template>

<script>
export default {

}
</script>

<style scoped>
.VisitaAldeia{
    display: flex;
}
.aldeias{
  list-style: none;
  padding: 0px;
  border: 3px solid #db4c40;
  border-radius: 8px;
  overflow: hidden;
  font-size: 23px;
  margin-bottom: 4px;
}

.aldeias.item-aldeias{
  padding: 17px 27px;
  cursor: pointer;
}

.aldeias.item-aldeias:hover {
  background-color: #db4c40;
  color: #faf0ca;
}

.aldeias.item-aldeias:nth-child(n + 2) {
  border-top: 1px solid #faf0ca;
}
</style>