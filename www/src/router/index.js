import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Reg from 'components/Registration'
import Login from 'components/Login'
import Board from 'components/Board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Reg
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/boards',
      name: 'boards',
      component: Board
    }

  ]
})
