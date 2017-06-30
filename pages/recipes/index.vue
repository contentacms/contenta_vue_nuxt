<template>
  <div class="page-recipes">
    <div class="container">
  
      <h3 class="title is-3 has-text-centered"> Latest recipes </h3>
      <RecipesAsCards title="Latest Recipes" :nodes="recipesLatest" more-link="/recipes-latest"></RecipesAsCards>
      <div class="has-text-centered">
        <ButtonLink to="/recipes-latest">View more</ButtonLink>
      </div>
  
      <div v-for="(category, categoryIndex) in categories" :key="categoryIndex">
        <h3 class="title is-3 has-text-centered">{{ category.name }}</h3>
        <RecipesAsCards title="Recipes" :nodes="category.recipes"></RecipesAsCards>
        <div class="has-text-centered">
          <ButtonLink :to="'/recipes-category/' + category.name">View more</ButtonLink>
        </div>
      </div>
  
    </div>
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesAsCards from '~/components/RecipesAsCards'
import ButtonLink from '~/components/ButtonLink'
export default {
  transition: 'page',
  components: { RecipesAsCards, ButtonLink },
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
        categories: promisesResults[1]
      }
    })
  }
}
</script>
