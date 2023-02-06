<template>
  <div>
     <h3>Aldeias</h3>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'paginaVisita', params: { id: 'Água Clara' } }" class="item-lista">
        Água Clara
      </router-link>
    </li>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'paginaVisita', params: { id: 'Bananal' } }" class="item-lista">
        Bananal
      </router-link>
    </li>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'paginaVisita', params: { id: 'Morrinho' } }" class="item-lista">
        Morrinho
      </router-link>
    </li>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'paginaVisita', params: { id: 'Ipegue' } }" class="item-lista">
        Ipegue
      </router-link>
    </li>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>