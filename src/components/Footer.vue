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
          <a :href="websiteData.website" target="_blank" data-testid="api-link">
            {{ websiteData.websiteLabel }}
          </a>
        </div>
        <div class="column is-half" data-testid="copyright">
          &copy; 2021 Chase Terry. |
          <a
            href="https://chaseterry.com"
            aria-label="Visit my website!"
            title="Visit my website!"
            target="_blank"
            rel="noreferrer"
            >https://chaseterry.com</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('categories')

export default {
  name: 'Footer',
  computed: {
    ...mapGetters(['websiteData'])
  }
}
</script>

<style lang="scss" scoped>
.footer-link {
  display: inline-block;
  margin: 0 25px;
}
</style>
