import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import RandomItem from '@/components/RandomItem'
import Button from '@/components/Button'
import Card from '@/components/Card'
import '@/filters/uppercase'
import Vuex from 'vuex'
import { API_DATA } from '@/constants/apiData'

const searchResults = require('@/mocks/search.json')

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
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

describe('RandomItem', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(RandomItem, {
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

  it('renders correctly', async () => {
    await wrapper.setData({
      result: searchResults[0],
      isLoaded: true
    })
    expect(wrapper.find('.title').exists()).toBeTruthy()
    expect(wrapper.findComponent(Button).exists()).toBeTruthy()
    expect(wrapper.findComponent(Card).exists()).toBeTruthy()
  })

  it('renders nothing if a result is not found', () => {
    expect(wrapper.find('.title').exists()).toBeFalsy()
    expect(wrapper.findComponent(Button).exists()).toBeFalsy()
    expect(wrapper.findComponent(Card).exists()).toBeFalsy()
  })
})
