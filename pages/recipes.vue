<template>
  <div class="container">
    <h2 class="title is-2">
       RECIPES
    </h2>
    <recipes-flex-grid blocTitle="Latest" :nodes="recipesLatest"></recipes-flex-grid>
    <recipes-flex-grid blocTitle="Main course" :nodes="recipesMainCourse"></recipes-flex-grid>
    <recipes-flex-grid blocTitle="Starter" :nodes="recipesStarter"></recipes-flex-grid>
    <recipes-flex-grid blocTitle="Snack" :nodes="recipesSnack"></recipes-flex-grid>
    <recipes-flex-grid blocTitle="Salad" :nodes="recipesSalad"></recipes-flex-grid>
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesFlexGrid from '~/components/RecipesFlexGrid'
export default {
  components: { RecipesFlexGrid },
  async asyncData () {
    const [
      recipesLatest, 
      recipesMainCourse,
      recipesStarter,
      recipesSnack,
      recipesSalad
    ] = await Promise.all([
      Recipes.findAllLatest(4),
      Recipes.findAllByCategoryName("Main course", 4),
      Recipes.findAllByCategoryName("Starter", 4),
      Recipes.findAllByCategoryName("Snack", 4),
      Recipes.findAllByCategoryName("Salad", 4),
    ])
    return { 
      recipesLatest, 
      recipesMainCourse,
      recipesStarter,
      recipesSnack,
      recipesSalad
    }
  }
}
</script>
