<template>
  <div class="pagina">
    <h3 class="data">Dia:{{ date }}</h3>
    <p>{{ this.$route.params.id }}</p>
    <ul>
      <li v-for="morador in moradores" :key="morador['.key']">
        {{ morador.nome }}
      </li>
    </ul>
    <Formulario id="{{this.$route.params.id}}" />
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import Formulario from "./Formulario.vue";
import "../fonts/fontes.css";
export default {
  props: ["id"],
  components: { Formulario },
  data() {
    return {
      date: "",
      ident: this.$route.params.id,
      moradores: [],
    };
  },
  methods: {
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printDia: function (data) {
      return new Date(data).toLocaleDateString();
    },
  },
  mounted: function () {
    this.date = this.printDate();
  },
  created() {
    const db = firebase.firestore();
    this.moradores = [];
    var numeros = [];
    console.log(docRef);
    //receber documento do firebase
    var docRef = db
      .collection("morador")
      .doc(this.$route.params.id)
      .collection("moradores")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.moradores.push((numeros = (doc.id, " => ", doc.data())));
          console.log(this.moradores + numeros);
        });
      });
  },
};
</script>

<style>
.data {
  font-size: 17pt;
  font-family: "Anton", sans-serif;
}
.pagina {
  margin-top: 10%;
  margin-bottom: 5%;
  font-family: "Anton", sans-serif;
}
.icones {
  width: 8%;
  height: 4%;
  margin-right: 4%;
}
.iconbotao {
  width: 18%;
  /*height: 2%;*/
}
.home {
  font-size: 12px;
  background-color: #ff5e5b;
  border-style: none;
  color: #ecebe3;
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  text-align: right;
  margin-right: 0%;
  font-family: "Anton", sans-serif;
}
.voltar {
  font-size: 12px;
  background-color: #ff5e5b;
  border-style: none;
  color: #ecebe3;
  border-radius: 12px;
  padding: 2px;
  cursor: pointer;
  margin-left: 4%;
  text-align: left;
  font-family: "Anton", sans-serif;
}
</style>