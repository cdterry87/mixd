import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import categories from './categories'
import favorites from './favorites'
import search from './search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    favorites,
    search
  },
  plugins: [createPersistedState()]
})
