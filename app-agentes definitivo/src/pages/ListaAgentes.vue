<template>
  <div>
     <p>deu certo</p>
    <h3>Lista Agentes</h3>
    <h2>Ache seu nome</h2>
    <h4>{{ id }}</h4>
   
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      date: "",
    };
  }
};
</script>

<style scoped>
.agentes {
  list-style: none;
  margin-top:1%;
  border: 3px solid #ffffff;
  background-color: #ffffff;
  /*box-shadow: 1px 1px #7e6e6c, 0.5px 0.5px #868281, 1px 1px #0896a8;*/
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 4px; 
  
}
.item-agente{
  padding: 2px 2px;
}
button{
  background-color: #fafbfc;
  padding: 0px;
  font-size: 17px;
  border-block: 1px solid #7e6e6c;
  box-shadow: 1px 1px #7e6e6c, 0.5px 0.5px #868281, 1px 1px #0896a8;
  color:#161616e7;
  padding: 2% 30%;
  text-align: center; 
}
</style>