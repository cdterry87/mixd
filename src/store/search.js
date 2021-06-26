import { apiService } from '../services/api'
import {
  SET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS
} from './mutation-types'

const state = {
  results: []
}

const actions = {
  async runSearch({ commit, dispatch }, { criteria, category }) {
    const searchByNameResults = await apiService.searchByName(
      criteria,
      category
    )
    const searchByIngredientResults = await apiService.searchByIngredient(
      criteria,
      category
    )
    const results = [...searchByNameResults, ...searchByIngredientResults]

    commit(SET_SEARCH_RESULTS, results)
    dispatch('getSearchResults')
  },
  getSearchResults({ commit }) {
    const results = JSON.parse(localStorage.getItem('search')) || []
    commit(GET_SEARCH_RESULTS, results)
  },
  clearSearchResults({ commit }) {
    commit(CLEAR_SEARCH_RESULTS)
  }
}

const mutations = {
  [SET_SEARCH_RESULTS](state, results) {
    localStorage.setItem('search', JSON.stringify(results))
  },
  [GET_SEARCH_RESULTS](state, results) {
    state.results = results
  },
  [CLEAR_SEARCH_RESULTS](state) {
    state.results = []
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
