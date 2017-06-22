<template>
  <div class="nodes recipes">
    <div class="node" v-for="node in nodes" :key="node.uuid">
      <h3 class="node__title">{{ node.attributes.title }}</h3>
      <div class="node__content" v-html="node.attributes.instructions"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nodes: {
      type: Array,
      default: []
    }
  }
}
</script>
