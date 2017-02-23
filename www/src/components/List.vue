<template>
    <div>
        <h1>hello</h1>
        <ul class="collection with-header" v-for="(list, i) in lists">
            <li class="collection-header">
                <h4>First Names</h4>
            </li>
            <li class="collection-item">{{list.name}}</li>
        </ul>
    </div>
</template>




<script>
    export default {
        name: 'lists',
        data() {
            return {
                lists: [
                    {
                        "name": 'Back Log',
                        "tasks": ['Task 1', 'Task 2', 'Task 3']
                    }, {
                        "name": 'Ready',
                        "tasks": ['Task 1', 'Task 2', 'Task 3']
                    }, {
                        "name": 'In Progress',
                        "tasks": ['Task 1', 'Task 2', 'Task 3']
                    }
                ],
            }
        }
    }

</script>




<style>

</style>