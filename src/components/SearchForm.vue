<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            class="input is-medium"
            type="search"
            name="search"
            v-focus
            v-model="search"
            placeholder="Search for something here!"
          />
        </div>
        <div class="control">
          <button class="button is-info is-medium">Search</button>
        </div>
      </div>
    </form>
    <div v-if="message" class="notification is-warning is-light my-2">
      <button class="delete" @click="message = ''"></button>
      <p v-html="message" />
    </div>
    <SearchResults
      :results="results"
      :has-search-been-performed="hasSearchBeenPerformed"
      @favoriteClick="displayMessage"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SearchResults from './SearchResults'

export default {
  name: 'SearchForm',
  components: {
    SearchResults
  },
  data() {
    return {
      search: '',
      message: '',
      hasSearchBeenPerformed: false
    }
  },
  computed: {
    ...mapState('search', ['results']),
    ...mapState('categories', ['category'])
  },
  methods: {
    ...mapActions('search', ['runSearch']),
    async onSubmit() {
      this.hasSearchBeenPerformed = true

      const searchData = {
        criteria: this.search,
        category: this.category
      }

      await this.runSearch(searchData)
    },
    displayMessage(data) {
      const { name, isFavorite } = data
      const status = isFavorite ? 'added to' : 'removed from'
      this.message = `<strong>${name}</strong> was <strong>${status}</strong> your favorites!`
    }
  }
}
</script>
