import * as firebase from 'firebase'

var config = {
    // firebase config
    apiKey: "AIzaSyCvjkel6uxADBbuwiHvUbYCv_lDvy1Uj3I",
    authDomain: "formulario-tcc-d2ea3.firebaseapp.com",
    projectId: "formulario-tcc-d2ea3",
    storageBucket: "formulario-tcc-d2ea3.appspot.com",
    messagingSenderId: "937530099359",
    appId: "1:937530099359:web:03f66a9b330a2c7e1bc4aa"
}

firebase.initializeApp(config)

var authService = {

  firebase: firebase,
  user: null,

  authenticated () {
    if (this.user == null) {
      return false
    } else {
      return !this.user.isAnonymous
    }
  },
  setUser (user) {
    this.user = user
  },

  login (email, password) {
    return this.firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setUser(user)
      })
  },

  logout () {
    this.firebase.auth().signOut().then(() => {
      console.log('logout done')
    })
  }
}
firebase.auth().onAuthStateChanged(user => {
  authService.setUser(user)
})

export default authService