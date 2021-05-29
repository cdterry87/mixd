import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Footer from '@/components/Footer'

const localVue = createLocalVue()

describe('Footer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Footer, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders correctly', () => {
    expect(
      wrapper.find('[data-testid="cocktail-db-link"]').exists()
    ).toBeTruthy()
    expect(wrapper.findAll('.footer-link').length).toBeGreaterThan(0)
    expect(wrapper.find('[data-testid="copyright"]').exists()).toBeTruthy()
    expect(wrapper.findAllComponents(RouterLinkStub).length).toEqual(2)
  })
})
