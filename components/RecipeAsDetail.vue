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
                Preparation Time : {{recipe.preparationTime }}
              </div>
              <div class="column has-text-centered">
                                <div>
                  <img class="icons" src="~assets/icons/clock.svg" />
                </div>
                Cooking time : {{recipe.totalTime }}
              </div>
            </div>
  
            <div class="columns">
              <div class="column has-text-centered">
                                <div>
                  <img class="icons" src="~assets/icons/serves.svg" />
                </div>
                Serves : {{recipe.numberOfServices}}
              </div>
              <div class="column has-text-centered">
                                <div>
                  <img class="icons" src="~assets/icons/difficulty.svg" />
                </div>
                Difficulty : {{ recipe.Difficulty }}
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section>
        <h2 class="title is-2"> What you'll need and how to make this dish</h2>
        <div class="columns">
          <div class="column">
            <div>
            </div>
            <h2 class="title is-2"> Ingredients </h2>
            <ul class="ingredients">
              <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                {{ingredient}}
              </li>
            </ul>
          </div>
          <div class="column">
            <h2 class="title is-2"> Method </h2>
            <p>
            {{recipe.instructions}}
            </p>
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
  width: 40px;
}
</style>

