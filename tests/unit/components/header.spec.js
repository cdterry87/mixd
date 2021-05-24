import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Header from '@/components/Header'

const localVue = createLocalVue()

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Header, {
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
    expect(wrapper.findComponent(RouterLinkStub).exists()).toBeTruthy()
  })
})
