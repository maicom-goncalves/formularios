import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VCalendar from 'v-calendar';


import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false

Vue.use(VueFirestore);
Vue.use(VCalendar);

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
