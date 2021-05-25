import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import SearchResultsItem from '@/components/SearchResultsItem'

const favorites = require('@/mocks/favorites.json')
const drinks = require('@/mocks/search.json')

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    favorites: {
      namespaced: true,
      state: {
        favorites
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
        drink: drinks[0]
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

  it('renders with an solid star if drink is a favorite', async () => {
    await wrapper.setProps({
      drink: drinks[4]
    })
    expect(wrapper.find('.fas.fa-star').exists()).toBeTruthy()
  })
})
