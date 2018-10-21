  <template>
  <div>
    <RecipeDetail :recipe="recipe" />
  
    <AppSection v-if="recipesByCategory.length > 0">
      <div class="container">
        <h3 class="title is-3 has-text-centered">More recipes from category
          <strong>{{recipe.category.name}}</strong>
        </h3>
        <RecipeCardList :recipes="recipesByCategory"></RecipeCardList>
      </div>
    </AppSection>
  </div>
</template>

<script>
import RecipeDetail from '~/components/RecipeDetail';
import RecipeCardList from '~/components/RecipeCardList';
import AppSection from '~/components/AppSection';
export default {
  components: { RecipeDetail, RecipeCardList, AppSection },
  props: {
    recipe: { type: Object, default: {} },
    recipesByCategory: { type: Array, default: [] },
  },
};
</script>
