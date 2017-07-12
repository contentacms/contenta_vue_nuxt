<template>
  <AppSection>
    <div class="container">
      <h3 class="title is-h3 has-text-centered"> {{ categoryName }} </h3>
      <RecipesAsCards :recipes="recipes"></RecipesAsCards>
    </div>
  </AppSection>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesAsCards from '~/components/RecipesAsCards'
import AppSection from '~/components/AppSection'
export default {
  transition: 'page',
  components: { RecipesAsCards, AppSection },
  async asyncData ({ params }) {
    const recipes = await Recipes.findAllByCategoryName(params.category, 20)
    return {
      recipes,
      categoryName: params.category
    }
  }
}
</script>