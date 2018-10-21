<template>
  <div class="recipes">
    <BulmaGrid :items="recipes" :itemsByRow="cardsByRow">
      <template slot-scope="props">
        <RecipeCard :recipe="props.item"></RecipeCard>
      </template>
    </BulmaGrid>
  </div>
</template> 

<script>
import RecipeCard from '~/components/RecipeCard';
import BulmaGrid from '~/components/BulmaGrid';
export default {
  components: { RecipeCard, BulmaGrid },
  props: {
    cardsByRow: { type: String, default: '4' },
    title: { type: String, default: '' },
    moreLink: { type: String, default: '' },
    recipes: { type: Array, default: () => [] },
  },
};
</script>

<style scoped>
.columns .card {
  height: 100%;
}
</style>
