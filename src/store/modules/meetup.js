import axios from 'axios'

const state = {
  randomNumber: -1,
  comments: [],
  email: null,
  name: null,
  idToken: null
}

const getters = {
  getRandomNumber (state) {
    return state.randomNumber
  },
  getComments (state) {
    return state.comments
  },
  getIdToken (state) {
    return state.idToken
  }
}

const mutations = {
  getRandomFromBackend (state) {
    const path = 'http://localhost:5000/api/random'
    axios.get(path)
      .then(response => {
        state.randomNumber = response.data.randomNumber
      })
      .catch(error => {
        console.log(error)
      })
  },
  uploadComment (state, comment) {
    const path = 'http://localhost:5000/comment'
    axios.post(path, {
      'idToken': state.idToken,
      'comment': comment
    })
      .then()
      .catch(response => { console.log(response) })
  },
  onSignIn (state, payload) {
    state.email = payload.email
    state.name = payload.name
    state.idToken = payload.idToken
    console.log('hi')
  }
}

export default {
  state,
  getters,
  mutations
}
