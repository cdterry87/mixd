import { searchDrinkByName, searchDrinkByIngredient } from '../services/drinks'
import { SET_SEARCH_RESULTS, GET_SEARCH_RESULTS } from './mutation-types'

const state = {
  results: []
}

const actions = {
  async runSearch({ commit, dispatch }, criteria) {
    const nameSearchResults = await searchDrinkByName(criteria)
    const ingredientSearchResults = await searchDrinkByIngredient(criteria)
    const results = [...nameSearchResults, ...ingredientSearchResults]

    commit(SET_SEARCH_RESULTS, results)
    dispatch('getSearchResults')
  },
  getSearchResults({ commit }) {
    const results = JSON.parse(localStorage.getItem('search')) || []
    commit(GET_SEARCH_RESULTS, results)
  }
}

const mutations = {
  [SET_SEARCH_RESULTS](state, results) {
    localStorage.setItem('search', JSON.stringify(results))
  },
  [GET_SEARCH_RESULTS](state, results) {
    state.results = results
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
