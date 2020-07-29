import Vue from 'vue'
import functions from '@/utils/functions'
import * as TYPES from './types'

const namespaced = true

const state = () => ({
  imgs: []
})

const actions = {
  // Получаем весь список пород
  async getImgs ({ commit }, data) {
    try {
      const response = await Vue.axios.get('/breeds/image/random/20')
      commit(TYPES.SET_IMGS, response.data.message)

      return response.data
    } catch (e) {
      return functions.returnError(e)
    }
  }
}

const mutations = {
  [TYPES.SET_IMGS] (state, payload) {
    state.imgs = payload
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
