import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import RandomDrink from '@/components/RandomDrink'
import Button from '@/components/Button'
import Card from '@/components/Card'

const drinks = require('@/mocks/search.json')

const localVue = createLocalVue()

describe('RandomDrink', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(RandomDrink, {
      localVue,
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
      randomDrink: drinks[0]
    })
    expect(wrapper.find('.title').exists()).toBeTruthy()
    expect(wrapper.findComponent(Button).exists()).toBeTruthy()
    expect(wrapper.findComponent(Card).exists()).toBeTruthy()
  })

  it('renders nothing if a drink is not found', () => {
    expect(wrapper.find('.title').exists()).toBeFalsy()
    expect(wrapper.findComponent(Button).exists()).toBeFalsy()
    expect(wrapper.findComponent(Card).exists()).toBeFalsy()
  })
})
