<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2"> Promoted recipe </h2>
            <h3 class="title is-3">{{promotedRecipe.title}} </h3>
          </div>
          <div class="column">
              <img v-lazy="promotedRecipe.image.name" />
          </div>
        </div>
      </div>
    </section>
    <PageRecipesIndex :recipesLatest="recipesLatest" :recipesByCategories="recipesByCategories" />
  </div>
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
        promotedRecipe: promisesResults[2][0]
      }
    })
  }
}
</script>
