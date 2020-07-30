import Vue from 'vue'
import functions from '@/utils/functions'
import * as TYPES from './types'

const namespaced = true

const state = () => ({
  current: []
})

const actions = {
  // Получаем весь список пород
  async getCurrent ({ commit }, name) {
    try {
      const response = await Vue.axios.get(`/breed/${name}/images/random/20`)
      commit(TYPES.SET_CURRENT, response.data.message)

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  }
}

const mutations = {
  [TYPES.SET_CURRENT] (state, payload) {
    payload.forEach((item, i) => {
      state.current.push(item)
    })
  },

  [TYPES.RESET] (state) {
    state.current = []
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
