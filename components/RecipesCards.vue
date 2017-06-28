<template>
  <div class="nodes">
    <h3 class="title is-3">{{ title }}</h3>
  
    <bulma-grid :items="nodes" itemsByRow="4">
      <template scope="column">
        <recipe-card :node="column.item"></recipe-card>
      </template>
    </bulma-grid>
  
    <div v-if="moreLink" class="has-text-centered">
      <nuxt-link :to="{path: moreLink}" class="button is-primary">View more</nuxt-link>
    </div>
  
  </div>
</template> 

<script>
import RecipeCard from '~/components/RecipeCard'
import BulmaGrid from '~/components/BulmaGrid'
export default {
  components: { RecipeCard, BulmaGrid },
  props: {
    title: { type: String, default: '' },
    moreLink: { type: String, default: '' },
    nodes: { type: Array, default: [] }
  },
  data () {
    return {}
  }
}
</script>
