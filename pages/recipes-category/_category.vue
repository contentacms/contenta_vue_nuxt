<template>
  <div class="container">
    <RecipesAsCards :title="categoryName" :nodes="recipes"></RecipesAsCards>
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesAsCards from '~/components/RecipesAsCards'
export default {
  transition: 'page',
  components: { RecipesAsCards },
  async asyncData ({ params }) {
    const recipes = await Recipes.findAllByCategoryName(params.category, 20)
    return { 
      recipes, 
      categoryName: params.category
    }
  }
}
</script>