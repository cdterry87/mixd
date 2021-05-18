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
            <h1 class="title is-1"><i class="fas fa-cocktail"></i> MIXD</h1>
          </router-link>
          <a
            role="button"
            class="navbar-burger"
            :class="{ 'is-active': isMenuActive }"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            @click="isMenuActive = !isMenuActive"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          data-target="navbar"
          class="navbar-menu is-transparent"
          :class="{ 'is-active': isMenuActive }"
        >
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/favorites"> Favorites </router-link>
              </div>
            </div>
          </div>
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
