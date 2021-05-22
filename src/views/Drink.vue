<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <Card
          v-if="!isLoading"
          :id="id"
          :image="drink.strDrinkThumb"
          :title="drink.strDrink"
          :subtitle="drink.strAlcoholic"
        />
        <div class="mt-4">
          <Button v-bind="favoriteButton" @click.native="onFavoriteClick" />
          <router-link
            class="mt-3 button is-success is-medium is-fullwidth mb-5"
            to="/favorites"
          >
            <span>My Favorites</span>
            <span class="icon">
              <i class="fas fa-star"></i>
            </span>
          </router-link>
        </div>
      </div>
      <div class="column is-two-thirds">
        <div v-if="ingredients">
          <h3 class="title is-5">Ingredients:</h3>
          <ul class="mb-4">
            <li v-for="(ingredient, index) in ingredients" :key="index">
              {{ ingredient.measurement }} {{ ingredient.name }}
            </li>
          </ul>
        </div>
        <div v-if="drink.strInstructions">
          <h3 class="title is-5">Instructions:</h3>
          <p class="mb-4">
            {{ drink.strInstructions }}
          </p>
        </div>
        <div v-if="drink.strGlass">
          <h3 class="title is-5">Recommended Glassware:</h3>
          <p class="mb-4">
            {{ drink.strGlass }}
          </p>
        </div>
        <div v-if="tags">
          <h3 class="title is-5">Tags:</h3>
          <div class="tags are-medium mb-4">
            <span v-for="(tag, index) in tags" :key="index" class="tag is-info">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('favorites')

import { getDrinkById } from '../services/drinks'
import Button from '../components/Button'
import Card from '../components/Card'

export default {
  name: 'Drink',
  components: {
    Button,
    Card
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: true,
      drink: {}
    }
  },
  async created() {
    this.drink = await getDrinkById(this.id)
    this.isLoading = false
  },
  computed: {
    ...mapState(['favorites']),
    ingredients() {
      const ingredients = []

      for (let i = 1; i <= 15; i++) {
        const ingredientIndex = `strIngredient${i}`
        const measurementIndex = `strMeasure${i}`

        if (!this.drink[ingredientIndex]) break
        ingredients.push({
          measurement: this.drink[measurementIndex],
          name: this.drink[ingredientIndex]
        })
      }

      return ingredients
    },
    tags() {
      if (!this.drink.strTags) return
      return this.drink.strTags.split(',')
    },
    favoriteButton() {
      return {
        classes: this.isFavorite ? 'is-danger' : 'is-info',
        label: this.isFavorite ? 'Remove Favorite' : 'Add Favorite',
        icon: this.isFavorite ? 'fas fa-minus-circle' : 'fas fa-plus-circle'
      }
    },
    isFavorite() {
      const favoriteIndex = this.favorites.findIndex(favorite => {
        return favorite.id === this.id
      })
      if (favoriteIndex > -1) {
        return true
      }
      return false
    }
  },
  methods: {
    ...mapActions(['addFavorite', 'removeFavorite']),
    onFavoriteClick() {
      this.isFavorite
        ? this.removeFavorite(this.id)
        : this.addFavorite(this.drink)
    }
  }
}
</script>
