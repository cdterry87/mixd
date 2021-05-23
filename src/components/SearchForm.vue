<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            class="input is-medium"
            type="search"
            name="search"
            v-model="criteria"
            placeholder="Search for your favorite drink!"
          />
        </div>
        <div class="control">
          <button class="button is-info is-medium">Search</button>
        </div>
      </div>
    </form>
    <SearchResults
      :results="results"
      :has-search-been-performed="hasSearchBeenPerformed"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import SearchResults from './SearchResults'

const { mapState, mapActions } = createNamespacedHelpers('search')

export default {
  name: 'SearchForm',
  components: {
    SearchResults
  },
  data() {
    return {
      criteria: '',
      hasSearchBeenPerformed: false
    }
  },
  computed: {
    ...mapState(['results'])
  },
  methods: {
    ...mapActions(['runSearch']),
    async onSubmit() {
      this.hasSearchBeenPerformed = true
      await this.runSearch(this.criteria)
    }
  }
}
</script>
