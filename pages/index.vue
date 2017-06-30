<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          UMAMI FOOD MAGAZINE
        </h1>
        <h2 class="subtitle">
          Homepage
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import Pipeline from '~/services/Pipeline'

export default {
  transition: 'page',
  asyncData () {

    Pipeline.add({
      requestId: "categories",
      uri: "/api/categories",
      options: {
        page: { limit: 2 }
      }
    })
    Pipeline.add({
      requestId: "recipes",
      uri: "/api/recipes",
      options: {
        page: { limit: 10 }
      }
    })
    Pipeline.send().then(r => console.log(r))
    
    return {}

  }
}
</script>
