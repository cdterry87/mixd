<template>
  <div class="footer mt-6">
    <div class="container">
      <ul class="has-text-centered">
        <li class="footer-link">
          <router-link to="/">Home</router-link>
        </li>
        <li class="footer-link">
          <router-link to="/favorites">Favorites</router-link>
        </li>
      </ul>
      <div class="columns mt-5 has-text-centered">
        <div class="column is-half">
          MIXD uses data from
          <a
            href="https://www.thecocktaildb.com/"
            target="_blank"
            data-testid="cocktail-db-link"
          >
            TheCocktailDB
          </a>
        </div>
        <div class="column is-half" data-testid="copyright">
          &copy; MIXD 2021
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer-link {
  display: inline-block;
  margin: 0 25px;
}
</style>
