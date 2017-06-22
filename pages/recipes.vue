<template>
  <div class="container">
    <h1 class="title is-1">
       RECIPES
    </h1>
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
