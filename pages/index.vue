<template>
  <PageIndex v-bind="{latestRecipes, latestPromoted}" />
</template>

<script>
import Recipes from '~/services/Recipes'
import PageIndex from '~/components/PageIndex'

export default {
  transition: 'page',
  components: { PageIndex },
  async asyncData ({ params }) {
    return Promise.all([
      Recipes.findAllLatest(4),
      Recipes.findHomePromotedArticlesAndRecipes()]).then(values => {
        console.log(values)
        return {
          latestRecipes: values[0],
          latestPromoted: values[1],
        }
      })
  }
}
</script>
