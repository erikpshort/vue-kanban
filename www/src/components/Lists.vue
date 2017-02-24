<template>
    <div>
        <div class="col xs12 s6 m2">
        </div>
        <list v-for="(list, i) in lists" :list="list" ></list>
        <listForm></listForm>
    </div>
</template>




<script>
    import listForm from './ListForm'
    import list from './SingleList'


    export default {
        name: 'lists',
        props:['board'],
        components: { listForm, list },
        computed: {
            lists() {
                return this.$root.$data.store.state.lists
            },
        }
    }

</script>




<style>

</style>