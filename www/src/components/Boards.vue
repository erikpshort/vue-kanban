<template>
    <div id="boards">
        <div class="row">
            <h1 class="center">Your Boards</h1>
            <div class="col xs12 s6 m2" v-for="(board, i) in userBoards">
                <router-link :to="'/board'"><div class="card-panel teal" @click="getBoard(board)">
                    <span class="white-text">{{board.name}}
                    </span>
                    <a class="waves-effect amber darken-4 btn-flat" id="right" @click="deleteBoard(board)">Del</a>
                </div>
                </router-link>
            </div>
           <boardForm></boardForm>
        </div>
        <collab></collab>
    </div>
</template>




<script>
    import boardForm from './BoardForm'
    import collab from './CollabBoards'
    export default {
        name: 'boards',
        components: { boardForm, collab },
        mounted() {
            this.$root.$data.store.actions.getUserBoards()
        },
        computed: {
            userBoards() {
                return this.$root.$data.store.state.userBoards
            },

        },
        methods: {
            getBoard(board){
                var x = board._id
                this.$root.$data.store.actions.getBoard(x)
                console.log(board)
                this.$root.$data.store.actions.getLists(x)
                
            },
            createBoard() {
                this.$root.$data.store.actions.getUserBoards()
            },
            deleteBoard(board) {

                let x = board._id
                this.$root.$data.store.actions.deleteBoard(x)
                
            }
        }
    }

</script>




<style>
    .center {
        text-align: center
    }
    
    #right {
        float: right;
    }
</style>