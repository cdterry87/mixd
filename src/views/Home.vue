<template>
  <Layout>
    <template #content>
      <SearchForm />
    </template>
    <template #side>
      <Button v-bind="favoritesLink" />
      <RandomDrink />
    </template>
  </Layout>
</template>

<script>
import Button from '../components/Button'
import Layout from '../components/Layout'
import RandomDrink from '../components/RandomDrink'
import SearchForm from '../components/SearchForm'

export default {
  name: 'Home',
  components: {
    Button,
    Layout,
    RandomDrink,
    SearchForm
  },
  computed: {
    favoritesLink() {
      return {
        label: 'Favorites',
        link: '/favorites',
        classes: 'is-success is-fullwidth is-medium mb-4',
        icon: 'fas fa-star'
      }
    }
  }
}
</script>
