<template>
  <AppSection>
    <div class="container">
      <div v-if="recipes.length <= 1">
        <h3 class="title is-h3 has-text-centered">No recipes found.</h3>
      </div>
      <div v-if="recipes.length >= 1">
        <h3 class="title is-h3 has-text-centered"> All recipes </h3>
        <RecipesAsCards :recipes="recipes"></RecipesAsCards>
      </div>
    </div>
  </AppSection>
</template>

<script>
import RecipesAsCards from '~/components/RecipesAsCards'
import AppSection from '~/components/AppSection'
export default {
  components: { RecipesAsCards, AppSection },
  props: {
    recipes: { type: Array, default: () => [] },
    category: { type: Object, default: () => {} },
  }
}
</script>