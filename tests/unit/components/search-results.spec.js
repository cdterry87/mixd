import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import SearchResults from '@/components/SearchResults'
import SearchResultsItem from '@/components/SearchResultsItem'
import '@/filters/uppercase'

const results = require('@/mocks/search')
const favorites = require('@/mocks/favorites')
const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    search: {
      namespaced: true,
      state: {
        results
      }
    },
    favorites: {
      namespaced: true,
      state: {
        favorites
      }
    }
  }
})

describe('SearchResults', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SearchResults, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders initial state correctly', () => {
    expect(wrapper.find('[data-testid="search-init"]').exists()).toBeTruthy()
  })

  it('renders empty search correctly', async () => {
    await wrapper.setProps({
      hasSearchBeenPerformed: true
    })
    expect(wrapper.find('[data-testid="search-empty"]').exists()).toBeTruthy()
  })

  it('renders results list correctly', async () => {
    await wrapper.setProps({
      hasSearchBeenPerformed: true,
      results
    })
    expect(wrapper.findAllComponents(SearchResultsItem).length).toEqual(
      results.length
    )
  })
})
