<template>
    <div class="row center">
        <div class="col s12 offset-m2 m8" v-if="!loggedOut">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">Log In</span>
                    <div class="row center">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input placeholder="Email" v-model="email" type="email" class="validate">
                                    <label for="email"></label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input placeholder="Password" v-model="password" type="password" class="validate">
                                    <label for="password"></label>
                                </div>
                            </div>
                            <div>
                                <button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="logIn(email, password)">Login
                                <i class="material-icons right">send</i>
                            </button><br><br>
                                <span>Need to Remember?<router-link to="/register"><br>Register here</router-link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <router-link :to="'/'" v-if="loggedOut"><h1>You are Currently logged In!<br>
        Click here to see your Boards</h1></router-link>
    </div>

</template>




<script>
    export default {
        name: 'register',

        data() {
            return {
                email: '',
                password: ''
            }
        }, 
        methods: {
            logIn(email, password) {
                var user = { email: email, password: password}
                this.$root.$data.store.actions.logIn(user)
                this.$router.push('/')
            }
        },
        computed:{
            loggedOut(){
                this.$root.$data.store.state.loggedOut
            }
        }
    }

</script>




<style>
    #center {
        text-align: center
    }
</style>