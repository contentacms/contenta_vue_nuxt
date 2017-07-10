<template>
  <nuxt-link :to="'/recipes/' + recipe.id">
    <BulmaCard>
      <div slot="image" v-if="recipe.image" class="thumbnail">
        <img v-lazy="recipe.image.thumbnail.filename" />
      </div>
      <div slot="content" class="has-text-centered">
        <div class="difficulty">
          <small>
            <span :class="classes(recipe.difficulty)">  {{recipe.difficulty}}</span>
          </small>
        </div>
        <div class="description">
          <h3 class="title is-6">{{ recipe.title }}</h3>
        </div>
      </div>
    </BulmaCard>
  </nuxt-link>
</template>

<script>
import BulmaCard from '~/components/BulmaCard'
export default {
  components: { BulmaCard },
  props: {
    recipe: { type: Object, default: () => [] }
  },
  methods: {
    classes (difficulty) {
      return {
        'tag is-primary': difficulty == 'easy',
        'tag is-warning': difficulty == 'middle',
        'tag is-danger': difficulty == 'hard'
      }
    }
  }
}
</script>

