<template>
  <PageRecipesLatest v-bind="{recipes}" />
</template>

<script>
import Recipes from '~/services/Recipes'
import PageRecipesLatest from '~/components/PageRecipesLatest'
export default {
  transition: 'page',
  components: { PageRecipesLatest },
  async asyncData ({ params }) {
    const recipes = await Recipes.findAllLatest(20)
    return {
      recipes
    }
  }
}
</script>