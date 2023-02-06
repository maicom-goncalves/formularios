import Vue from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase';

import VueFirestore from 'vue-firestore';
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueFirestore);

var config = {
  apiKey: "AIzaSyBMd7ni7rcxIooxK5PwwzObE5-JUprGPyw",
  authDomain: "teste-provisorio.firebaseapp.com",
  databaseURL: "https://teste-provisorio-default-rtdb.firebaseio.com",
  projectId: "teste-provisorio",
  storageBucket: "teste-provisorio.appspot.com",
  messagingSenderId: "847313210756",
  appId: "1:847313210756:web:c1f2857d621bb2b09261d1",
  measurementId: "G-80ZRKHFYQM"
};

firebase.initializeApp(config);

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router:router,
      render: h => h(App)
    }).$mount('#app');
  }
});
  