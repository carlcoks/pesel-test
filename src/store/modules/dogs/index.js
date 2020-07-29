import Vue from 'vue'
import functions from '@/utils/functions'
import * as TYPES from './types'

const namespaced = true

const state = () => ({
  breeds: []
})

const actions = {
  // Получаем весь список пород
  async getBreeds ({ commit }, data) {
    try {
      const response = await Vue.axios.get('/breeds/list/all')
      commit(TYPES.SET_BREEDS, response.data.message)

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  }
}

const mutations = {
  [TYPES.SET_BREEDS] (state, payload) {
    state.breeds = payload
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
