<template>
    <div>
        <nav class="red darken-4">
            <div class="nav-wrapper">
                <div v-if="!is_loggedIn">
                    <a href="#" class="brand-logo black-text"><strong>Jello</strong></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="localhost:3000/#/login" class="black-text"><strong>Log In</strong></a></li>
                        <li><a href="localhost:3000/#/register" class="black-text"><strong>Register</strong></a></li>
                </div>
                <div v-if="is_loggedIn">
                    <a href="#" class="brand-logo black-text"><strong>Jello</strong></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="localhost:3000/#/api/boards">Boards</a></li>
                        <li><a href="#">Log Out</a></li>
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