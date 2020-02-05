import Vue from 'vue'
import store from '@/store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      },
      {
        path: 'scanner',
        component: () => import(/* webpackChunkName: "about" */ '../components/Scanner.vue'),
      },
      {
        path: 'registrant/:regisId',
        component: () => import(/* webpackChunkName: "about" */ '../components/Registrant.vue'),
      }
    ]
  }
]
const router = new VueRouter({
  routes
})
console.log(store.getters.getToken)
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.getToken) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})
export default router
