import { mount, createLocalVue } from '@vue/test-utils'
import Layout from '@/components/Layout'

const localVue = createLocalVue()

describe('Layout', () => {
  it('renders correctly', () => {
    const wrapper = mount(Layout, {
      localVue,
      slots: {
        content: '<div>Testing Content</div>',
        side: '<div>Testing Side</div>'
      }
    })

    expect(wrapper.find('[data-testid="content"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="side"]').exists()).toBeTruthy()
  })

  it('renders with content and without side', () => {
    const wrapper = mount(Layout, {
      localVue,
      slots: {
        content: '<div>Testing Content</div>'
      }
    })

    expect(wrapper.find('[data-testid="content"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="side"]').exists()).toBeFalsy()
  })

  it('renders in reverse order', () => {
    const wrapper = mount(Layout, {
      localVue,
      propsData: {
        isReversed: true
      },
      slots: {
        content: '<div>Testing Content</div>',
        side: '<div>Testing Side</div>'
      }
    })

    expect(wrapper.find('.columns').exists()).toBeTruthy()
  })
})
