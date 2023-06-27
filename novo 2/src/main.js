import Vue from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase';
import store from './store/store'
import VueCalendar from 'vue-calendar';

import VueFirestore from 'vue-firestore';
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueFirestore);
Vue.use(VueCalendar);

var config = {
  //databaseURL: "https://teste-provisorio-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyCvjkel6uxADBbuwiHvUbYCv_lDvy1Uj3I",
  authDomain: "formulario-tcc-d2ea3.firebaseapp.com",
  projectId: "formulario-tcc-d2ea3",
  storageBucket: "formulario-tcc-d2ea3.appspot.com",
  messagingSenderId: "937530099359",
  appId: "1:937530099359:web:03f66a9b330a2c7e1bc4aa"
};

firebase.initializeApp(config);

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router:router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
  