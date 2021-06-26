import {
  GET_FAVORITES,
  SAVE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from './mutation-types'

import { API_DATA } from '../constants/apiData'

const favorites = {
  drinks: [],
  meals: []
}

const state = {
  favorites
}

const getters = {
  totalFavorites: state => {
    return state.favorites.length
  },
  favoritesByCategory: (state, _, rootState) => {
    const category = rootState.categories.category
    return state.favorites[category]
  }
}

const actions = {
  getFavorites({ commit }) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    commit(GET_FAVORITES, favorites)
  },
  addFavorite({ commit, rootState }, result) {
    const category = rootState.categories.category
    const { id, title, subtitle, image } = API_DATA[category]

    commit(ADD_FAVORITE, {
      category,
      id: result[id],
      title: result[title],
      subtitle: result[subtitle],
      image: result[image],
      date: new Date()
    })
    commit(SAVE_FAVORITES)
  },
  removeFavorite({ commit, rootState }, id) {
    const category = rootState.categories.category
    commit(REMOVE_FAVORITE, { category, id })
    commit(SAVE_FAVORITES)
  }
}

const mutations = {
  [GET_FAVORITES](state, favorites) {
    state.favorites = favorites
  },
  [SAVE_FAVORITES](state) {
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  },
  [ADD_FAVORITE](state, { category, id, title, subtitle, image, date }) {
    state.favorites[category].push({
      id,
      title,
      subtitle,
      image,
      date
    })
  },
  [REMOVE_FAVORITE](state, { category, id }) {
    const favoriteIndex = state.favorites[category].findIndex(favorite => {
      return favorite.id === id
    })
    if (favoriteIndex > -1) {
      state.favorites[category].splice(favoriteIndex, 1)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
