<template>
  <div class="recipes">
    <BulmaGrid :items="recipes" :itemsByRow="cardsByRow">
      <template scope="props">
        <RecipeAsCard :recipe="props.item"></RecipeAsCard>
      </template>
    </BulmaGrid>
  </div>
</template> 

<script>
import RecipeAsCard from '~/components/RecipeAsCard'
import BulmaGrid from '~/components/BulmaGrid'
export default {
  components: { RecipeAsCard, BulmaGrid },
  props: {
    cardsByRow: { type: String, default: "4"},
    title: { type: String, default: '' },
    moreLink: { type: String, default: '' },
    recipes: { type: Array, default: () => [] }
  }
}
</script>

<style scoped>
.columns .card {
  height: 100%;
}
</style>
