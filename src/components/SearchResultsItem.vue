<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="image" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h3 class="title is-5">{{ title }}</h3>
      </div>
      <nav class="level is-mobile">
        <router-link :to="route"
          ><span class="button is-info is-small">View Drink</span></router-link
        >
      </nav>
    </div>
    <div v-if="isFavorite" class="media-right">
      <i class="fas fa-star"></i>
    </div>
  </article>
</template>

<script>
export default {
  name: 'SearchResultsItem',
  props: {
    id: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    isFavorite() {
      return true
    },
    route() {
      return `/drink/${this.id}`
    }
  }
}
</script>
