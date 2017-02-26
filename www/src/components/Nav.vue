<template>
    <div>
        <nav class="red darken-4">
            <div class="nav-wrapper">
                <div>
                    <router-link :to="'/'"><a class="brand-logo black-text"><strong>Jello</strong></a></router-link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li v-if="!is_loggedIn">
                            <router-link :to="'/login'">
                                <strong>Log In</strong>
                            </router-link>
                        </li>
                        <li  v-if="is_loggedIn">
                            <router-link :to="'/login'">
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
                is_loggedIn: document.cookie
            }
        }
    }

</script>