<template>
    <div class="col xs12 s6 m2">
        <div class="card-panel teal white-text">
            <span>{{list.name}}
                    </span>
            <a class="waves-effect amber darken-4 btn-flat" id="right" @click="deleteList(list)">Del</a>
            <br>
            <br>
            <task v-for="(task, i) in tasks" :task="task"></task>
            <taskForm :list="list"></taskForm>
        </div>
    </div>
</template>




<script>
    import task from './Task'
    import taskForm from './TaskForm'

    export default {
        name: 'lists',
        props: ['list'],
        components: { task, taskForm },
        computed: {
            tasks() {
                let vm = this
                return this.$root.$data.store.state.tasks.filter(function (task) {
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
        mounted() {
            this.$root.$data.store.actions.getTasks(this.$root.$data.store.state.activeBoard._id)

        },
    }

</script>




<style>

</style>