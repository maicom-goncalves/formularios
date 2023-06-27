<template>
  <div>
    <h2><b>{{teste}}</b></h2>
    <h3>Casas</h3>
    <li class="lista" v-for="casa in casas" :key="casa['.key']">
      <router-link
        tag="li"
        :to="{ name: 'morador', params: { id: $route.params.id } }"
        class="item-lista">
        {{ casa['.key']  }}
      </router-link>
    </li>
    <ul class="lista" v-for="casa in casas" :key="casa['.key']">
      <li>{{casa.nome}}</li>
    </ul>
  </div>
</template>
<script>
import { db } from "../../firebase";
export default {
  props: ["id"],
  data() {
    return {
      casas: [],
      teste:this.$route.params.id
    };
  },
  firestore() {
    return {
      casas: db.collection("dia").doc(this.$route.params.id)
      /*casas: db.collection('dia').doc(this.$route.params.id).get().then(querySnapshot => {
        querySnapshot.forEach(collection => {})
      })*/          
    };
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("dia")
        .doc(this.$route.params.id)
        .update(this.dia)
        .then(() => {
          console.log("dia successfully updated!");
          this.$router.push("/morador");
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
    const dbRef = db.collection("dia").doc(this.$route.params.id);
      dbRef
        .get()
        .then((collection) => {
          this.dia = collection.data();
        })
        .catch((error) => {
          console.log(error);
        });
        console.log(dbRef);
    }
};
</script>

<style>
</style>