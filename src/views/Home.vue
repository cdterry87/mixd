<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <SearchForm />
      </div>
      <div class="column is-one-third">
        <router-link
          class="button is-success is-medium is-fullwidth mb-5"
          to="/favorites"
        >
          <span>My Favorites</span>
          <span class="icon">
            <i class="fas fa-star"></i>
          </span>
        </router-link>
        <RandomDrink />
      </div>
    </div>
  </div>
</template>

<script>
import RandomDrink from '../components/RandomDrink'
import SearchForm from '../components/SearchForm'

export default {
  name: 'Home',
  components: {
    RandomDrink,
    SearchForm
  }
}
</script>
