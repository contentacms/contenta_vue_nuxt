<template>
  <div class="container">
    <h3 class="title is-h3 has-text-centered"> {{ categoryName }} </h3>
    <RecipesAsCards :recipes="recipes"></RecipesAsCards>
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