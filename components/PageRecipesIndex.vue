<template>
  <div>

    <RecipePromotedBanner v-if="recipePromoted" :recipe="recipePromoted"></RecipePromotedBanner>
    
    <div class="container">
  
      <AppSection v-if="recipesLatest">
        <h3 class="title is-3 has-text-centered"> Latest recipes </h3>
        <RecipeCardList :recipes="recipesLatest" more-link="/recipes-latest"></RecipeCardList>
        <div class="has-text-centered">
          <ButtonLink to="/recipes-latest">View more</ButtonLink>
        </div>
      </AppSection>
  
      <AppSection v-if="recipesByCategories" v-for="(category, categoryIndex) in recipesByCategories" :key="categoryIndex">
        <h3 class="title is-3 has-text-centered">{{ category.name }}</h3>
        <RecipeCardList title="Recipes" :recipes="category.recipes"></RecipeCardList>
        <div class="has-text-centered">
          <ButtonLink :to="'/recipes-category/' + category.name">View more</ButtonLink>
        </div>
      </AppSection>
      
    </div>
    
  </div>
</template>

<script>
import RecipeCardList from '~/components/RecipeCardList';
import RecipePromotedBanner from '~/components/RecipePromotedBanner';
import ButtonLink from '~/components/ButtonLink';
import AppSection from '~/components/AppSection';
export default {
  components: {
    RecipeCardList,
    ButtonLink,
    RecipePromotedBanner,
    AppSection,
  },
  props: {
    recipePromoted: { type: Object, default: {} },
    recipesLatest: { type: Array, default: () => [] },
    recipesByCategories: { type: Array, default: () => [] },
  },
};
</script>
