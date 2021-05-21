import {
  GET_FAVORITES,
  SAVE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from './mutation-types'

const state = {
  favorites: []
}

const getters = {
  totalFavorites: state => {
    return state.favorites.length
  }
}

const actions = {
  getFavorites({ commit }) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    commit(GET_FAVORITES, favorites)
  },
  addFavorite({ commit }, { idDrink, strDrink, strAlcoholic, strDrinkThumb }) {
    commit(ADD_FAVORITE, {
      id: idDrink,
      title: strDrink,
      subtitle: strAlcoholic,
      image: strDrinkThumb,
      date: new Date()
    })
    commit(SAVE_FAVORITES)
  },
  removeFavorite({ commit }, id) {
    commit(REMOVE_FAVORITE, id)
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
  [ADD_FAVORITE](state, { id, title, subtitle, image, date }) {
    state.favorites.push({
      id,
      title,
      subtitle,
      image,
      date
    })
  },
  [REMOVE_FAVORITE](state, id) {
    const favoriteIndex = state.favorites.findIndex(favorite => {
      return favorite.id === id
    })
    if (favoriteIndex > -1) {
      state.favorites.splice(favoriteIndex, 1)
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
