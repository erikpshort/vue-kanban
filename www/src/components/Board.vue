<template>
    <div id="boards">
        <div>
            <h1 class="center">{{activeBoard.name}}</h1>
            <lists :board="activeBoard"></lists>
        </div>
    </div>
</template>




<script>
import lists from './Lists'

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
        },mounted(){
            this.$root.$data.store.actions.getLists(this.activeBoard._id)
            this.$root.$data.store.actions.getTasks(this.activeBoard._id)
        }
    }

</script>




<style>

</style>