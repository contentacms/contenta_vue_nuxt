# contenta_vue

Contenta Vue.js is an example of decoupled Drupal with [Vue.JS](https://vuejs.org). It uses [Nuxt.js](https://github.com/nuxt/nuxt.js) framework to perform automatic server side rendering to create a SEO-friendly JS web application .

# So much files, what should i look ?

Look first at "pages", "components" & "layouts" directories, this is where our Vue components resides. 

"Components" are classic Vue single-file components.

"Pages" are special components : they are automatically rendered on server side, and accessible via an url. For example "pages/recipes.vue" can be accessed going to  "/recipes" uri. Thoses components also have additionnal methods, mainly the "asyncData()" method used for fetching content before the server side rendering.

"Layouts" are some Vue components used as template wrappers for pages, a little bit like "page.tpl.php" in Drupal.


## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
# service worker is disabled in dev
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

