import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Favorites from '@/views/Favorites'
import Card from '@/components/Card'
import favoritesStore from '@/store/favorites'

const localVue = createLocalVue()
localVue.use(Vuex)

const favorites = require('@/mocks/favorites')

const store = new Vuex.Store({
  modules: {
    favorites: {
      namespaced: true,
      state: {
        favorites
      },
      getters: {
        totalFavorites: favoritesStore.getters.totalFavorites
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

    expect(cards.length).toBe(favorites.length)
    expect(total.text()).toBe(String(favorites.length))
  })
})
