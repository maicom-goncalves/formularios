<template>
  <div>
    <p>teste testado</p>
    <div>
      <Calendar :eventos="eventos" />
    </div>
    <div>
    <ul>
      <li v-for="dado in dados" :key="dado.id">{{ dado.dataAtual }}</li>
    </ul>
    <p>{{this.tester}}</p>
  </div>
  </div>
</template>

<script>
import {db} from '../../firebase'
import { Calendar } from "vue-calendar";
export default {
  props: ["dados"],
  components: {
    Calendar
  },
  data() {
    return {
      eventos: [],
      visitas:[]
    };
  },
  computed: {
    tester() {
      return this.$store.state.dados;
    }
  },
  created() {
      this.visitas = [];
      let numeros = [];
      console.log(this.casaNumero);
      //receber documento do firebase
      var docRef = db
        .collection("Visita")
        .doc("Água Clara")
        .collection("visitas")
        .where("casa", "==",this.casaNumero)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.visitas.push((numeros = (doc.id, " => ", doc.data())));
            
          });
        });
        console.log(numeros+docRef);
  }
};
</script>

<style>
</style>