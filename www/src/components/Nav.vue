<template>
    <div>
        <nav class="red darken-4">
            <div class="nav-wrapper">
                <div v-if="!is_loggedIn">
                    <a href="#" class="brand-logo black-text"><strong>Jello</strong></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <router-link :to="'/login'" class="black-text"><strong>Log In</strong></router-link>
                        </li>
                        <li>
                            <router-link :to="'/register'" class="black-text"><strong>Register</strong></router-link>
                        </li>
                </div>
                <div v-if="is_loggedIn">
                    <a href="#" class="brand-logo black-text"><strong>Jello</strong></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <router-link :to="'/boards'">Boards</router-link>
                        </li>
                        <!--<li><router-link :to="/logout">Log Out</router-link></li>-->
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
                is_loggedIn: false
            }
        }
    }

</script>