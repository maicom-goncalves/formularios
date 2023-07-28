<template>
  <div>
    <Menu />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Menu from "../template/Menu.vue";

export default {
  components: { Menu },
};
</script>
<style>
</style>
  