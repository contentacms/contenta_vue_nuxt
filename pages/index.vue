<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            UMAMI FOOD MAGAZINE
          </h1>
        </div>
      </div>
    </section>
    <div class="container">
      <br />
      <h3 class="title is-3">Latest recipes</h3>
      <recipesAsCards :recipes="recipes"></recipesAsCards>
    </div>
  </div>
</template>

<script>
import Recipes from '~/services/Recipes'
import RecipesAsCards from '~/components/RecipesAsCards'
import ButtonLink from '~/components/ButtonLink'
export default {
  transition: 'page',
  components: { RecipesAsCards },
  async asyncData ({ params }) {
    const recipes = await Recipes.findAllLatest(8)
    return {
      recipes
    }
  }
}
</script>
