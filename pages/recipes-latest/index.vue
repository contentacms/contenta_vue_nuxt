<template>
  <section>
    <div class="container">
      <h3 class="title is-h3 has-text-centered"> Latest recipes </h3>
      <RecipesAsCards title="Latest recipes" :recipes="recipes"></RecipesAsCards>
    </div>
  </section>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesAsCards from '~/components/RecipesAsCards'
export default {
  transition: 'page',
  components: { RecipesAsCards },
  async asyncData ({ params }) {
    const recipes = await Recipes.findAllLatest(20)
    return {
      recipes
    }
  }
}
</script>