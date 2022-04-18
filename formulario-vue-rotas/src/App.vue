<template>
  <div id="app">
    <router-view name="usuario"></router-view>
	<Menu/>
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Menu from './components/template/Menu.vue'
export default {
  components: { Menu},};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  align-content: space-around;
  padding-left: 140px;
  padding-right: 140px;
  background-color: #ffffffa2;
}
.verdeagua {
  font-size: 45px;
  background-color: #41eb90;
  border-style:none;
  color: #ecebe3;
  border-radius: 20px;
  margin: 6px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
}
.azulclaro {
  font-size: 45px;
  background-color: #56d3e4;
  border-style:none;
  color: #ffffff;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
}

</style>
