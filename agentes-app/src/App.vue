<template>
  <div id="app">
    <router-view name="inicio"></router-view>
    <Menu />
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Menu from "./components/template/Menu";
export default {
  name: "App",
  components: { Menu },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
@media screen and (max-width: 600px) {
}
</style>
