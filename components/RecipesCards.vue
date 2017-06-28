<template>
  <div class="nodes">
    <h3 class="title is-3 has-text-centered">{{ title }}</h3>
  
    <BulmaGrid :items="nodes" itemsByRow="4">
      <template scope="column">
        <recipeCard :node="column.item"></recipeCard>
      </template>
    </BulmaGrid>
  
    <div class="more-link-wrapper has-text-centered">
      <ButtonLink v-if="moreLink" :to="{path: moreLink}">View more</ButtonLink>
    </div>
  
  </div>
</template> 

<script>
import RecipeCard from '~/components/RecipeCard'
import BulmaGrid from '~/components/BulmaGrid'
import ButtonLink from '~/components/ButtonLink'
export default {
  components: { RecipeCard, BulmaGrid, ButtonLink },
  props: {
    title: { type: String, default: '' },
    moreLink: { type: String, default: '' },
    nodes: { type: Array, default: [] }
  }
}
</script>
