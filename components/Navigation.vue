<template>
  <!--
          <nav class="nav">
            <div class="nav-right nav-menu">
              <nuxt-link to="/" class="nav-item"> Home </nuxt-link>
              <nuxt-link to="/recipes" class="nav-item"> Recipes </nuxt-link>
            </div>  
          </nav>
          -->
  
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <span class="nav-item">
          UMAMI food magazine
        </span>
      </div>
  
      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
  
      <!--
        <span class="nav-toggle">
          <nuxt-link to="/" class="nav-item"> Home mobile</nuxt-link>
          <nuxt-link to="/recipes" class="nav-item"> Recipes mobile </nuxt-link>
        </span>
        -->
  
      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">
        <nuxt-link to="/" class="nav-item"> Home </nuxt-link>
        <nuxt-link to="/recipes" class="nav-item"> Recipes </nuxt-link>
      </div>
  
    </nav>
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {}
</style>