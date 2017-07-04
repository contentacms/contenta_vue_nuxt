<template>
  <recipesPageIndex :recipesLatest="recipesLatest" :recipesByCategories="recipesByCategories" />
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesPageIndex from '~/components/RecipesPageIndex'
export default {
  transition: 'page',
  components: { RecipesPageIndex },
  async asyncData () {


    // get from cache to test how much it speeds up things
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

    return Promise.all(promises).then(promisesResults => {
      return {
        recipesLatest: promisesResults[0],
        recipesByCategories: promisesResults[1]
      }
    })
  }
}
</script>
