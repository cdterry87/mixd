import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import SearchResults from '@/components/SearchResults'
import SearchResultsItem from '@/components/SearchResultsItem'

const results = require('@/mocks/search.json')
const localVue = createLocalVue()

describe('SearchResults', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SearchResults, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders initial state correctly', () => {
    expect(wrapper.find('[data-testid="search-init"]').exists()).toBeTruthy()
  })

  it('renders empty search correctly', async () => {
    await wrapper.setProps({
      hasSearchBeenPerformed: true
    })
    expect(wrapper.find('data-testid="search-empty"').exists()).toBeTruthy()
  })

  it('renders results list correctly', async () => {
    await wrapper.setProps({
      hasSearchBeenPerformed: true,
      results
    })
    expect(wrapper.findAllComponents(SearchResultsItem).length).toEqual(
      results.length
    )
  })
})
