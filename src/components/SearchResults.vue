<template>
  <div class="search-results my-5">
    <div v-if="results.length">
      <SearchResultsItem
        v-for="(result, index) in results"
        :key="index"
        :result="result"
        @favoriteClick="onFavoriteClick"
      />
    </div>
    <div v-else class="mt-5 has-text-centered">
      <div class="is-size-1">
        <i class="fas fa-search"></i>
      </div>
      <div v-if="hasSearchBeenPerformed" data-testid="search-empty">
        <p class="title is-size-4">Sorry, your search returned no results.</p>
        <p class="subtitle is-size-5">Please try another search.</p>
      </div>
      <div v-else data-testid="search-init">
        <p class="title is-size-4">Sorry, there are no results to display.</p>
        <p class="subtitle is-size-5">
          Use the search above to find what you're looking for!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SearchResultsItem from './SearchResultsItem'

export default {
  name: 'SearchResults',
  components: {
    SearchResultsItem
  },
  props: {
    results: {
      type: Array,
      default: () => []
    },
    hasSearchBeenPerformed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onFavoriteClick(data) {
      this.$emit('favoriteClick', data)
    }
  }
}
</script>
