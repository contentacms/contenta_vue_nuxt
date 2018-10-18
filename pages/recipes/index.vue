<template>
  <PageRecipesIndex v-bind="{recipePromoted, recipesLatest, recipesByCategories}" />
</template>

<script>
import PageRecipesIndex from '~/components/PageRecipesIndex'
import { findAllPromotedRecipes, findAllLatestRecipes, findAllRecipesCategories, findAllRecipesByCategoryName } from '~/lib/api'
export default {
  transition: 'page',
  components: { PageRecipesIndex },
  async asyncData () {

    let promises = []

    // get 4 latest recipes
    promises.push(findAllLatestRecipes(4))

    // get 4 recipes for each category
    promises.push(findAllRecipesCategories().then((categories) => {
      return Promise.all(categories.map(category => findAllRecipesByCategoryName(category.name, 4))).then(recipesByCategory => {
        return categories.map((category, index) => {
          category.recipes = recipesByCategory[index]
          return category
        })
      })
    }))
    
    // get a single promoted recipe
    promises.push(findAllPromotedRecipes(1).then(r => r[0]))

    return Promise.all(promises).then(promisesResults => {
      return {
        recipesLatest: promisesResults[0],
        recipesByCategories: promisesResults[1],
        recipePromoted: promisesResults[2]
      }
    })
  }
}
</script>
