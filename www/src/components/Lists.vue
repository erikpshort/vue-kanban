<template>

  <div class="row">
    <list v-for="(list, i) in lists" :list.sync="list"></list>
    <listForm></listForm>
  </div>

</template>




<script>
  import list from './SingleList'
  import listForm from './ListForm'


  export default {
    name: 'lists',
    props: ['board'],
    components: { list, listForm },
    computed: {
      lists() {
        return this.$root.$data.store.state.lists
      },
    },
    methods: {
      getListsAgain() {
        this.lists = this.$root.$data.store.state.lists
      }
    }
  }

</script>




<style>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>