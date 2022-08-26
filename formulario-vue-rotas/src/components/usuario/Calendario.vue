<template>
  <div>
    <v-calendar :rows="1" :step="2" />
    <v-date-picker v-model="date" />
  </div>
</template>

<script>
//const calendar = this.$refs.calendar;
export default {
  methods: {
      
      //await calendar.move(new Date());
  }
  


};
</script>

<style>
</style>