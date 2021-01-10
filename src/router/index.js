import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    components: {
      default: () => import('../views/Home'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/',
    name: 'landingpage',
    components: {
      default: () => import('../views/landingpage'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    components: {
      default: () => import('../views/About'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  },
  {
    path: '/partner',
    name: 'partner',
    components: {
      default: () => import('../views/partner'),
      nav: () => import('../components/topnav'),
      footer: () => import('../components/footer')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  hash: false,
  routes
})

export default router
