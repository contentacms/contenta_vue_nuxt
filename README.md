# A Drupal 8 headless starter for beginners with Nuxt.js and JSON API module or Contenta CMS

!!! LOOKING FOR A NEW MAINTAINER !!! my interests have changed and i'm not working with Contenta anymore today. Please let m know if you are interested to maintain this project :)

> démo : https://contentanuxt.now.sh/

This project is a simple example to let you start quickly a SEO-friendly headless Drupal 8 with JSON API and Vue.js.

This is aimed at beginners in headless Drupal : we focused on keeping things as simple as possible and keeping a very **low barrier to entry** to Nuxt.js + JSON API stack: No over-engineering, no complex edges cases, no complex directory structure.

_Contenta Vue Nuxt_ is consuming [Contenta CMS](http://www.contentacms.org/) example public API to build a fictive recipes site.

## Why Nuxt.js and not just Vue.js ?

**We believe a headless Drupal has to be SEO-friendly and fast**. That's why we are using the awesome [Nuxt.js](https://nuxtjs.org/) : This is _Vue.js_ with automatic _Server Side Rendering_ and _Code Splitting_, so you don't have to deal yourself with all that stuff: just enjoy your SEO-friendly site built with your _Vue.js_ components.

|                                                    |                                                      |
| :------------------------------------------------: | :--------------------------------------------------: |
| ![vue image](/static/images/icon-vue.jpg?raw=true) | ![nuxt image](/static/images/icon-nuxt.png?raw=true) |

> _( Vue drawing by https://twitter.com/hashedrock )_

## GETTING STARTED

### REQUIREMENTS

- Node 10.x
- NPM >= 5

### INSTALL

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

To listen on another port, edit your package.json and change dev script:

```bash
  # ...
  "scripts": {
    "dev": "PORT=5000 node_modules/.bin/nuxt"
  # ...
```

Run units tests:

```bash
# run unit tests. test resides in test/unit directory
$ npm test
```

### BUILD FOR PRODUCTION

```bash
# build for production
$ npm run build
# and launch production server
$ npm run start
```

## How does it work ?

Most important parts of the code resides inside **pages**, **components** & **layouts** directories, this is where our _Vue components_ resides.

- **Components** are normal Vue.js single-file components.
- **Pages** are special Nuxt.js components : they are triggering server side rendering and are accessible automatically via an url. For example "pages/recipes.vue" can be accessed going to "/recipes" uri. They use a special `asyncData()` method which is used by the server side rendering.
- **Layouts** are some Vue components used as template wrappers for pages components, somehow like the `page.tpl.php` from Drupal.
- **lib** directory contains cross-components library or business logic, this is where resides our functions and class to fetch data from Contenta CMS public API. They might be called from components asyncData() methods or Vuex store.
