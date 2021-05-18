<template>
  <div>Ingredient {{ id }}</div>
</template>

<script>
export default {
  name: 'Ingredient',
  props: {
    id: {
      type: Number,
      required: true
    }
  }
}
</script>
