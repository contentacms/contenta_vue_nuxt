<template>
  <AppSection>
    <div class="container">
      <h3 class="title is-h3 has-text-centered"> {{ category.name }} </h3>
      <RecipesAsCards :recipes="recipes"></RecipesAsCards>
    </div>
  </AppSection>
</template>

<script>
import RecipesAsCards from '~/components/RecipesAsCards'
import AppSection from '~/components/AppSection'
export default {
  components: { RecipesAsCards, AppSection },
  props: {
    recipes: { type: Array, default: [] },
    category: { type: Object, default: {} },
  }
}
</script>