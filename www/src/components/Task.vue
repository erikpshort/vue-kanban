 <template>
    <div>
        <ul class="collection with-header" v-for="(task, i) in tasks">
            <li class="collection-item">{{task.name}}</li>
        </ul>
    </div>
</template>




<script>
    export default {
        name: 'tasks',
        computed:{
            tasks(){
                return this.$root.$data.store.state.tasks
            }
        }
    }

</script>




<style>

</style>

