<template>
  <div class="home">
  
    <AppSection class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            UMAMI FOOD MAGAZINE
          </h1>
        </div>
      </div>
    </AppSection>
  
    <AppSection>
      <MonthEdition></MonthEdition>
    </AppSection>
  
    <AppSection class="home-recipes">
      <div class="container">
        <h3 class="title is-3 has-text-centered">Recipes</h3>
        <h4 class="title is-4 has-text-centered">Explore recipes across every type of occasion, ingredient and skill level</h4>
        <recipesAsCards :recipes="latestRecipes" cardsByRow="2"></recipesAsCards>
      </div>
    </AppSection>
  
  </div>
</template>

<script>
import RecipesAsCards from '~/components/RecipesAsCards'
import ButtonLink from '~/components/ButtonLink'
import MonthEdition from '~/components/MonthEdition'
import AppSection from '~/components/AppSection'

export default {
  props: {
    latestRecipes: { type: Array, default: [] }
  },
  components: { RecipesAsCards, MonthEdition, ButtonLink, AppSection }
}
</script>
