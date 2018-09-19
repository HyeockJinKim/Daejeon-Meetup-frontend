import Vue from 'vue'
import Vuex from 'vuex'
import meetup from './modules/meetup'

Vue.use(Vuex)

// meet up.vue component

export const store = new Vuex.Store({
  modules: {
    meetup
  }
})
