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
import SubRequests from 'd8-subrequests'
import axios from 'axios'
export default {
  transition: 'page',
  async asyncData () {
    const subrequests = new SubRequests("https://dev-contentacms.pantheonsite.io/subrequests?_format=json")

    // all categories
    subrequests.add({
      uri: "/api/categories"
    })
    subrequests.add({
      uri: "/api/tags"
    }),
    subrequests.add({
      uri: "/api/menus"
    })
    // latest 4 recipes
    subrequests.add({
      uri: "/api/recipes",
      options: { 
        sort:'-created',
        page: { limit: 10 },
        include: ['image', 'image.thumbnail'],
        fields: {
          recipes:['title', 'difficulty', 'image'],
          images: ['name', 'thumbnail'],
          files: ['filename']
        }
      }
    })

    const response = await axios.get(subrequests.getUrl())
    const datas = subrequests.parseResponse(response.data)

    //  subrequests.send().then(r => console.log(r))
    
    return {}

  }
}
</script>
