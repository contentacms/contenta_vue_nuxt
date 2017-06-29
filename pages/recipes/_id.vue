<template>
  <div class="container">
   <RecipeAsDetail :recipe="recipe" />
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipeAsDetail from '~/components/RecipeAsDetail'
export default {
  transition: 'page',
  components: { RecipeAsDetail },
  async asyncData ({ params }) {
    const recipe = await Recipes.findOneById(params.id)
    console.log(recipe)
    return { recipe }
  }
}
</script>
