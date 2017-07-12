<template>
  <nuxt-link :to="'/recipes/' + recipe.id">
    <BulmaCard>
      <div slot="image" v-if="recipe.image" class="thumbnail">
        <img v-lazy="recipe.image.thumbnail.filename" />
      </div>
      <div slot="content" class="has-text-centered">
        <div class="difficulty">
          <span :class="classes(recipe.difficulty)"> {{recipe.difficulty}}</span>
        </div>
        <div class="description">
          <h3 class="title is-5">{{ recipe.title }}</h3>
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

<style scoped>
.thumbnail {
  max-height: 180px;
  overflow: hidden;
}

.card:hover {
  transition: all 0.2s ease-in-out;
  top: -10px;
  box-shadow: 0 2px 30px;
}

.card {
   height:100%;
   position:relative;
   transition: all 0.3s ease-in-out;
   top:0 
}

.card .description {
   font-style: italic
}

.recipes .card .difficulty {
   margin-bottom:10px;
}

</style>

