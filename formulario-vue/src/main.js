import Vue from 'vue'
import router from './router';
import VueFirestore from 'vue-firestore';

import App from './App.vue'


Vue.config.productionTip = false

Vue.use(VueFirestore);

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
