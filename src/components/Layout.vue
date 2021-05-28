<template>
  <div class="container px-5">
    <div
      class="columns"
      :class="{ 'is-flex-direction-row-reverse': isReversed }"
    >
      <div class="column" :class="{ 'is-two-thirds': hasSide }">
        <slot name="content" />
      </div>
      <div class="column is-one-third" v-if="hasSide">
        <slot name="side" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    isReversed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasSide() {
      return !!this.$slots.side
    }
  }
}
</script>
