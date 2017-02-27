<template>
    <div draggable="true" v-on:dragstart.capture="moving">
        <div class="card-panel white black-text" v-if="!show" v-on:click="show = !show">
            <ul>
                <li>{{task.name}}</li>
            </ul>
        </div>
        <div v-on:click="show = !show" v-if="show">Back</div>
        <addDeleteForm v-if="show" :task="task"></addDeleteForm>
    </div>
</template>




<script>
    import addDeleteForm from './AddDeleteForm'
    export default {
        name: 'tasks',
        props: ['task'],
        components: { addDeleteForm },
        data() {
            return {
                name: '',
                show: false
            }
        },
        methods: {
            moving(event) {
                console.log(this.task)
                event.dataTransfer.setData('text/javascript', JSON.stringify(this.task))
                console.log('We are moving')
            },
        }

    }

</script>




<style>
    .right {
        float: right
    }
</style>