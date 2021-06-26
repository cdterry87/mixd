<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="result[data.image]" :alt="result[data.title]" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h3 class="title is-5">{{ result[data.title] | uppercase }}</h3>
      </div>
      <nav class="level is-mobile">
        <Button
          classes="button is-info is-small"
          label="Check it out!"
          :link="`/view/${result[data.id]}`"
        />
      </nav>
    </div>
    <div
      v-if="isFavorite"
      key="fas"
      class="media-right"
      @click="onFavoriteClick"
    >
      <i class="fas fa-star is-clickable"></i>
    </div>
    <div v-else key="far" class="media-right" @click="onFavoriteClick">
      <i class="far fa-star is-clickable"></i>
    </div>
  </article>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import Button from './Button'

export default {
  name: 'SearchResultsItem',
  components: {
    Button
  },
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('favorites', ['favorites']),
    ...mapState('categories', ['category']),
    ...mapGetters('categories', ['data']),
    isFavorite() {
      const favoriteIndex = this.favorites[this.category].findIndex(
        favorite => {
          return favorite.id === this.result[this.data.id]
        }
      )
      return favoriteIndex > -1 ? true : false
    }
  },
  methods: {
    ...mapActions('favorites', ['addFavorite', 'removeFavorite']),
    onFavoriteClick() {
      this.isFavorite
        ? this.removeFavorite(this.result[this.data.id])
        : this.addFavorite(this.result)

      this.$emit('favoriteClick', {
        name: this.result[this.data.title],
        isFavorite: this.isFavorite
      })
    }
  }
}
</script>
