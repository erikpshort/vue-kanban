<template>
    <div id="boards">
        <div class="row">
            <h1 class="center">{{activeBoard.name}}</h1>
            <lists></lists>
        </div>
    </div>
</template>




<script>
import lists from './List'
    export default {
        name: 'board',
        components: {lists},
        data() {
            return {

            }
        },
        computed:{
            activeBoard(){
                return this.$root.$data.store.state.activeBoard
            }
        },
    }

</script>




<style>

</style>