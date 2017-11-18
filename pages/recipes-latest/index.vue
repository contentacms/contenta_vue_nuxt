<template>
  <PageRecipesLatest v-bind="{recipes}" />
</template>

<script>
import { findAllLatestRecipes } from '~/lib/api'
import PageRecipesLatest from '~/components/PageRecipesLatest'
export default {
  transition: 'page',
  components: { PageRecipesLatest },
  async asyncData ({ params }) {
    const recipes = await findAllLatestRecipes(20)
    return {
      recipes
    }
  }
}
</script>