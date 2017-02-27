<template>
    <div class="col xs12 s6 m2">
        <div class="card-panel grey">
            <p class="white-text" v-on:click="showthing = !showthing">+ List</p>
            <transition name="bounce">
                <div class="row center" v-if="showthing">
                    <form class="col s12" @submit.prevent="createBoardList(name)" type="submit">
                        <div class="row">
                            <div class="input-field col s12">
                                <div class="card-panel white">
                                    <input type="text" placeholder="New List Name" v-model="name">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'listForm',
        data() {
            return {
                name: '',
                showthing: false,

            }
        },
        methods: {
            createBoardList(name) {
                this.$root.$data.store.actions.createList({ name: this.name, boardId: this.activeBoard._id })
                this.name = ''
                this.$parent.getListsAgain
            },
            showStuff() {
                if (this.showthing === false) {
                    return this.showthing = true
                } else {
                    this.showthing = false
                }
            }

        },
        computed: {
            activeBoard() {
                return this.$root.$data.store.state.activeBoard
            }
        },
    }

</script>

<style>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    
    .bounce-leave-active {
        animation: bounce-out .5s;
    }
    
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }
</style>