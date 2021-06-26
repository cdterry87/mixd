<template>
  <div v-if="isLoaded">
    <h3 class="title is-4 has-text-centered">
      We thought you might like this!
    </h3>
    <Card
      :id="result[data.id]"
      :title="result[data.title]"
      :subtitle="result[data.subtitle]"
      :image="result[data.image]"
    />
    <div class="mt-4">
      <Button
        classes="is-warning is-fullwidth is-medium"
        label="Refresh"
        icon="fas fa-sync"
        @click.native="onRefreshClick"
      />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('categories')

import { apiService } from '../services/api'
import Button from './Button'
import Card from './Card'

export default {
  name: 'RandomItem',
  components: {
    Button,
    Card
  },
  data() {
    return {
      result: {},
      isLoaded: false
    }
  },
  created() {
    this.getRandom()
  },
  computed: {
    ...mapState(['category']),
    ...mapGetters(['data'])
  },
  watch: {
    category() {
      this.getRandom()
    }
  },
  methods: {
    async getRandom() {
      this.isLoaded = false
      this.result = await apiService.getRandom(this.category)
      this.isLoaded = true
    },
    onRefreshClick() {
      this.getRandom()
    }
  }
}
</script>
