<template>
  <div class="nodes">
    <h3 class="title is-3">{{ blocTitle }}</h3>
    <div class="columns">
      <div class="column" v-for="node in nodes" :key="node.uuid">
        <recipe-teaser :node="node"></recipe-teaser>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeTeaser from '~/components/RecipeTeaser'
export default {
  components: {
    RecipeTeaser
  },
  props: {
    blocTitle: {
      type: String,
      default: ''
    },
    nodes: {
      type: Array,
      default: []
    }
  }
}
</script>
