<template>
    <div class="col xs12 s6 m2" droppable="true" v-on:drop.capture="addTask" ondragover="event.preventDefault()">
        <div class="card-panel teal white-text">
            <span>{{list.name}}
                    </span>

            <br>
            <br>
            <task v-for="(task, i) in tasks" :task="task" draggable="true" v-on:dragstart.capture="moving"></task>
            <taskForm :list="list"></taskForm>
            <a class="right black-text" @click="deleteList(list)">Delete List</a>
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
            addTask(event) {
                var task = JSON.parse(event.dataTransfer.getData('text/javascript'))
                var id = task._id
                var object = { listId: this.list._id}
                var boardId = this.list.boardId
                this.$root.$data.store.actions.changeTask(boardId, object, id)
            },
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
    .right {
        float: right;
        bottom: 0
    }
</style>