<template>
  <PageIndex :latest-recipes="latestRecipes" />
</template>

<script>
import Recipes from '~/services/Recipes'
import PageIndex from '~/components/PageIndex'

export default {
  transition: 'page',
  components: { PageIndex },
  async asyncData ({ params }) {
    const latestRecipes = await Recipes.findAllLatest(4)
    return {
      latestRecipes
    }
  }
}
</script>
