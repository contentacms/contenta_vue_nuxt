  <template>
  <div>
    <RecipeAsDetail :recipe="recipe" />
  
    <AppSection v-if="recipe.category">
      <div class="container">
        <h3 class="title is-3 has-text-centered">More recipes from category
          <strong>{{recipe.category.name}}</strong>
        </h3>
        <RecipesAsCards :recipes="recipesByCategory"></RecipesAsCards>
      </div>
    </AppSection>
  </div>
</template>

<script>
import RecipeAsDetail from '~/components/RecipeAsDetail'
import RecipesAsCards from '~/components/RecipesAsCards'
import AppSection from '~/components/AppSection'
export default {
  components: { RecipeAsDetail, RecipesAsCards, AppSection },
  props: {
    recipe: { type: Object, default: {} },
    recipesByCategory: { type: Array, default: [] }
  }
}
</script>
