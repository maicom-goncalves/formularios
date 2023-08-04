<template>
  <div>
    <q-space />
   <Aldeia />
    <div>
      <button class="sair" @click="logout">SAIR</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Aldeia from "./Aldeia.vue"
export default {
components: {Aldeia },
name: "Home",
  data () {
    return {
      user: '',
      email: ''
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        this.user = auth.displayName
        this.email = auth.email
      } else {
        console.log('sem usuario listado')
      }
    })
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      this.$router.push('/')
        .then(() => {
        this.$q.notify({message: 'Usuário deslogado.'})
      })
      .catch(error =>  console.log('error',error))
    }
  }
}
</script>

<style scoped>
.sair{
    font-size: 16pt;
    background-color: #E63946;
    border-style: none;
    color: #ecebe3;
    border-radius: 5px;
    padding: 3%;
    text-align: center;
    box-shadow: 2px #070600c2;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-radius: 0px 0px 10px 10px;
}
</style>
