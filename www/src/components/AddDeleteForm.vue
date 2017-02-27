<template>
    <div class="card-panel grey">
        <transition name="bounce">
            <div class="row center">
                    <div class="row">
                        <div class="card-panel white">
                            <input type="text" :placeholder="task.name" v-model="name" class="black-text">
                        </div>
                    </div>
                <a class="left black-text" @click="changeTask(task, name)">Change Task</a>////
            <a class="right black-text" @click="deleteTask(task)">Delete Task</a>
            </div>
        </transition>
    </div>
</template>




<script>
    export default {
        props:['task'],
        data() {
            return {
                name:''
            }
        },
        methods: {
            deleteTask(task) {
                var x = task._id
                var y = task.boardId
                this.$root.$data.store.actions.deleteTask(x, y, task)
            },
            changeTask(task, name) {
                console.log(task)
                var object = { name: name }
                var id = task._id
                var boardId = task.boardId
                this.$root.$data.store.actions.changeTask(boardId, object, id)
                this.$parent.show = false
            }
        }
    }

</script>




<style>
.grey{
    padding: 2%
}
</style>