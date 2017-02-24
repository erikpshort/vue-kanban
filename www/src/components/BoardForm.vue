<template>
<div class="col xs12 s6 m2">
    <div class="card-panel grey">
        <span class="white-text" v-on:click="show = !show">+ Board
                    </span>
        <transition name="bounce">
            <div class="row center" v-if="show">
                <form class="col s12" @submit.prevent="createUserBoard(name)" type="submit">
                    <div class="row">
                        <div class="input-field col s12">
                            <div class="card-panel white">
                                <input type="text" placeholder="New Board Name" v-model="name">
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
        name: 'boardForm',
        data() {
            return {
                name: '',
                show: false
            }
        },
        methods: {
            createUserBoard(name) {
                this.$root.$data.store.actions.createBoard({ name: this.name })
                this.show = false
                this.name = ''
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