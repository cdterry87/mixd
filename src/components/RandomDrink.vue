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
      :date="randomDrink.dateModified"
    />
    <div class="mt-4">
      <Button v-bind="refreshButton" @click="onRefreshClick" />
    </div>
  </div>
</template>

<script>
import { getRandomDrink } from '../services/drinks'
import Card from './Card'

export default {
  name: 'RandomDrink',
  components: {
    Card
  },
  data() {
    return {
      randomDrink: {}
    }
  },
  async created() {
    this.randomDrink = await getRandomDrink()
  },
  computed: {
    refreshButton() {
      return {
        classes: 'is-info',
        label: 'Refresh',
        icon: 'fas fa-sync'
      }
    }
  },
  methods: {
    async onRefreshClick() {
      this.randomDrink = await getRandomDrink()
    }
  }
}
</script>
