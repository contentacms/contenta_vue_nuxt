<template>
    <div class="container">
      <h1 class="title is-1 has-text-centered"> Latest recipes </h1>
      <RecipesAsCards title="Latest Recipes" :recipes="recipesLatest" more-link="/recipes-latest"></RecipesAsCards>
      <div class="has-text-centered">
        <ButtonLink to="/recipes-latest">View more</ButtonLink>
      </div>
   
      <div v-for="(category, categoryIndex) in recipesByCategories" :key="categoryIndex">
        <h3 class="title is-3 has-text-centered">{{ category.name }}</h3>
        <RecipesAsCards title="Recipes" :recipes="category.recipes"></RecipesAsCards>
        <div class="has-text-centered">
          <ButtonLink :to="'/recipes-category/' + category.name">View more</ButtonLink>
        </div>
      </div>
  
    </div>
</template>

<script>
import RecipesAsCards from '~/components/RecipesAsCards'
import ButtonLink from '~/components/ButtonLink'
export default {
  components: {RecipesAsCards, ButtonLink},
  props: {
    recipesLatest: { type: Array, default: () => []},
    recipesByCategories: { type: Array, default: () => [] }
  }
}
</script>