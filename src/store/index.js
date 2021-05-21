import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import favorites from './favorites'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    favorites
  },
  plugins: [createPersistedState()]
})
