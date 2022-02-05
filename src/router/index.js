import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/user/Login'
import Create from '../components/user/Create'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
