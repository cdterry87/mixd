import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Favorites from '@/views/Favorites'
import Card from '@/components/Card'
import favoritesStore from '@/store/favorites'
import '@/filters/uppercase'

const localVue = createLocalVue()
localVue.use(Vuex)

const favorites = require('@/mocks/favorites')

const store = new Vuex.Store({
  modules: {
    categories: {
      namespaced: true,
      state: {
        category: 'drinks'
      }
    },
    favorites: {
      namespaced: true,
      state: {
        favorites
      },
      getters: {
        totalFavorites: favoritesStore.getters.totalFavorites,
        favoritesByCategory: () => favorites.drinks
      }
    }
  }
})

describe('Favorites', () => {
  it('renders correctly', () => {
    const wrapper = mount(Favorites, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    const cards = wrapper.findAllComponents(Card)
    const total = wrapper.find('[data-testid="total-favorites"]')

    expect(cards.length).toBe(favorites.drinks.length)
    expect(total.text()).toBe(String(favorites.drinks.length))
  })
})
