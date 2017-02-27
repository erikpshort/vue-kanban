<template>
    <div>
        <nav class="teal">
            <div class="nav-wrapper">
                <div>
                    <router-link :to="'/'"><a class="brand-logo black-text"><strong>Jello</strong></a></router-link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li v-if="loggedOut">
                            <router-link :to="'/login'">
                                <strong>Log In</strong>
                            </router-link>
                        </li>
                        <li v-if="!loggedOut" v-on:click="logOut">
                            <router-link :to="'/'">
                                <strong>Log Out</strong>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="'/register'">
                                <strong>Register</strong>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'navBar',
        data() {
            return {
            }
        },
        methods: {
            logOut() {
                this.$root.$data.store.actions.logOut()
                this.$router.push('/login')
            }
        },
        computed:{
            loggedOut(){
            return this.$root.$data.store.state.loggedOut
            }
        }
    }

</script>