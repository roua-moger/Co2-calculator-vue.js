import Vue from 'vue'
import VueRouter from 'vue-router'
import Co2Calculator from '@/views/Co2Calculator';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Co2',
    component: Co2Calculator
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
