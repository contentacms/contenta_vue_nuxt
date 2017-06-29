<template>
  <div class="container">
    <RecipesAsCards title="Latest recipes" :nodes="recipes"></RecipesAsCards>
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesAsCards from '~/components/RecipesAsCards'
export default {
  transition: 'page',
  components: { RecipesAsCards },
  async asyncData ({ params }) {
    const recipes = await Recipes.findAllLatest(params.category, 20)
    return { 
      recipes
    }
  }
}
</script>