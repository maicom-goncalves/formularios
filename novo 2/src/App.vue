<template>
  <div id="app">
    <!--<Loading v-model:="isLoading" />
      <router-view name="usuario"></router-view>
      <transition name="slide-fade" mode="out-in">
       
      </transition>
      -->
       <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      isLoading: true,
    };
  }
};
</script>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  align-content: space-around;
  padding-left: 140px;
  padding-right: 140px;
  background-color: #ffffffec;
}
.footer {
  display: flex;
  justify-content: space-between;
  background-color: #f1f0ea;
  border: 1px solid #dfded8;
  /*box-shadow: 1px 2px #020402a6;*/
  padding: 4px;
}
.voltar{
  background-color: #ebe5c7;
}
.voltar {
  font-size: 40px;
  background-color: #ebe5c7;
  border-style: none;
  color: #313131;
  border-radius: 15px;
  padding: 12px;
  cursor: pointer;
}
.voltar:hover {
  background-color: #48a9a6;
  color: #fff;
}
.verdeagua {
  font-size: 45px;
  background-color: #41eb90;
  border-style: none;
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
  border-style: none;
  color: #ffffff;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
}
.slide-fade-enter-active {
  /*transition: all .5s ease;*/
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
