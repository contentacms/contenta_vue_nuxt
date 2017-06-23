<template>
  <div class="content">
    <h3>{{ node.title }}</h3>
    <div v-if="node.image" class="thumbnail">
      <img :src="node.image.thumbnail.filename"/>
    </div>
    <div class="tags">
      {{ node.category.tags }}
      <li v-for="tag in node.tags" :key="tag.id">
        {{tag.name}}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    node: {
      type: Object,
      default: {}
    }
  }
}
</script>
