<template>
  <div class="container">
    <div
      class="columns"
      :class="{ 'is-flex-direction-row-reverse': isReversed }"
    >
      <div class="column is-two-thirds">
        <slot name="content" />
      </div>
      <div class="column is-one-third">
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
  }
}
</script>
