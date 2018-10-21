<template>
  <div class="columns">
    <div class="column" :class="{'is-half': index == 0}" v-for="(node, index) in nodes" :key="node.id">
      <RecipeCard :recipe="node" />
    </div>
  </div>
</template>

<script>
import RecipeCard from '~/components/RecipeCard';

export default {
  components: { RecipeCard },
  props: {
    nodes: {
      type: Array,
      required: true,
    },
  },
};
</script>
