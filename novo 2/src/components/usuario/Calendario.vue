<template>
  <div>
    <!-- <v-calendar :rows="1" :step="2 " show-weeknumbers />-->
    <div>
      <v-calendar is-expanded />
    </div>
    <v-date-picker :rows="4" :step="2" columns="5"
      show-weeknumbers  attributes=attrs()>
    </v-date-picker>
  </div>
</template>

<script>
//import { SetupCalendar } from 'v-calendar';
import { db } from "../../firebase";  
//const calendar = this.$refs.calendar;
export default {
  
firestore() {
      return {
        visitas: db.collection("visitas")
      };
    },
    computed: {
    attrs() {[
      ...this.visitas.map(visitas => ({
          dates: visitas.dataAtual
        })),
      ];
    },
  },
  methods: {
    
      //await calendar.move(new Date());
  }
};
</script>

<style>
</style>