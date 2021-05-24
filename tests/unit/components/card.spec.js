import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Card from '@/components/Card'

const localVue = createLocalVue()

describe('Card', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Card, {
      localVue,
      propsData: {
        id: '1',
        title: 'Title',
        subtitle: 'Subtitle',
        image: '/path/to/image.png'
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
    expect(wrapper.find('.subtitle').exists()).toBeTruthy()
    expect(wrapper.findComponent(RouterLinkStub).exists()).toBeTruthy()
  })

  it('renders without an image and subtitle', async () => {
    await wrapper.setProps({
      id: '1',
      title: 'Title',
      subtitle: '',
      image: ''
    })
    expect(wrapper.find('.image').exists()).toBeFalsy()
    expect(wrapper.find('.subtitle').exists()).toBeFalsy()
  })
})
