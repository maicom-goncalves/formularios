<template>
  <div>
    <Menu />
    <div class="usuario">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Menu from "../template/Menu";
export default {
  components: { Menu },
};
</script>

<style>
</style>