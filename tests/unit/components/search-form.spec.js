import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import SearchForm from '@/components/SearchForm'
import SearchResults from '@/components/SearchResults'
import '@/directives/focus'
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
      },
      actions: {
        runSearch: jest.fn()
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

describe('SearchForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SearchForm, {
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

  it('renders correctly', () => {
    expect(wrapper.find('form').exists()).toBeTruthy()
    expect(wrapper.find('.button').exists()).toBeTruthy()
    expect(wrapper.findComponent(SearchResults).exists()).toBeTruthy()
  })

  it('performs search', async () => {
    expect(wrapper.vm.hasSearchBeenPerformed).toBeFalsy()

    const search = wrapper.find('input[name="search"]')
    const form = wrapper.find('form')

    search.setValue('margarita')

    await form.trigger('submit')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.hasSearchBeenPerformed).toBeTruthy()
  })
})
