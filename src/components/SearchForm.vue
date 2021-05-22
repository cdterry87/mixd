<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            class="input is-medium"
            type="search"
            name="search"
            v-model="search"
            placeholder="Search for your favorite drink!"
          />
        </div>
        <div class="control">
          <a class="button is-info is-medium"> Search </a>
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
import { searchDrinkByName, searchDrinkByIngredient } from '../services/drinks'
import SearchResults from './SearchResults'

export default {
  name: 'SearchForm',
  components: {
    SearchResults
  },
  data() {
    return {
      search: '',
      results: [],
      hasSearchBeenPerformed: false
    }
  },
  methods: {
    async onSubmit() {
      this.results = []
      this.hasSearchBeenPerformed = true

      const nameSearchResults = await searchDrinkByName(this.search)
      const ingredientSearchResults = await searchDrinkByIngredient(this.search)

      this.results = [...nameSearchResults, ...ingredientSearchResults]
    }
  }
}
</script>
