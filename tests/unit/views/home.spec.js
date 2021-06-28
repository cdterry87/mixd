import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home'
import Button from '@/components/Button'
import RandomItem from '@/components/RandomItem'
import SearchForm from '@/components/SearchForm'
import '@/directives/focus'
import '@/filters/uppercase'

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
    const wrapper = shallowMount(Home, {
      localVue,
      store,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.findComponent(Button).exists()).toBeTruthy()
    expect(wrapper.findComponent(RandomItem).exists()).toBeTruthy()
    expect(wrapper.findComponent(SearchForm).exists()).toBeTruthy()
  })
})
