<template>
  <div class="agente">
    <img id="icoagente" src="../../img/agente03.png" alt="img-agente"/>
    <h2><b>Nome Agente:</b></h2>
    <p><b>CNS:</b></p>
    <span>Micro Area:</span>
    <br />
    <span>Dia:{{ date }}</span>
    
  </div>
</template>

<script>
export default {
  name: "DateComponent",
  data() {
    return {
      date: "",
    };
  },
  methods: {
    printDate: function () {
      return new Date().toLocaleDateString();
    },
  },
  mounted: function () {
    this.date = this.printDate();
  },
};
</script>
<style scoped>
.agente{
  display: flexbox;
  justify-content: space-between;
  flex-direction: row;
  /*margin-top: 5%;*/
}
.turno {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 7px;
  padding: 3%;
}
.turno label {
  margin-right: 2%;
  line-height: 2%;
  text-align: justify;
}
.turno input {
  border-radius: 50%;
  width: 14px;
  height: 14px;
  border: 3px solid rgb(26, 25, 25);
  margin-right: 5px;
}
#icoagente{
  margin-top:7%;
  width: 40%;
  text-align: justify;
}
</style>