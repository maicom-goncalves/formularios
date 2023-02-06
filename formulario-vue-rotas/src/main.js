import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VCalendar from 'v-calendar';
import firebase from 'firebase';


import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyCvjkel6uxADBbuwiHvUbYCv_lDvy1Uj3I",
  authDomain: "formulario-tcc-d2ea3.firebaseapp.com",
  projectId: "formulario-tcc-d2ea3",
  storageBucket: "formulario-tcc-d2ea3.appspot.com",
  messagingSenderId: "937530099359",
  appId: "1:937530099359:web:03f66a9b330a2c7e1bc4aa"
};

firebase.initializeApp(config);

Vue.use(VueFirestore);
Vue.use(VCalendar);

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router:router,
      render: h => h(App)
    }).$mount('#app');
  }
});

/*
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
*/