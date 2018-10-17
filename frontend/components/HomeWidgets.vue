<template>
  <div class="has-text-centered">
    <div class="columns">
      <div class="column">
        <h4 class="title is-4">Dinners to impress</h4>
        <nuxt-link to="/all-recipes?filter=main-course"> List recipes </nuxt-link>
      </div>
      <div class="column">
        <h4 class="title is-4">Learn to cook</h4>
        <nuxt-link to="/all-recipes?filter=easy"> Recipes for beginners </nuxt-link>
      </div>
      <div class="column">
        <h4 class="title is-4">Baked up</h4>
        <nuxt-link to="/all-recipes?filter=dessert"> Delicious cake and bakes </nuxt-link>
      </div>
      <div class="column">
        <h4 class="title is-4">Quick and easy</h4>
        <nuxt-link to="/all-recipes?filter=quick"> 20 minutes or less </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppSection from '~/components/AppSection'
export default {
  components: { AppSection }
}
</script>