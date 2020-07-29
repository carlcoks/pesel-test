import Vue from 'vue'
import functions from '@/utils/functions'
import * as TYPES from './types'

const namespaced = true

const state = () => ({
  current: []
})

const actions = {
  // Получаем весь список пород
  async getCurrent ({ commit }, breed) {
    try {
      const response = await Vue.axios.get(`/breed/${breed}/images/random/20`)
      commit(TYPES.SET_CURRENT, response.data.message)

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  }
}

const mutations = {
  [TYPES.SET_CURRENT] (state, payload) {
    state.current = payload
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
