<template>
  <AppSection class="hero is-primary">
  
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2"> PROMOTED RECIPE </h2>
            <h3 class="title is-3">{{recipe.title}} </h3>
            <ButtonLink button-class="is-light" :to="'/recipes/' + recipe.id">View recipe</ButtonLink>
          </div>
          <div class="column">
            <nuxt-link :to="'/recipes/' + recipe.id">
              <figure class="image is-3by2">
                <img v-if="recipe.image" v-lazy="recipe.image.thumbnail.url" />
              </figure>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  
  </AppSection>
</template>

<script>
import AppSection from '~/components/AppSection'
import ButtonLink from '~/components/ButtonLink'
export default {
  components: { ButtonLink, AppSection },
  props: {
    recipe: { type: Object, default: {} }
  }
}
</script>