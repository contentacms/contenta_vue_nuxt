# contenta Vuejs + Nuxt.js

Contenta Vue.js is an example of decoupled Drupal with [Vue.JS](https://vuejs.org). It uses [Nuxt.js](https://github.com/nuxt/nuxt.js framework to perform automatic server side rendering from Vue components, to create a SEO-friendly JS web application.

# How it works ?

The meat of the code is inside "pages", "components" & "layouts" directories, this is where *Vue components* resides. 

"Components" are classic Vue single-file components.

"Pages" are special components : they are automatically rendered on server side, and accessible via an url. For example "pages/recipes.vue" can be accessed going to  "/recipes" uri. They use a special "asyncData" method which is used for server side rendering.

"Layouts" are some Vue components used as template wrappers for pages components, a little bit like "page.tpl.php" in Drupal.

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
