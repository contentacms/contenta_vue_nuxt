<template>
  <div class="recipes">
    <BulmaGrid :items="recipes" itemsByRow="4">
      <template scope="props">
        <RecipeAsTeaser :recipe="props.item"></RecipeAsTeaser>
      </template>
    </BulmaGrid>
  </div>
</template> 

<script>
import RecipeAsTeaser from '~/components/RecipeAsTeaser'
import BulmaGrid from '~/components/BulmaGrid'
export default {
  components: { RecipeAsTeaser, BulmaGrid },
  props: {
    title: { type: String, default: '' },
    moreLink: { type: String, default: '' },
    recipes: { type: Array, default: () => [] }
  }
}
</script>
