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
    const recipesLatest = await Recipes.findAllLatest(4)
    // console.log(recipesLatest)
    const categories = await Recipes.findAllCategories()
    const recipesByCategory = await Recipes.subRequestsFromCategories(categories)
    // fetch  4 recipes for each category
    /*
    const recipesByCategory = await Promise.all(categories.map(category =>
      Recipes.findAllByCategoryName(category.name, 4)
    ))
    */
    // put returned recipes objects in their corresponding category object
    categories.map((category, index) => category.recipes = recipesByCategory[index])
    return { recipesLatest, categories }
  }
}
</script>
