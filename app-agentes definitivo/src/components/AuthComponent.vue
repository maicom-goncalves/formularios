<template>
  <div>
    <template >
      <p class="text-center">Logar com email e senha</p>
    </template>

    <q-form @submit="submitForm">
      <q-input
        v-model="formData.email"
        outlined
        class="q-mb-md"
        type="email"
        label="Email" />
      <q-input
        v-model="formData.password"
        outlined
        class="q-mb-md"
        type="password"
        label="Password" />
      <div class="row">
        <q-space />
        <q-btn
          type="submit"
          color="primary"
          :label="tab"
        />
      </div>
    </q-form>
    <q-dialog v-model="resetPwdDialog">
      <p>Dialogo</p>
    </q-dialog>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "AuthComponent",
  props: ['tab'],
  data (){
    return {
      formData: {
        email: '',
        password: ''
      },
      resetPwdDialog: false
    }
  },
  methods: {
    submitForm () {
      if (this.tab === 'login') {
        this.signInExistingUser(this.formData.email, this.formData.password)
      } else {
        this.createUser(this.formData.email, this.formData.password)
      }
    },
    google () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log('result', result)
        this.$q.notify({message: 'Usuario Logado.'})
        this.$router.push('/home')
      })
      .catch(error => console.log('error',error))
    },
    signInExistingUser (email, password) {
      console.log(email, password)
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          this.$q.notify({message: 'Logado com Sucesso..'})
          this.$router.push('/home')
        })
        .catch(error => { console.log(error)})
    }
  }
}
</script>

<style scoped>

</style>
