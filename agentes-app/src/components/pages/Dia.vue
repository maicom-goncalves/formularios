<template>
  <div class="dataLocal">
    <span class="tempo" v-show="date"
      ><b>{{ date }}</b></span
    >
    <span class="tempo">
      <b> {{ time }}</b></span
    >
  </div>
</template>

<script>
export default {
  name: "DateComponent",
  data: () => ({
    date: "",
    time: "",
    year: "",
  }),
  methods: {
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printTime: function () {
      return new Date().toLocaleTimeString();
    },
    printYear: function () {
      return new Date().getFullYear();
    },
  },
  mounted: function () {
    this.date = this.printDate();
    this.time = this.printTime();
    this.year = this.printYear();
  },
};
</script>
<style scoped>
.dataLocal {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 3%;
}
</style>