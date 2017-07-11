<template>
  <div>
  
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1"> {{ recipe.title }} </h1>
        </div>
      </div>
    </section>
  
    <div class="container">
  
      <section>
        <div class="columns">
          <div class="column">
            <img v-lazy="recipe.image.name" />
          </div>
          <div class="column">
            <div class="columns">
              <div class="column has-text-centered">
                <div>
                  <img class="icons" src="~assets/icons/clock.svg" />
                </div>
                Preparation Time :
                <strong>{{recipe.preparationTime }} min </strong>
              </div>
              <div class="column has-text-centered">
                <div>
                  <img class="icons" src="~assets/icons/clock.svg" />
                </div>
                Cooking time :
                <strong> {{recipe.totalTime }} min</strong>
              </div>
            </div>
  
            <div class="columns">
              <div class="column has-text-centered">
                <div>
                  <img class="icons" src="~assets/icons/serves.svg" />
                </div>
                Serves :
                <strong>{{recipe.numberOfServices}} persons </strong>
              </div>
              <div class="column has-text-centered">
                <div>
                  <img class="icons" src="~assets/icons/difficulty.svg" />
                </div>
                Difficulty :
                <strong>{{ recipe.Difficulty }}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section>
        <h2 class="title is-2 has-text-centered what-you-need"> What you'll need and how to make this dish</h2>
      </section>
      <section class="instructions">
        <div class="columns">
          <div class="column">
  
            <div class="content notification">
              <h3 class="has-text-centered"> Ingredients </h3>
              <ul class="ingredients">
                <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                  {{ingredient}}
                </li>
              </ul>
            </div>
  
          </div>
          <div class="column">
  
            <div class="content method">
              <h3 class="title has-text-centered"> Method </h3>
              <p>
                {{recipe.instructions}}
              </p>
            </div>
  
          </div>
        </div>
      </section>
  
    </div>
  
  </div>
</template>

<script>
export default {
  props: {
    recipe: { type: Object, default: {} }
  }
}
</script>

<style scoped>
.icons {
  width: 50px;
}
.what-you-need {
  margin-bottom:10vh;
}

.method {
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
}

</style>

