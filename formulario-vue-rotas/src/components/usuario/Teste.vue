<template>
  <div class="area">
    teste testado
   <form action="">
      <li v-for="morador in moradores" :key="morador['.key']">
        {{ morador.nome }} {{morador.sobrenome}}=>
         <b>{{morador.aldeia}}</b>
      </li>
    </form>
  </div>
</template>

<script>
import { db } from "../../firebase";
export default {
  data() {
    return {
      moradores:[]
    };
  },
  firestore() {
    return {
      moradores :db.collection("morador").where("aldeia", "==", "Ipegue")
    };
  },
  /*created() {
    this.firestore.moradores
      .where("aldeia", "==", "Bananal")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //console.log(doc.id, " => ", doc.data());
          moradas =doc.data();
          //console.log(this.moradas)
          console.log(doc)
        });

      })
      .catch((error) => {
        console.log(error);
      });
  },*/
};
</script>

<style>
.selecao {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  font-size: 13pt;
}
.opcoes {
  position: relative;
  font-family: Arial;
  background-color: #faa513c9;
  border-radius: 5px;
  width: 70%;
  font-size: 13pt;
}
.opcoes:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 0px;
  width: 0%;
  height: 0;
  border: 2px solid transparent;
  border-color: #e98a15cc transparent transparent transparent;
  border-radius: 5px;
  padding-right: 0%;
}
.opcoes.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}
.select-items div,
.opcoes {
  color: #131313;
  padding: 3% 2%;
  border: 1px solid transparent;
  border-color: transparent transparent #0000001a transparent;
  cursor: pointer;
}
.confirmar {
  font-size: 40px;
  background-color: #5e747f;
  border-style: none;
  color: #ecebe3;
  border-radius: 20px;
  margin: 6px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
  text-align: center;
}
.confirmar:hover {
  background-color: #90e0ef;
  color: black;
}
</style>
