<template>
  <PageRecipesCategory v-bind="{recipes, categoryName}" />
</template>

<script>
import Recipes from '~/services/Recipes'
import PageRecipesCategory from '~/components/PageRecipesCategory'

export default {
  transition: 'page',
  components: { PageRecipesCategory },
  async asyncData ({ params }) {
    const recipes = await Recipes.findAllByCategoryName(params.category, 20)
    return {
      recipes,
      categoryName: params.category
    }
  }
}
</script>