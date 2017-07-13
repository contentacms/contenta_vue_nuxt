<template>
  <div class="columns">
    <div class="column" v-for="node in nodes">
  
      <recipeAsCard v-if="node.contentType.type == 'recipe'" :recipe="node" />
      <div v-if="node.contentType.type == 'article'"> There is not yet component to display article as card</div>
  
    </div>
  
  </div>
</template>

<script>
import BulmaCard from '~/components/BulmaCard'
import RecipeAsCard from '~/components/RecipeAsCard'

export default {
  components: { BulmaCard, RecipeAsCard },
  props: {
    nodes: { type: Array, default: [] }
  },
  created () {
    console.log(this.nodes)
  }
}
</script>