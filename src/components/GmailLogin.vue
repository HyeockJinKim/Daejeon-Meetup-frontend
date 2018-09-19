<template>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
</template>

<script>
import Vue from 'vue'
import GSignInButton from 'vue-google-signin-button'

Vue.use(GSignInButton)
export default {
  name: 'GmailLogin',
  data () {
    return {
      googleSignInParams: {
        client_id: '519972066260-gbu9s1t5bbqnuf44542388c72bnvdktd.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      const profile = googleUser.getBasicProfile() // etc etc
      const idToken = googleUser.getAuthResponse()
      console.log('Name: ' + profile.getName())
      console.log('Email: ' + profile.getEmail())
      const obj = {
        'name': profile.getName(),
        'email': profile.getEmail(),
        idToken
      }
      this.$store.commit('onSignIn', obj)
    },
    onSignInError (error) {
      console.log('Login Error ', error)
    }
  }
}
</script>

<style scoped>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
