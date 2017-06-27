<template>
  <div class="page-recipes">
    <div class="container">
      <recipes-cards title="Latest Recipes" :nodes="recipesLatest" more-link="/recipes-latest"></recipes-cards>
      <recipes-cards title="Main course" :nodes="recipesMainCourse" more-link="/recipes-category/Main%20course"></recipes-cards>
      <recipes-cards title="Starter" :nodes="recipesStarter" more-link="/recipes-category/Starter"></recipes-cards>
      <recipes-cards title="Snack" :nodes="recipesSnack" more-link="/recipes-category/Snack"></recipes-cards>
      <recipes-cards title="Salad" :nodes="recipesSalad" more-link="/recipes-category/Salad"></recipes-cards>
    </div>
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesCards from '~/components/RecipesCards'
export default {
  transition: 'page',
  components: { RecipesCards },
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
