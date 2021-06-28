import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Header from '@/components/Header'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter()

const store = new Vuex.Store({
  modules: {
    categories: {
      namespaced: true,
      state: {
        category: 'drinks'
      },
      actions: {
        changeCategory: jest.fn()
      }
    },
    search: {
      namespaced: true,
      actions: {
        clearSearchResults: jest.fn()
      }
    }
  }
})

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Header, {
      localVue,
      store,
      router,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders correctly', () => {
    expect(wrapper.findComponent(RouterLinkStub).exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="switch-button"]').exists()).toBeTruthy()
  })

  it('switches categories when button is clicked', async () => {
    const changeCategory = jest.spyOn(wrapper.vm, 'changeCategory')
    const clearSearchResults = jest.spyOn(wrapper.vm, 'clearSearchResults')

    await wrapper.find('[data-testid="switch-button"]').trigger('click')
    await wrapper.vm.$nextTick()

    expect(changeCategory).toHaveBeenCalled()
    expect(clearSearchResults).toHaveBeenCalled()
    expect(wrapper.vm.$route.path).toBe('/')
  })
})
