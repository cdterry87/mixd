<template>
  <div class="search-results">
    <div v-if="results.length">
      <SearchResultsItem
        v-for="(result, index) in results"
        :key="index"
        :id="result.idDrink"
        :title="result.strDrink"
        :image="result.strDrinkThumb"
      />
    </div>
    <div v-else>
      Sorry, there are no results to display. Try searching again.
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
    }
  }
}
</script>
