// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import io from 'socket.io-client'
// import axios from 'axios'
import store from './store'



// window.api = axios.create({
//   baseURL: 'http://localhost:3000/api/',
//   timeout: 1000,
//   witheCredentials: true
// })

// let socket = io('http://localhost:3000')

// socket.on('CONNECTED', function (data) {
//   console.log(data)

// })

// socket.emit('update', { data: 'blarg', boardId: '3289748320' })





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
    store
  }
})