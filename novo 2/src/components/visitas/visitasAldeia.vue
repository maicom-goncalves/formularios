<template>
  <div class="VisitaAldeia">
    <h3>Aldeias</h3>
    <li class="aldeias">
      <router-link tag="li" :to="{ name: 'listaDeVisitas', params: { id: 'Água Clara' } }" class="item-aldeias">
        Água Clara
      </router-link>
    </li>
    <li class="aldeias">
      <router-link tag="li" :to="{ name: 'listaDeVisitas', params: { id: 'Bananal' } }" class="item-aldeias">
        Bananal
      </router-link>
    </li>
    <li class="aldeias">
      <router-link tag="li" :to="{ name: 'listaDeVisitas', params: { id: 'Morrinho' } }" class="item-aldeias">
        Morrinho
      </router-link>
    </li>
    <li class="aldeias">
      <router-link tag="li" :to="{ name: 'listaDeVisitas', params: { id: 'Ipegue' } }" class="item-aldeias">
        Ipegue
      </router-link>
    </li>
</div>
</template>
<script>

export default {
  computed: {
    aldeias() {
      return this.$store.state.aldeia;
    }
  }
};
</script>

<style scoped>
.VisitaAldeia{
    display: flex;
    flex-direction: column;
}
.aldeias{
  list-style: none;
  background-color: #00E8FC;
  padding: 1%;
  border-radius: 4px;
  overflow: hidden;
  font-size: 83%;
  margin-bottom: 4px;
  width: 80%;
  height: auto;
}

.aldeias.item-aldeias{
  padding: 25% 30%;
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