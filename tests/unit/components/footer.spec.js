import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Footer from '@/components/Footer'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const websiteData = {
  website: 'http://example.com',
  websiteLabel: 'Example'
}

const store = new Vuex.Store({
  modules: {
    categories: {
      namespaced: true,
      getters: {
        websiteData: () => websiteData
      }
    }
  }
})

describe('Footer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Footer, {
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
    const apiLink = wrapper.find('[data-testid="api-link"]')
    expect(apiLink.exists()).toBeTruthy()
    expect(apiLink.text()).toBe(websiteData.websiteLabel)
    expect(apiLink.attributes('href')).toBe(websiteData.website)
    expect(wrapper.findAll('.footer-link').length).toBeGreaterThan(0)
    expect(wrapper.find('[data-testid="copyright"]').exists()).toBeTruthy()
    expect(wrapper.findAllComponents(RouterLinkStub).length).toEqual(2)
  })
})
