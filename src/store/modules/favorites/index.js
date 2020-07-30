const namespaced = true

const state = () => ({
  favorites: []
})

const actions = {}

const mutations = {
  updateFav (state) {
    state.favorites = localStorage
  },

  removeFav (state, value) {
    delete state.favorites[value]
  }
}

const getters = {}

export default {
  namespaced,
  actions,
  state,
  mutations,
  getters
}
