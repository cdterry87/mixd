<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <SearchForm />
      </div>
      <div class="column is-one-third">
        <Button v-bind="favoritesLink" />
        <RandomDrink />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import RandomDrink from '../components/RandomDrink'
import SearchForm from '../components/SearchForm'

export default {
  name: 'Home',
  components: {
    Button,
    RandomDrink,
    SearchForm
  },
  computed: {
    favoritesLink() {
      return {
        label: 'Favorites',
        link: '/favorites',
        classes: 'is-success mb-4',
        icon: 'fas fa-star'
      }
    }
  }
}
</script>
