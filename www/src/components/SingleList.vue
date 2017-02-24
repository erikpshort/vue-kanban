<template>
<div class="card-panel teal">
    <span class="white-text">{{list.name}}
                    </span>
    <a class="waves-effect amber darken-4 btn-flat" id="right" @click="deleteList(list)">Del</a>
    <task v-for="(task, i) in tasks" :list="list" :task="task"></task>
</div>

</template>




<script>
    import listForm from './ListForm'
    import task from './Task'
    export default {
        name: 'lists',
        props:['list'],
        components: { listForm, task },
        computed: {
            tasks() { 
                let vm = this
                return this.$root.$data.store.state.tasks.filter(function(task){
                    return task.listId == vm.list._id
                })
            },
        },
        methods: {
            deleteList(list) {
                var x = list._id
                var y = list.boardId
                this.$root.$data.store.actions.deleteList(x, y)
            }
        },
        mounted(){
             this.$root.$data.store.actions.getTasks(this.$root.$data.store.state.activeBoard._id)

        },
    }

</script>




<style>

</style>