<template>
    <div class="row">
        <h1 v-if="collab" class="center">Collaborating Boards</h1>
        <div class="col xs12 s6 m2" v-for="(board, i) in collab">
            <router-link :to="'/board'">
                <div class="card-panel teal" @click="getBoard(board)">
                    <span class="white-text">{{board.name}}
                    </span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'collab',
        computed: {
            collab() {
                return this.$root.$data.store.state.collabBoards
            }
        },
        mounted() {
            this.$root.$data.store.actions.getCollabBoards()
        },
        methods: {
            getBoard(board) {
                var x = board._id
                this.$root.$data.store.actions.setBoard(board)
                this.$root.$data.store.actions.getLists(x)
                this.$root.$data.store.actions.getTasks(x)

            }

        }
    }

</script>