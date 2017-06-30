  <template>
  <div>
    <h1 class="title is-1 has-text-centered"> {{ recipe.title }} </h1>
  
    <div class="columns">
      <div class="column">
        <img v-lazy="recipe.image.name" />
      </div>
      <div class="column">
        <div class="columns">
          <div class="column">
            Preparation Time : {{recipe.preparationTime }}
          </div>
          <div class="column">
            Cooking time : {{recipe.totalTime }}
          </div>
        </div>
  
        <div class="columns">
          <div class="column">
            Serves : {{recipe.numberOfServices}}
          </div>
          <div class="column">
            Difficulty : {{ recipe.Difficulty }}
          </div>
        </div>
      </div>
    </div>

    <h2 class="title is-2"> What you'll need and how to make this dish</h2>
    <div class="columns">
      <div class="column">
        <h2 class="title is-2"> Ingredients </h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
              {{ingredient}}
          </li>
        </ul>
      </div>
      <div class="column">
        <h2 class="title is-2"> Method </h2>
        {{recipe.instructions}}
      </div>
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