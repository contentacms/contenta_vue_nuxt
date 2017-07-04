<template>
  <PageRecipesIndex v-bind="{recipePromoted, recipesLatest, recipesByCategories}" />
</template>

<script>
import Recipes from '~/services/Recipes'
import PageRecipesIndex from '~/components/PageRecipesIndex'
export default {
  transition: 'page',
  components: { PageRecipesIndex },
  async asyncData () {

    // get categories from local cache to test how much it speeds up things
    let categories = Recipes.findAllCategoriesFromCache()

    let promises = []
    promises.push(Recipes.findAllLatest(4))

    promises.push(Promise.all(categories.map(category => Recipes.findAllByCategoryName(category.name, 4)))
      .then(recipesByCategory => {
        return categories.map((category, index) => {
          category.recipes = recipesByCategory[index]
          return category
        })
      }))
    promises.push(Recipes.findAllPromoted(1))

    return Promise.all(promises).then(promisesResults => {
      return {
        recipesLatest: promisesResults[0],
        recipesByCategories: promisesResults[1],
        recipePromoted: promisesResults[2][0]
      }
    })
  }
}
</script>
