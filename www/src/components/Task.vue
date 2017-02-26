 <template>
     <div>
    <div class="card-panel white black-text">
        <ul class="collection with-header">
            <li class="collection-item">{{task.name}}</li>
        </ul>
    </div>
    </div>
</template>




<script>
    export default {
        name: 'tasks',
        props:[ 'task' ],
        computed:{

        },
    }

</script>




<style>

</style>

