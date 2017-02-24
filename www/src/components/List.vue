<template>
    <div>
        <div class="col xs12 s6 m2" v-for="(list, i) in lists">
            <div class="card-panel teal">
                <span class="white-text">{{list.name}}
                    </span>
                <a class="waves-effect amber darken-4 btn-flat" id="right" @click="deleteList(list)">Del</a>
            </div>
        </div>
        <listForm></listForm>
    </div>
</template>




<script>
import listForm from './ListForm'
    export default {
        name: 'lists',
        components:{ listForm },
        computed: {
            lists() {
                return this.$root.$data.store.state.lists
            }
        },
        methods:{
            deleteList(list){
                var x = list._id
                var y = list.boardId
                this.$root.$data.store.actions.deleteList(x, y)
            }
        }
    }

</script>




<style>

</style>