<template>
    <div id="boards">
        <div class="row">
            <h1 class="center">Your Boards</h1>
            <div class="col xs12 s6 m2" v-for="(board, i) in userBoards">
                <div class="card-panel teal" @click="getBoard(board)">
                    <span class="white-text">{{board.name}}
                    </span>
                    <a class="waves-effect amber darken-4 btn-flat" id="right" @click="deleteBoard(board)">Del</a>
                </div>
            </div>
           <boardForm></boardForm>
        </div>
        <collab></collab>
    </div>
</template>




<script>
    import boardForm from './BoardForm'
    import collab from './CollabBoards'
    import router from '../router'
    export default {
        name: 'boards',
        components: { boardForm, collab },
        mounted() {
            this.$root.$data.store.actions.getUserBoards()
            this.$root.$data.store.actions.getCollabBoards()
        },
        computed: {
            userBoards() {
                return this.$root.$data.store.state.userBoards
            },

        },
        methods: {
            getBoard(board){
                this.$root.$data.store.actions.setBoard(board)
                
                router.push('/board')
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