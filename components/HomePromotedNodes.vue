<template>
  <div class="columns">
    <div class="column" :class="{'is-half': index == 0}" v-for="(node, index) in nodes" :key="node.id">
      <recipeAsCard :recipe="node" />
    </div>
  
  </div>
</template>

<script>
import RecipeAsCard from '~/components/RecipeAsCard';

export default {
  components: { RecipeAsCard },
  props: {
    nodes: { type: Array, default: [] },
  },
};
</script>
