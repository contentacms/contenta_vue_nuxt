<template>
  <PageIndex v-bind="{latestRecipes, latestPromoted}" />
</template>

<script>
import PageIndex from '~/components/PageIndex'
import { findAllLatestRecipes, findHomePromotedArticlesAndRecipes  } from '~/lib/api'

export default {
  transition: 'page',
  components: { PageIndex },
  async asyncData ({ params }) {
    return Promise.all([
      findAllLatestRecipes(4),
      findHomePromotedArticlesAndRecipes(3)]).then(values => {
        return {
          latestRecipes: values[0],
          latestPromoted: values[1],
        }
      })
  }
}
</script>
