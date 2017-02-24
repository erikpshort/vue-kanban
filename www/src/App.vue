<template>
  <div class="app">
    <error></error>
    <navBar></navBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import error from './components/error'
  import navBar from './components/nav'

  export default {

    name: 'app',
    components: {error, navBar}
  }

</script>

<style>
  #app {
    font-size:10px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>