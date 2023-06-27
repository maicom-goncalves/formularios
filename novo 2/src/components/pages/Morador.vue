<template>
   <div>
    <h2><b>{{teste}}</b></h2>
    <h3>moradores</h3>
    <table id="customers" @submit.prevent="onUpdateForm" class="dados-usuario">
        <p>{{morador.motivo}}</p>
        <p>{{morador.sobrenome}}</p>
    </table>
  
  </div>
</template>
<script>
import { db } from "../../firebase";    
export default {
    props: ["id"],
    data() {
        return {
        teste:this.$route.params.id,
        morador: {},
        };
    },
    firestore() {
        return {
        morador: db.collection("dia")
        /*moradors: db.collection('dia').doc(this.$route.params.id).get().then(querySnapshot => {
            querySnapshot.forEach(collection => {})
        })*/          
        };
    },
    methods: {
    printDia: function (data) {
      return new Date(data).toLocaleDateString();
    },
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("dia").doc("Bananal").collection("2233").doc(this.$route.params.id)
        .update(this.morador)
        .then(() => {
          console.log("morador successfully updated!");
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  created() {
    let dbRef = db.collection("dia").doc("Bananal").collection("2233").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.morador = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
}
</script>

<style>

</style>