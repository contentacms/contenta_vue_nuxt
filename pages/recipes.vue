<template>
  <div class="container">
    <h2 class="title is-2">
       RECIPES
    </h2>
    <recipes :nodes="nodes"></recipes>
  </div>
</template>

<script>
import api from '~/services/contentaJSONAPI'
import Recipes from '~/components/Recipes'
export default {
  components: { Recipes },
  async asyncData () {
    const nodes = await api.getRecipes()
    return { nodes }
  }
}
</script>
