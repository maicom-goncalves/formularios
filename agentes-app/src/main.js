import Vue from 'vue'
import App from './App.vue'
import router from './router';

import VueFirestore from 'vue-firestore';
/*firebase.auth().onAuthStateChanged(async user => {
  if (!app) {
    if (user) {
      await store.dispatch(AUTH_SUCCESS, utils.mapUser(user));
    } else {
      await store.dispatch(AUTH_LOGOUT);
    }*/

Vue.config.productionTip = false

Vue.use(VueFirestore);

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
