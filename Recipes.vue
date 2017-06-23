<template>
  <div class="nodes recipes">
    <div class="content" v-for="node in nodes" :key="node.uuid">
      <h3>{{ node.attributes.title }}</h3>
      <div v-html="node.attributes.instructions"></div>
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
