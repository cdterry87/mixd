<template>
  <div class="container">
    <h2 class="title is-2 has-text-centered">Your favorite drinks!</h2>
    <div class="columns is-multiline">
      <div
        v-if="!favorites.length"
        class="column is-8 is-offset-2 has-text-centered"
      >
        <p class="title is-size-4">Sorry, there is nothing to display.</p>
        <p class="subtitle is-size-5">You have not added any favorites yet.</p>
      </div>
      <div
        v-else
        v-for="(favorite, index) in favorites"
        :key="index"
        class="column is-one-third"
      >
        <Card
          :id="favorite.id"
          :title="favorite.title"
          :subtitle="favorite.subtitle"
          :image="favorite.image"
          :date="favorite.date"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('favorites')

import Card from '../components/Card'

export default {
  name: 'Favorites',
  components: {
    Card
  },
  computed: {
    ...mapState(['favorites'])
  }
}
</script>
