<template>
    <form class="col s12" @submit.prevent="createUserBoard">
        <div class="row">
            <div class="input-field col s12">
                <input placeholder="Name" :name="name">
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name:'form',
    data(){
        return{
            name: ''
        }
    },
    methods:{
        createUserBoard(name){
            this.$root.$data.store.actions.createBoard()
        }

    }
}
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }
    
    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active in <2.1.8 */
    
    {
        opacity: 0
    }
</style>