<template>
  <div class="agente">
    <img id="icoagente" src="../../img/agente03.png" alt="img-agente"/>
    <h2><b>Nome Agente:</b></h2>
    <p><b>CNS:</b></p>
    <span>Micro Area:</span>
    <br />
    <span>Dia:{{ date }}</span>
    <div class="turno">
      <label class="opcoes-radio" required>
        manhã
        <input type="radio"  value="manhã" />
      </label>
      <label class="opcoes-radio" required>
        tarde
        <input type="radio"  value="tarde" />
      </label>
    </div>
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
  margin: 5px;
  padding: 3%;
}
.turno label {
  margin-right: 2%;
  line-height: 2%;
  text-align: justify;
}
.turno input {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  border: 3px solid rgb(26, 25, 25);
  margin-right: 5px;
}
#icoagente{
  width: 40%;
  text-align: justify;
}
</style>