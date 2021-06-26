<template>
  <div class="has-text-centered">
    <i class="far fa-frown is-size-1"></i>
    <p class="title is-2 my-3">Sorry!</p>
    <p class="subtitle is-4 my-3">The page you requested could not be found</p>
    <div class="mt-5">
      <Button
        link="/"
        label="Return Home"
        icon="fas fa-home"
        classes="button is-info"
      />
    </div>
    <div class="columns mt-3">
      <div class="column is-one-third is-offset-one-third">
        <RandomItem />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import RandomItem from '../components/RandomItem'

export default {
  name: 'NotFoundPage',
  components: {
    Button,
    RandomItem
  }
}
</script>
