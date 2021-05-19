<template>
  <div>
    <h2 class="title is-4 has-text-centered">Search for your favorite drink</h2>
    <form @submit.prevent="onSubmit">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            class="input"
            type="search"
            name="search"
            v-model="search"
            placeholder="Search for your favorite drink!"
          />
        </div>
        <div class="control">
          <a class="button is-info"> Search </a>
        </div>
      </div>
    </form>
    <SearchResults :results="results" />
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
      results: []
    }
  },
  methods: {
    async onSubmit() {
      this.results = []

      const nameSearchResults = await searchDrinkByName(this.search)
      const ingredientSearchResults = await searchDrinkByIngredient(this.search)

      this.results = [...nameSearchResults, ...ingredientSearchResults]
    }
  }
}
</script>
