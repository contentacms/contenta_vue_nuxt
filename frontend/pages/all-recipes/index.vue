<template>
  <PageRecipesAll v-bind="{recipes}" />
</template>

<script>
import { findAllRecipesByCategoryName, findAllRecipesByDifficultyName, findAllRecipesByMaxTotalTime, findAllLatestRecipes } from '~/lib/api'
import PageRecipesAll from '~/components/PageRecipesAll'
export default {
  transition: 'page',
  components: { PageRecipesAll },
  async asyncData (params) {
    const filter = params.route.query.filter
    let recipes = []
    const limit = 40
    // Cast as numeric
    const offset = params.route.query.page || 0
    switch (filter) {
      case 'main-course':
        recipes = await findAllRecipesByCategoryName('Main course', limit, offset)
      break;
      case 'easy':
        recipes = await findAllRecipesByDifficultyName('easy', limit, offset)
      break;
      case 'dessert':
        recipes = await findAllRecipesByCategoryName('Dessert', limit, offset)
      break;
      case 'quick':
        recipes = await findAllRecipesByMaxTotalTime(20, limit, offset)
      break;
      default:
        recipes = await findAllLatestRecipes(limit, offset)
    }

    return {
      recipes
    }
  }
}
</script>