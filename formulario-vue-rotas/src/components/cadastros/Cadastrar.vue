<template>
  <div>
    <Menu />
    <h2>Selecionar Aldeia</h2>
    <div class="usuario-lista">
    <h3>Aldeias</h3>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'cadastro', params: { id: 'Água Clara' } }" class="item-lista">
        Água Clara
      </router-link>
    </li>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'cadastro', params: { id: 'Bananal' } }" class="item-lista">
        Bananal
      </router-link>
    </li>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'cadastro', params: { id: 'Morrinho' } }" class="item-lista">
        Morrinho
      </router-link>
    </li>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'cadastro', params: { id: 'Ipegue' } }" class="item-lista">
        Ipegue
      </router-link>
    </li>
  </div>
  </div>
</template>

<script>
import Menu from '../template/Menu'
export default {
   components: { Menu },
}
</script>

<style>

</style>