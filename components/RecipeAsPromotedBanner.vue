<template>
    <section class="hero is-primary">
  
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h2 class="title is-2"> PROMOTED RECIPE  </h2>
              <h3 class="title is-3">{{recipe.title}} </h3>
            </div>
            <div class="column">
              <img v-if="recipe.image" v-lazy="recipe.image.name" />
            </div>
          </div>
        </div>
      </div>
  
    </section>
</template>

<script>
export default {
  props: {
    recipe: {type: Object, default: {}}
  }
}
</script>