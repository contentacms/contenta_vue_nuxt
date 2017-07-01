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

    // all categories
    Pipeline.add({
      requestId: "categories",
      uri: "/api/categories"
    })
    // latest 4 recipes
    Pipeline.add({
      requestId: "recipes",
      uri: "/api/recipes",
      options: { 
        sort: {
          sortCreated: {
            path: 'created',
            direction: 'DESC'
          }
        },
        page: {
          limit: 4
        },
        include: ['image', 'image.thumbnail'],
        fields: {
          recipes:['title', 'difficulty', 'image'],
          images: ['name', 'thumbnail'],
          files: ['filename']
        }
      }
    })
    // 4 recipes for each category
    Pipeline.add({
      requestId: "recipesByCategory",
      waitFor: "categories",
      uri: "/api/recipes",
      options: {
        page: { limit: 4 },
        filter: {
          categoryName: {
            path: 'category.name',
            value: '{{/categories@/data/--index/attributes/name}}'
          }
        }
      },
      multiply: 4,
    })
    
    Pipeline.send().then(r => console.log(r))
    
    return {}

  }
}
</script>
