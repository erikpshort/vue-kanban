 <template>
     <div>
    <div class="card-panel white">
        <ul class="collection with-header">
            <li class="collection-item">{{task.name}}</li>
        </ul>
    </div>
    </div>
</template>




<script>
    export default {
        name: 'tasks',
        props:[ 'list', 'task' ],
        computed:{

        },
        mounted(){
            console.log(list)
        }
    }

</script>




<style>

</style>

