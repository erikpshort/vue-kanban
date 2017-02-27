<template>
        <div class="card-panel grey">
            <span class="white-text" v-on:click="show = !show">+ Task
                    </span>
            <transition name="bounce">
                <div class="center" v-if="show">
                    <form @submit.prevent="createTask(name)" type="submit">
                        <div class="row">
                            <!--<div class="input-field col s12">-->
                                <div class="card-panel white black-text">
                                    <input type="text" placeholder="New Task Name" v-model="name">
                                </div>
                            <!--</div>-->
                        </div>
                    </form>
                </div>
            </transition>
        </div>
</template>

<script>
    export default {
        name: 'taskForm',
        props:['list'],
        data() {
            return {
                name: '',
                show: false
            }
        },
        methods: {
            createTask(name) {
                this.$root.$data.store.actions.createTask({ name: this.name, boardId: this.activeBoard._id, listId: this.list._id })
                this.show = false
                this.name = ''
            }

        },
        computed: {
            activeBoard(){
                return this.$root.$data.store.state.activeBoard
            }
        }
    }

</script>

<style>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    
    .bounce-leave-active {
        animation: bounce-out .5s;
    }
    .white{
        margin-right:10px;
        padding: .5%
    }
    li{
        padding-left: 5%;
        padding-right: 5%
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