<template>
  <div>
    <RecipeAsDetail :recipe="recipe" />
    <h3 class="title is-3 has-text-centered">More recipes from category <strong>{{recipe.category.name}}</strong></h3>
    <section class="container">
      <RecipesAsCards :recipes="recipesByCategory"></RecipesAsCards>
    </section>
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipeAsDetail from '~/components/RecipeAsDetail'
import RecipesAsCards from '~/components/RecipesAsCards'
export default {
  transition: 'page',
  components: { RecipeAsDetail, RecipesAsCards },
  async asyncData ({ params }) {
    const recipe = await Recipes.findOneById(params.id)
    const recipesByCategory = await Recipes.findAllByCategoryName(recipe.category.name, 4)
    return { recipe, recipesByCategory }
  }
}
</script>
