<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <SearchForm />
      </div>
      <div class="column is-one-third">
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
