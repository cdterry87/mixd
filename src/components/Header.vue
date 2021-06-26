<template>
  <Layout class="header my-2">
    <template #content>
      <div class="container">
        <nav
          class="navbar is-flex is-justify-content-space-between"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="navbar-brand">
            <router-link to="/">
              <h1 class="title is-1">
                M<i class="fas fa-glass-martini-alt"></i>XD
              </h1>
            </router-link>
          </div>
          <div class="navbar-end">
            <Button v-bind="switchButton" @click.native="onButtonClick" />
          </div>
        </nav>
      </div>
    </template>
  </Layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { CATEGORIES } from '../constants/categories'
import Button from './Button'
import Layout from './Layout'

export default {
  name: 'Header',
  components: {
    Button,
    Layout
  },
  computed: {
    ...mapState('categories', ['category']),
    switchButton() {
      const label = this.category === CATEGORIES.MEALS ? 'Thirsty?' : 'Hungry?'
      const icon =
        this.category === CATEGORIES.MEALS
          ? 'fas fa-glass-martini-alt'
          : 'fas fa-hamburger'

      return {
        label,
        icon,
        classes: 'is-medium'
      }
    }
  },
  methods: {
    ...mapActions('categories', ['changeCategory']),
    ...mapActions('search', ['clearSearchResults']),
    onButtonClick() {
      this.changeCategory()
      this.clearSearchResults()
      this.$router.push('/')
    }
  }
}
</script>
