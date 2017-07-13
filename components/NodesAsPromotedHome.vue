<template>
  <div class="columns">
    <div class="column" v-for="i in [0,1,2]">
          <nuxt-link :to="'/recipes/' + nodes[i].id">
      <BulmaCard>

          <div slot="image">
            <figure class="image is-3by2">
              <img v-lazy="nodes[i].image.thumbnail.filename" />
            </figure>
          </div>
          <div slot="content">
            {{nodes[0].title}}
          </div>
      </BulmaCard>
        </nuxt-link>
  
    </div>
  
  </div>
</template>

<script>
import BulmaCard from '~/components/BulmaCard'

export default {
  components: { BulmaCard },
  props: {
    nodes: { type: Array, default: [] }
  },
  created () {
    console.log(this.nodes)
  }
}
</script>