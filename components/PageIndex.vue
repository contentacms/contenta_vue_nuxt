<template>
  <div class="home">
  
    <AppSection class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            UMAMI FOOD MAGAZINE
          </h1>
        </div>
      </div>
    </AppSection>
  
    <AppSection v-if="latestPromoted">
      <div class="container">
        <h3 class="title is-3 has-text-centered">Latest promoted recipes </h3>
        <HomePromotedRecipes :nodes="latestPromoted"></HomePromotedRecipes>
      </div>
    </AppSection>
  
    <AppSection>
      <MonthEdition></MonthEdition>
    </AppSection>
  
    <AppSection>
      <div class="container">
        <HomeWidgets></HomeWidgets>
      </div>
    </AppSection>
  
    <AppSection v-if="latestRecipes" class="home-recipes">
      <div class="container">
        <h3 class="title is-3 has-text-centered">Recipes</h3>
        <h4 class="title is-4 has-text-centered">Explore recipes across every type of occasion, ingredient and skill level</h4>
        <RecipeCardList :recipes="latestRecipes" cardsByRow="2"></RecipeCardList>
      </div>
    </AppSection>
  
  </div>
</template>

<script>
import RecipeCardList from '~/components/RecipeCardList';
import ButtonLink from '~/components/ButtonLink';
import MonthEdition from '~/components/MonthEdition';
import AppSection from '~/components/AppSection';
import HomePromotedRecipes from '~/components/HomePromotedRecipes';
import HomeWidgets from '~/components/HomeWidgets';

export default {
  components: {
    RecipeCardList,
    MonthEdition,
    ButtonLink,
    AppSection,
    HomePromotedRecipes,
    HomeWidgets,
  },
  props: {
    latestRecipes: {
      type: Array,
      required: true,
    },
    latestPromoted: {
      type: Array,
      required: true,
    },
  },
};
</script>
