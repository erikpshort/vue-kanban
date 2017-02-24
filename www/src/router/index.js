import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Reg from 'components/Registration'
import Login from 'components/Login'
import Boards from 'components/Boards'
import Board from 'components/Board'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
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
      path: '/',
      name: 'boards',
      component: Boards
    },
    {
      path: '/board',
      name: 'board',
      component: Board
    },
    //     {
    //   path: '/lists',
    //   name: 'lists',
    //   component: List
    // },

  ]
})
