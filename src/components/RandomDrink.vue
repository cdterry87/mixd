<template>
  <div v-if="randomDrink.idDrink">
    <h3 class="title is-4 has-text-centered">
      Here's a random drink, just for you!
    </h3>
    <Card
      :id="randomDrink.idDrink"
      :title="randomDrink.strDrink"
      :subtitle="randomDrink.strAlcoholic"
      :image="randomDrink.strDrinkThumb"
    />
    <div class="mt-4">
      <Button v-bind="refreshButton" @click.native="onRefreshClick" />
    </div>
  </div>
</template>

<script>
import { cocktailDbService } from '../services/cocktail-db'
import Button from './Button'
import Card from './Card'

export default {
  name: 'RandomDrink',
  components: {
    Button,
    Card
  },
  data() {
    return {
      randomDrink: {}
    }
  },
  created() {
    this.getRandomDrink()
  },
  computed: {
    refreshButton() {
      return {
        classes: 'is-warning is-fullwidth is-medium',
        label: 'Refresh',
        icon: 'fas fa-sync'
      }
    }
  },
  methods: {
    async getRandomDrink() {
      this.randomDrink = await cocktailDbService.getRandomDrink()
    },
    onRefreshClick() {
      this.getRandomDrink()
    }
  }
}
</script>
