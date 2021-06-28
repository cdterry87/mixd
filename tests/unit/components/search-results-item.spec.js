import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import SearchResultsItem from '@/components/SearchResultsItem'
import '@/filters/uppercase'
import { API_DATA } from '@/constants/apiData'

const favorites = require('@/mocks/favorites.json')
const searchResults = require('@/mocks/search.json')

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    favorites: {
      namespaced: true,
      state: {
        favorites
      },
      actions: {
        addFavorite: jest.fn(),
        removeFavorite: jest.fn()
      }
    },
    categories: {
      namespaced: true,
      state: {
        category: 'drinks'
      },
      getters: {
        data: () => API_DATA['drinks']
      }
    }
  }
})

describe('SearchResultsItem', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SearchResultsItem, {
      localVue,
      store,
      propsData: {
        result: searchResults[0]
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders correctly', () => {
    expect(wrapper.find('.image').exists()).toBeTruthy()
    expect(wrapper.find('.title').exists()).toBeTruthy()
    expect(wrapper.find('.button').exists()).toBeTruthy()
    expect(wrapper.find('.fa-star').exists()).toBeTruthy()
  })

  it('renders with an outlined star if drink is NOT a favorite', () => {
    expect(wrapper.find('.far.fa-star').exists()).toBeTruthy()
  })

  it('renders with a solid star if drink is a favorite', async () => {
    await wrapper.setProps({
      result: searchResults[4]
    })
    expect(wrapper.find('.fas.fa-star').exists()).toBeTruthy()
  })
})
