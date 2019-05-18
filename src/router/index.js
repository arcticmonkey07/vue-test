import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home.vue'
import History from './../components/History.vue'
import Card from './../components/Card.vue'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/history',
    name: 'history',
    component: History
  }, {
    path: '/card',
    name: 'card',
    component: Card
  }]
})
