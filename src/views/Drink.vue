<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-third">
        <Card :id="id" :image="drink.strDrinkThumb" :title="drink.strDrink" />
        <div class="mt-4">
          <button class="button is-medium is-info is-outlined is-fullwidth">
            <span>Add Favorite</span>
            <span class="icon">
              <i class="fas fa-star"></i>
            </span>
          </button>
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
import { getDrinkById } from '../services/drinks'
import Card from '../components/Card'

export default {
  name: 'Drink',
  components: {
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
      drink: {}
    }
  },
  async created() {
    this.drink = await getDrinkById(this.id)
  },
  computed: {
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
    }
  }
}
</script>
