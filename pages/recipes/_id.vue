<template>
  <div>
    <RecipeAsDetail :recipe="recipe" />
    <h3 class="title is-3 has-text-centered">More recipes from category
      <strong>{{recipe.category.name}}</strong>
    </h3>
    <div class="container">
      <AppSection>
        <RecipesAsCards :recipes="recipesByCategory"></RecipesAsCards>
      </AppSection>
    </div>
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipeAsDetail from '~/components/RecipeAsDetail'
import RecipesAsCards from '~/components/RecipesAsCards'
import AppSection from '~/components/AppSection'
export default {
  transition: 'page',
  components: { RecipeAsDetail, RecipesAsCards, AppSection },
  async asyncData ({ params }) {
    const recipe = await Recipes.findOneById(params.id)
    const recipesByCategory = await Recipes.findAllByCategoryName(recipe.category.name, 4)
    return { recipe, recipesByCategory }
  }
}
</script>
