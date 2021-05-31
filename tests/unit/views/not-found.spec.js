import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import NotFound from '@/views/NotFound'
import Button from '@/components/Button'
import RandomDrink from '@/components/RandomDrink'

const localVue = createLocalVue()

describe('NotFound', () => {
  it('renders correctly', () => {
    const wrapper = mount(NotFound, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.title').exists()).toBeTruthy()
    expect(wrapper.find('.subtitle').exists()).toBeTruthy()
    expect(wrapper.findComponent(Button).exists()).toBeTruthy()
    expect(wrapper.findComponent(RandomDrink).exists()).toBeTruthy()
  })
})
