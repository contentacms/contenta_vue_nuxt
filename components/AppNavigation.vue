<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <span class="navbar-item">
          UMAMI food magazine
          <br />
          <AppVersion />
        </span>
  
        <div @click="setMenuMobileIsOpened" :class="{'is-active': this.$store.state.menuMobileIsOpened}" class="navbar-burger" data-target="app-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
  
      </div>
  
      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div id="app-menu" class="navbar-menu" :class="{'is-active': this.$store.state.menuMobileIsOpened}">
        <div class="navbar-end">
          <nuxt-link to="/" class="navbar-item"> Home </nuxt-link>
          <nuxt-link to="/recipes" class="navbar-item"> Recipes </nuxt-link>
          <a href="https://github.com/contentacms/contenta_vue_nuxt" class="navbar-item"> Github </a>
          <a href="http://www.contentacms.org/" class="navbar-item"> ContentaCMS website </a>
          <!--<nuxt-link @click.native="displayMobileMenu = false" to="/magazine" class="nav-item"> Magazine </nuxt-link>-->
        </div>
      </div>
  
    </nav>
  </div>
</template>

<script>
import AppVersion from '~/components/AppVersion'
export default {
  components: { AppVersion },
  methods: {
    setMenuMobileIsOpened () {
      this.$store.commit('setMenuMobileIsOpened', !this.$store.state.menuMobileIsOpened)
    }
  }
}
</script>

<style scoped>

/* Create slide animation on mobile */
@media screen and (max-width: 999px) {

  .navbar-end {
    padding:0.5rem 1rem;
  }

  .navbar-menu {
    display: block;
    overflow: hidden;
    max-height: 0px;
    padding: 0rem 1rem;
    transition: max-height 0.2s;
  }

  .navbar-menu.is-active {
    max-height: 100vh;
    transition: max-height 0.5s;
  }
}

.nuxt-link-exact-active {
  color: #363636;
}
</style>