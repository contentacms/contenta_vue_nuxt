<template>
  <nuxt-link :to="'/recipes/' + recipe.id">
    <BulmaCard>
      <div slot="image" v-if="recipe.image" class="">
        <figure class="image is-3by2">
          <img class="lazy-img-fadein" v-lazy="recipe.image.thumbnail.url" />
        </figure>
      </div>
      <div slot="content" class="has-text-centered">
        <Difficulty class="difficulty" :difficulty="recipe.difficulty" />
        <div class="description">
          <h3 class="title is-5">{{ recipe.title }}</h3>
        </div>
      </div>
    </BulmaCard>
  </nuxt-link>
</template>

<script>
import BulmaCard from '~/components/BulmaCard'
import Difficulty from '~/components/Difficulty'
export default {
  components: { BulmaCard, Difficulty },
  props: {
    recipe: { type: Object, default: () => [] }
  }
}
</script>

<style scoped>

.thumbnail {
  max-height: 220px;
  overflow: hidden;
}

.image.is-square {
  background-color:whitesmoke
}

.card:hover {
  transition: all 0.2s ease-in-out;
  top: -10px;
  box-shadow: 0 2px 30px;
}

.card {
  height: 100%;
  position: relative;
  transition: all 0.3s ease-in-out;
  top: 0
}

.card .description {
  font-style: italic
}

.recipes .card .difficulty {
  margin-bottom: 10px;
}

</style>

