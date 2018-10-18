<template>
  <PageRecipesCategory v-bind="{recipes, categoryName}" />
</template>

<script>
import PageRecipesCategory from '~/components/PageRecipesCategory'
import { findAllRecipesByCategoryName } from '~/lib/api'

export default {
  transition: 'page',
  components: { PageRecipesCategory },
  async asyncData ({ params }) {
    const recipes = await findAllRecipesByCategoryName(params.category, 20)
    return {
      recipes,
      categoryName: params.category
    }
  }
}
</script>