import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home'
import Button from '@/components/Button'
import RandomDrink from '@/components/RandomDrink'
import SearchForm from '@/components/SearchForm'

const localVue = createLocalVue()
localVue.use(Vuex)

const results = require('@/mocks/search')
const favorites = require('@/mocks/favorites')

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

describe('Home', () => {
  it('renders correctly', () => {
    const wrapper = mount(Home, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.findComponent(Button).exists()).toBeTruthy()
    expect(wrapper.findComponent(RandomDrink).exists()).toBeTruthy()
    expect(wrapper.findComponent(SearchForm).exists()).toBeTruthy()
  })
})
