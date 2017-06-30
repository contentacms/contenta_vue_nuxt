<template>
  <nuxt-link :to="'/recipes/' + node.id">
    <BulmaCard>
      <div slot="image" v-if="node.image.thumbnail" class="thumbnail">
        <img v-if="node.image" v-lazy="node.image.thumbnail.filename" />
      </div>
      <div slot="content">
        <div class="difficulty">
          difficulty : {{node.difficulty}}
        </div>
        <h3>{{ node.title }}</h3>
      </div>
    </BulmaCard>
  </nuxt-link>
</template>

<script>
import BulmaCard from '~/components/BulmaCard'
export default {
  components: { BulmaCard },
  props: {
    node: {
      type: Object,
      default: {}
    }
  }
}
</script>
