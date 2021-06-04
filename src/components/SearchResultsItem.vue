<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="drink.strDrinkThumb" :alt="drink.strDrink" />
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

export default {
  name: 'SearchResultsItem',
  props: {
    drink: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      route: `/drink/${this.drink.idDrink}`
    }
  },
  computed: {
    ...mapState(['favorites']),
    isFavorite() {
      const favoriteIndex = this.favorites.findIndex(favorite => {
        return favorite.id === this.drink.idDrink
      })
      return favoriteIndex > -1 ? true : false
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
