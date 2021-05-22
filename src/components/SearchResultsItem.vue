<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="drink.strDrinkThumb" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h3 class="title is-5">{{ drink.strDrink }}</h3>
      </div>
      <nav class="level is-mobile">
        <router-link :to="route">
          <span class="button is-info is-small">View Drink</span>
        </router-link>
      </nav>
    </div>
    <div class="media-right">
      <i :class="{ fas: isFavorite, far: !isFavorite }" class="fa-star"></i>
    </div>
  </article>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('favorites')

export default {
  name: 'SearchResultsItem',
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
    route() {
      return `/drink/${this.drink.idDrink}`
    }
  }
}
</script>
