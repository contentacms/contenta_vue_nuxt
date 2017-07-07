<template>
  <nuxt-link :to="'/recipes/' + recipe.id">
    <BulmaCard>
      <div slot="image" v-if="recipe.image" class="thumbnail">
        <img v-lazy="recipe.image.thumbnail.filename" />
      </div>
      <div slot="content">
        <div class="difficulty">
          difficulty : {{recipe.difficulty}}
        </div>
        <h3>{{ recipe.title }}</h3>
      </div>
    </BulmaCard>
  </nuxt-link>
</template>

<script>
import BulmaCard from '~/components/BulmaCard'
export default {
  components: { BulmaCard },
  props: {
    recipe: { type: Object, default: () => []}
  }
}
</script>
