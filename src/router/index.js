import Vue from 'vue'
import VueRouter from 'vue-router'
//import ComponentName from '@/components/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Connexion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Connexion.vue')
  },
  {
    path: '/CreationDeCompte',
    name: 'CreationDeCompte',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreationDeCompte.vue')
  },
/*  {
    path: '',
    name: '',
     route level code-splitting
     this generates a separate chunk (about.[hash].js) for this route
     which is lazy-loaded when the route is visited.
    component: () => import( webpackChunkName: "about"  '../views/About.vue')
  }
*/  
]

const router = new VueRouter({
  routes
})

export default router
