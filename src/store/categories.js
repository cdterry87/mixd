import { CHANGE_CATEGORY } from './mutation-types'
import { CATEGORIES, API_DATA } from '../constants'

const state = {
  category: CATEGORIES.DRINKS
}

const getters = {
  data: state => {
    return API_DATA[state.category]
  }
}

const actions = {
  changeCategory({ commit }) {
    commit(CHANGE_CATEGORY)
  }
}

const mutations = {
  [CHANGE_CATEGORY](state) {
    state.category =
      state.category === CATEGORIES.MEALS ? CATEGORIES.DRINKS : CATEGORIES.MEALS
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
