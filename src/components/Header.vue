<template>
  <div class="header">
    <div class="container">
      <nav
        class="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <router-link to="/">
            <h1 class="title is-1">
              M<i class="fas fa-glass-martini-alt"></i>XD
            </h1>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuActive: false
    }
  }
}
</script>
