<template>
    <div id="boards">
        <div class="row">
            <h1 class="center">Your Boards</h1>
            <div class="col s12 m4" v-for="(board, i) in userBoards">
                <div class="card-panel teal">
                    <span class="white-text">{{board.name}}
                    </span>
                </div>
            </div>
            <div class="col s12 m4">
                <div class="card-panel grey">
                    <span class="white-text" v-on:click="show = !show">+ Board
                    </span>
                    <transition name="fade">
                        <div class="row center" v-if="show">
                        </div>
                    </transition>
                </div>
            </div>
        </div>

        <!--<div class="row">
            <h1 v-if="collab" class="center">Collaborating Boards</h1>
            <div class="col s12 m4" v-for="(board, i) in collab">
                <div class="card-panel teal">
                    <span class="white-text">{{board.name}}
                    </span>
                </div>
            </div>
            <div class="col s12 m4">
                <div class="card-panel grey">
                    <span class="white-text">+ Board
                    </span>
                </div>
            </div>
        </div>-->
    </div>
</template>




<script>
    export default {
        name: 'boards',
        data() {
            return {
                show: false
            }
        },
        mounted() {
            this.$root.$data.store.actions.getUserBoards()
        },
        computed: {
            userBoards() {
                return this.$root.$data.store.state.userBoards
            }
        },
        methods: {
            createBoard() {
                this.$root.$data.store.actions.getUserBoards()
            }
        }
    }

</script>




<style>
    .center {
        text-align: center
    }
    

</style>