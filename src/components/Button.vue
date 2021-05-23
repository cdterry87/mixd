<template>
  <button class="button is-medium is-info is-fullwidth" :class="classes">
    <span>{{ label }}</span>
    <span v-if="icon" class="icon" :key="label">
      <i :class="icon" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    },
    classes: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
