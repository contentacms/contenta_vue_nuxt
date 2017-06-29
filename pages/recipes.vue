<template>
  <div class="page-recipes">
    <div class="container">
  
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
    const recipesLatest = await Recipes.findAllLatest()
    // get all existing categories
    const categories = await Recipes.findAllCategories()
    // fetch  4 recipes for each category
    const recipesByCategory = await Promise.all(categories.map(category => {
      return Recipes.findAllByCategoryName(category.name, 4)
    }))
    // put recipes in their corresponding category object
    for (const categoryIndex in categories) {
      categories[categoryIndex].recipes = recipesByCategory[categoryIndex]
    }
    return { recipesLatest, categories }
  }
}
</script>
