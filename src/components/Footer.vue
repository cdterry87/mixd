<template>
  <div class="footer">
    <div class="container">
      <ul class="footer-links has-text-centered">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/favorites">Favorites</router-link></li>
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
