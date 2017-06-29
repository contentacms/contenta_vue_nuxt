<template>
  <BulmaCard>
    <div slot="image" v-if="node.image" class="thumbnail">
      <img :src="node.image.thumbnail.filename" />
    </div>
    <div slot="content">
      <div class="difficulty">
        difficulty : {{node.difficulty}}
      </div>
      <h3>{{ node.title }}</h3>
    </div>
  </BulmaCard>
  
  <!--
    <div class="card">
      <div class="card-image">
        <div v-if="node.image" class="thumbnail">
          <img :src="node.image.thumbnail.filename" />
        </div>
      </div>
      <div class="card-content">
        <div class="difficulty">
          difficulty : {{node.difficulty}}
        </div>
        <h3>{{ node.title }}</h3>
      </div>
    </div>
    -->
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
