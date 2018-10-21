<template>
  <AppSection v-if="recipes">
    <div class="container">
      <h3 class="title is-h3 has-text-centered"> {{ categoryName }} </h3>
      <RecipeCardList :recipes="recipes"></RecipeCardList>
    </div>
  </AppSection>
</template>

<script>
import RecipeCardList from '~/components/RecipeCardList';
import AppSection from '~/components/AppSection';
export default {
  components: { RecipeCardList, AppSection },
  props: {
    recipes: { type: Array, default: [] },
    categoryName: { type: String, default: '' },
  },
};
</script>
