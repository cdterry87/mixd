import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drink/:id',
    name: 'Drink',
    component: () => import('../views/Drink'),
    props: true
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../views/Favorites')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
