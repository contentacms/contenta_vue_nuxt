<template>
  <div class="container">
    <recipes-cards title="Latest recipes" :nodes="recipes"></recipes-cards>
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesCards from '~/components/RecipesCards'
export default {
  transition: 'page',
  components: { RecipesCards },
  async asyncData ({ params }) {
    const recipes = await Recipes.findAllLatest(params.category, 20)
    return { 
      recipes
    }
  }
}
</script>