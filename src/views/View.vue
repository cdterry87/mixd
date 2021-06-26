<template>
  <Layout :is-reversed="true">
    <template #content>
      <div v-if="ingredients">
        <h3 class="title is-5">Ingredients:</h3>
        <ul class="mb-4">
          <li v-for="(ingredient, index) in ingredients" :key="index">
            {{ ingredient.measurement }} {{ ingredient.name }}
          </li>
        </ul>
      </div>
      <div v-if="result.strInstructions">
        <h3 class="title is-5">Instructions:</h3>
        <p class="mb-4">
          {{ result.strInstructions }}
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
    </template>
    <template #side>
      <Card
        v-if="!isLoading"
        :id="result[data.id]"
        :title="result[data.title]"
        :subtitle="result[data.subtitle]"
        :image="result[data.image]"
      />
      <div class="mt-4">
        <Button v-bind="favoriteButton" @click.native="onFavoriteClick" />
        <Button v-bind="favoritesLink" />
      </div>
    </template>
  </Layout>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import { apiService } from '../services/api'
import Button from '../components/Button'
import Card from '../components/Card'
import Layout from '../components/Layout'

export default {
  name: 'ViewPage',
  components: {
    Button,
    Card,
    Layout
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
      result: {}
    }
  },
  async created() {
    this.result = await apiService.getById(this.id, this.category)
    this.isLoading = false
  },
  computed: {
    ...mapState('favorites', ['favorites']),
    ...mapState('categories', ['category']),
    ...mapGetters('categories', ['data']),
    ingredients() {
      const ingredients = []

      for (let i = 1; i <= 15; i++) {
        const ingredientIndex = `strIngredient${i}`
        const measurementIndex = `strMeasure${i}`

        if (!this.result[ingredientIndex]) break
        ingredients.push({
          measurement: this.result[measurementIndex],
          name: this.result[ingredientIndex]
        })
      }

      return ingredients
    },
    tags() {
      if (!this.result.strTags) return
      return this.result.strTags.split(',')
    },
    favoritesLink() {
      return {
        label: 'Favorites',
        link: '/favorites',
        classes: 'is-success is-fullwidth is-medium mt-4',
        icon: 'fas fa-star'
      }
    },
    favoriteButton() {
      return {
        classes: `is-fullwidth is-medium ${
          this.isFavorite ? 'is-danger' : 'is-info'
        }`,
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
    ...mapActions('favorites', ['addFavorite', 'removeFavorite']),
    onFavoriteClick() {
      this.isFavorite
        ? this.removeFavorite(this.id)
        : this.addFavorite(this.result)
    }
  }
}
</script>
