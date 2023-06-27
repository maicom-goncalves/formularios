<template>
  <div>
    <Menu />
    <router-view />
   
  </div>
</template>
<script>
import Menu from "../template/Menu.vue";
//import EventBus from "../../EventBus"
//import firebase from "firebase";
export default {
  //props: ["testando"],
  components: { Menu }
};
</script>
<style>
</style>
  