<template>
  <div v-if="randomDrink.idDrink">
    <h3 class="title is-4 has-text-centered">
      Here's a random drink, just for you!
    </h3>
    <Card
      :id="randomDrink.idDrink"
      :image="randomDrink.strDrinkThumb"
      :title="randomDrink.strDrink"
      :date="randomDrink.dateModified"
    />
    <div class="mt-4">
      <button
        class="button is-medium is-info is-outlined is-fullwidth"
        @click="onClick"
      >
        <span>Refresh</span>
        <span class="icon">
          <i class="fas fa-sync"></i>
        </span>
      </button>
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
  methods: {
    async onClick() {
      this.randomDrink = await getRandomDrink()
    }
  }
}
</script>
