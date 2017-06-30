<template>
   <RecipeAsDetail :recipe="recipe" />
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipeAsDetail from '~/components/RecipeAsDetail'
export default {
  transition: 'page',
  components: { RecipeAsDetail },
  async asyncData ({ params }) {
    const recipe = await Recipes.findOneById(params.id)
    return { recipe }
  }
}
</script>
