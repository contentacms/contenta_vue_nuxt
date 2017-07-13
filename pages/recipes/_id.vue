<template>
  <PageRecipesId v-bind="{recipesByCategory, recipe}" />
</template>

<script>
import Recipes from '~/services/Recipes'
import PageRecipesId from '~/components/PageRecipesId'
export default {
  transition: 'page',
  components: { PageRecipesId },
  async asyncData ({ params }) {
    const recipe = await Recipes.findOneById(params.id)
    const recipesByCategory = await Recipes.findAllByCategoryName(recipe.category.name, 4)
    return { recipe, recipesByCategory }
  }
}
</script>
