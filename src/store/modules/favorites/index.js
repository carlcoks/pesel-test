const namespaced = true

const state = () => ({
  favorites: []
})

const actions = {
  async getFavorites ({ commit }) {
    try {
      commit('updateFav')
    } catch (e) {
    }
  },

  getRemoveItem ({ commit }, value) {
    try {
      commit('removeFav', value)
    } catch (e) {
    }
  }
}

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
