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

    let promises = []

    // get 4 latest recipes
    promises.push(Recipes.findAllLatest(4))

    // get 4 recipes for each category
    promises.push(Recipes.findAllCategories().then((categories) => {
      return Promise.all(categories.map(category => Recipes.findAllByCategoryName(category.name, 4))).then(recipesByCategory => {
        return categories.map((category, index) => {
          category.recipes = recipesByCategory[index]
          return category
        })
      })
    }))
    
    // get a single promoted recipe
    promises.push(Recipes.findAllPromoted(1).then(r => r[0]))

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
