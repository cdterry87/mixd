<template>
  <Layout>
    <template #content>
      <SearchForm />
    </template>
    <template #side>
      <Button v-bind="favoritesLink" />
      <RandomItem />
    </template>
  </Layout>
</template>

<script>
import Button from '../components/Button'
import Layout from '../components/Layout'
import RandomItem from '../components/RandomItem'
import SearchForm from '../components/SearchForm'

export default {
  name: 'HomePage',
  components: {
    Button,
    Layout,
    RandomItem,
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
