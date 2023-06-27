<template>
<div>
  <Menu />
  <div class="usuario">
    <router-view />
  </div>
</div>
  
</template>

<script>
import Menu from '../template/Menu'
export default {
   components:{Menu},
}
</script>

<style>

</style>