<template>
  <div class="nodes">
    <BulmaGrid :items="nodes" itemsByRow="4">
      <template scope="props">
        <RecipeAsTeaser :node="props.item"></RecipeAsTeaser>
      </template>
    </BulmaGrid>
  </div>
</template> 

<script>
import RecipeAsTeaser from '~/components/RecipeAsTeaser'
import BulmaGrid from '~/components/BulmaGrid'
import ButtonLink from '~/components/ButtonLink'
export default {
  components: { RecipeAsTeaser, BulmaGrid, ButtonLink },
  props: {
    title: { type: String, default: '' },
    moreLink: { type: String, default: '' },
    nodes: { type: Array, default: [] }
  }
}
</script>
