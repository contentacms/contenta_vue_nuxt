<template>
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <span class="nav-item">
          <!-- UMAMI food magazine -->
        </span>
      </div>
  
      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle" @click="displayMobileMenu = !displayMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </span>
  
      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu" :class="{'is-active': displayMobileMenu}">
        <nuxt-link to="/" class="nav-item"> Home </nuxt-link>
        <nuxt-link to="/recipes" class="nav-item"> Recipes </nuxt-link>
      </div>
  
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayMobileMenu: false
    }
  }
}
</script>
