<template>
  <router-link :to="route">
    <div class="card">
      <div v-if="image" class="card-image">
        <figure class="image is-4by3">
          <img :src="image" :alt="title" />
        </figure>
      </div>
      <div v-if="title" class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4 has-text-centered">{{ title }}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Card',
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
    },
    date: {
      type: String,
      default: ''
    }
  },
  computed: {
    route() {
      return `/drink/${this.id}`
    },
    formattedDate() {
      return this.date
    }
  }
}
</script>
