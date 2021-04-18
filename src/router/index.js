import Vue from 'vue'
import VueRouter from 'vue-router'
import Co2Calculator from '@/views/Co2Calculator';
import Todo from '@/components/Todo'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Co2',
    component: Co2Calculator
  },
  {
    path: 'todo',
    name: 'Todo',
    component: Todo
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
