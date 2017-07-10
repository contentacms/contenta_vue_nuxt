<template>
  <section class="hero is-primary">
  
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2"> PROMOTED RECIPE </h2>
            <h3 class="title is-3">{{recipe.title}} </h3>
            <ButtonLink button-class="is-light" :to="'/recipes/' + recipe.id">More</ButtonLink>
          </div>
          <div class="column">
            <nuxt-link :to="'/recipes/' + recipe.id">
              <img v-if="recipe.image" v-lazy="recipe.image.name" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  
  </section>
</template>

<script>
import ButtonLink from '~/components/ButtonLink'
export default {
  components: { ButtonLink },
  props: {
    recipe: { type: Object, default: {} }
  }
}
</script>