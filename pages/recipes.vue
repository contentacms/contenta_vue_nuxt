<template>
  <div class="container">
    <h2 class="title is-2">
       RECIPES
    </h2>
    <recipes-grid blocTitle="Main course" :nodes="recipesMainCourse"></recipes-grid>
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesGrid from '~/components/RecipesGrid'
export default {
  components: { RecipesGrid },
  async asyncData () {
    const recipesMainCourse = await Recipes.findAllByCategoryName("Main course", 4)
    const recipesLatest = await Recipes.findAllLatest(4)
    return { 
       recipesLatest, 
       recipesMainCourse
    }
  }
}
</script>
