<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            UMAMI FOOD MAGAZINE
          </h1>
        </div>
      </div>
    </section>
   
    <MonthEdition></MonthEdition>

    <div class="container">
      <h3 class="title is-3 has-text-centered">Recipes</h3>
      <h4 class="title is-4 has-text-centered">Explore recipes across every type of occasion, ingredient and skill level</h4>
      <recipesAsCards :recipes="recipes" cardsByRow="2"></recipesAsCards>
    </div>
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesAsCards from '~/components/RecipesAsCards'
import ButtonLink from '~/components/ButtonLink'
import MonthEdition from '~/components/MonthEdition'

export default {
  transition: 'page',
  components: { RecipesAsCards, MonthEdition },
  async asyncData ({ params }) {
    const recipes = await Recipes.findAllLatest(4)
    return {
      recipes
    }
  }
}
</script>
