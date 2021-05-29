<template>
  <Layout class="header my-2">
    <template #content>
      <div class="container px-5">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <router-link to="/">
              <h1 class="title is-1">
                M<i class="fas fa-glass-martini-alt"></i>XD
              </h1>
            </router-link>
          </div>
        </nav>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from './Layout'

export default {
  name: 'Header',
  components: {
    Layout
  }
}
</script>
