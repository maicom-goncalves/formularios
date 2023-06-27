<template>
  <div id="moradoresDiarias">
   
  </div>
</template>

<script>

//import { db } from "../../firebase";

export default {
  
  data() {
    return {
      moradores: [],
    };
  }
};
</script>

<style scoped>
#moradoresDiarias {
  display: flex;
  width: 40%;
  height: 80%;
  flex-direction: column;
  background-color: #8af88fe1;
}
.visita {
  list-style: none;
  padding: 10px;
  background-color: #85c7f2;
  border-radius: 8px;
  font-size: 23px;
  margin: 7px;
  width: 30%;
  height: 24%;
  display: inline-block;
}

.visita .item-visita {
  padding: 1px 1px;
  cursor: pointer;
  width: 97%;
  height: 96%;
}
.visita .item-visita:hover {
  background-color: #08415C;
  color: #faf0ca;
}
.visita .item-visita:nth-child(n + 2) {
  border-top: 1px solid #faf0ca;
}
</style>