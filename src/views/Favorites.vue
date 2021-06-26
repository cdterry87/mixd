<template>
  <Layout>
    <template #content>
      <h2 class="title is-2 has-text-centered">
        Your <span data-testid="total-favorites">{{ totalFavorites }}</span>
        favorite drinks!
      </h2>
      <div class="columns is-multiline">
        <div
          v-if="!favorites.length"
          class="column is-8 is-offset-2 has-text-centered"
        >
          <p class="title is-size-4">Sorry, there is nothing to display.</p>
          <p class="subtitle is-size-5">
            You have not added any favorites yet.
          </p>
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
          />
          <p class="mt-4 has-text-centered">
            <small class="is-small">
              Added {{ getDateFromToday(favorite.date) }}
            </small>
          </p>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import { getDateFromToday } from '../utils'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('favorites')

import Card from '../components/Card'
import Layout from '../components/Layout'

export default {
  name: 'FavoritesPage',
  components: {
    Card,
    Layout
  },
  computed: {
    ...mapState(['favorites']),
    ...mapGetters(['totalFavorites'])
  },
  methods: {
    getDateFromToday
  }
}
</script>
