<template>
  <div>
      AGENTE LOGADO  {{ user }} <br>
    <q-space />
   <Aldeia />
    <div>
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Sair"
        @click="logout"
        color="primary"
      />
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

</style>
