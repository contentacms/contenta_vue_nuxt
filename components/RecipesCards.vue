<template>
  <div class="nodes">
    <h3 class="title is-3">{{ title }}</h3>

    <div class="columns" v-for="(column, columnIndex) in grid" :key="columnIndex">
      <div v-for="(node, index) in column" :key="node.uuid" class="column">
        <recipe-card :node="node"></recipe-card>
      </div>
    </div>
  
    <div v-if="moreLink" class="has-text-centered">
      <nuxt-link :to="{path: moreLink}" class="button is-primary">View more</nuxt-link>
    </div>
  
  </div>
</template> 

<script>
import RecipeCard from '~/components/RecipeCard'
export default {
  components: { RecipeCard },
  props: ['title', 'more-link', 'nodes'],
  props: {
    title: { type: String, default: '' },
    moreLink: { type: String, default: '' },
    nodes: { type: Array, default: [] },
    CardByRow: { type: Number, default: 4 }
  },
  computed: {
    grid() {
      let columnIndex = 0
      let columns = {}
      for (const nodeIndex in this.nodes) {
        if (nodeIndex % this.CardByRow === 0) {
          columns[++columnIndex] = []
        }
        columns[columnIndex].push(this.nodes[nodeIndex])
      }
      return columns
    }
  }
}
</script>
