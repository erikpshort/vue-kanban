<template>
  <div class="row center">
    <div class="col s12 offset-m2 m8">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Register</span>
          <div class="row center">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input placeholder="First Name" id="first_name" type="text" class="validate">
                  <label for="first_name"></label>
                </div>
                <div class="input-field col s6">
                  <input placeholder="Last Name" id="last_name" type="text" class="validate">
                  <label for="last_name"></label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input placeholder="Password" id="password" type="password" class="validate">
                  <label for="password"></label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input placeholder="Email" id="email" type="email" class="validate">
                  <label for="email"></label>
                </div>
              </div>
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
              </button><br><br>
              <span>Already a user?<router-link to="/login"><br>Login here</router-link></span>
            </form>
          </div>

        </div>
        <div class="card-action">
        </div>
      </div>
    </div>
  </div>

</template>




<script>
  export default {
    name: 'register',

    data() {
      return {

      }
    }
  }

</script>




<style>
  #center {
    text-align: center
  }
</style>