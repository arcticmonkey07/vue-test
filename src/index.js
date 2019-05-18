import './js/'
import './scss/main.scss'
import './css/main.css'

import 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
