<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="drink.strDrinkThumb" :alt="drink.strDrink" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h3 class="title is-5">{{ drink.strDrink | uppercase }}</h3>
      </div>
      <nav class="level is-mobile">
        <Button v-bind="viewButton" />
      </nav>
    </div>
    <div class="media-right" @click="onFavoriteClick">
      <i
        :class="{ fas: isFavorite, far: !isFavorite }"
        class="fa-star is-clickable"
      ></i>
    </div>
  </article>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('favorites')

import Button from './Button'

export default {
  name: 'SearchResultsItem',
  components: {
    Button
  },
  props: {
    drink: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['favorites']),
    isFavorite() {
      const favoriteIndex = this.favorites.findIndex(favorite => {
        return favorite.id === this.drink.idDrink
      })
      return favoriteIndex > -1 ? true : false
    },
    viewButton() {
      return {
        classes: 'button is-info is-small',
        label: 'View Drink',
        link: `/drink/${this.drink.idDrink}`
      }
    }
  },
  methods: {
    ...mapActions(['addFavorite', 'removeFavorite']),
    onFavoriteClick() {
      this.isFavorite
        ? this.removeFavorite(this.id)
        : this.addFavorite(this.drink)

      this.$emit('onAddFavorite', this.drink)
    }
  }
}
</script>
