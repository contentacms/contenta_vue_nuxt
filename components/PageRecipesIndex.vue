<template>
  <div>

    <RecipeAsPromotedBanner v-if="recipePromoted" :recipe="recipePromoted"></RecipeAsPromotedBanner>
    
    <div class="container">
  
      <AppSection v-if="recipesLatest">
        <h3 class="title is-3 has-text-centered"> Latest recipes </h3>
        <RecipesAsCards :recipes="recipesLatest" more-link="/recipes-latest"></RecipesAsCards>
        <div class="has-text-centered">
          <ButtonLink to="/recipes-latest">View more</ButtonLink>
        </div>
      </AppSection>
  
      <AppSection v-if="recipesByCategories" v-for="(category, categoryIndex) in recipesByCategories" :key="categoryIndex">
        <h3 class="title is-3 has-text-centered">{{ category.name }}</h3>
        <RecipesAsCards title="Recipes" :recipes="category.recipes"></RecipesAsCards>
        <div class="has-text-centered">
          <ButtonLink :to="'/recipes-category/' + category.name">View more</ButtonLink>
        </div>
      </AppSection>
      
    </div>
    
  </div>
</template>

<script>
import RecipesAsCards from '~/components/RecipesAsCards'
import RecipeAsPromotedBanner from '~/components/RecipeAsPromotedBanner'
import ButtonLink from '~/components/ButtonLink'
import AppSection from '~/components/AppSection'
export default {
  components: { RecipesAsCards, ButtonLink, RecipeAsPromotedBanner, AppSection },
  props: {
    recipePromoted: { type: Object, default: {} },
    recipesLatest: { type: Array, default: () => [] },
    recipesByCategories: { type: Array, default: () => [] }
  }
}
</script>
