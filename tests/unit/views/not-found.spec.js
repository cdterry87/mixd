import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import NotFound from '@/views/NotFound'
import Button from '@/components/Button'
import RandomItem from '@/components/RandomItem'
import '@/filters/uppercase'

const localVue = createLocalVue()

describe('NotFound', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(NotFound, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.title').exists()).toBeTruthy()
    expect(wrapper.find('.subtitle').exists()).toBeTruthy()
    expect(wrapper.findComponent(Button).exists()).toBeTruthy()
    expect(wrapper.findComponent(RandomItem).exists()).toBeTruthy()
  })
})
