<template>
  <div class="columns">
    <div class="column" :class="{'is-half': index == 0}" v-for="(node, index) in nodes">

      <recipeAsCard v-if="node.contentType.type == 'recipe'" :recipe="node" />
      <div v-if="node.contentType.type == 'article'"> There is not yet component to display article as card</div>

    </div>
  
  </div>
</template>

<script>
import RecipeAsCard from '~/components/RecipeAsCard'

export default {
  components: { RecipeAsCard },
  props: {
    nodes: { type: Array, default: [] }
  }
}
</script>