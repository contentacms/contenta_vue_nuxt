# contenta Vuejs + Nuxt.js

[![Build Status](https://travis-ci.org/contentacms/contenta_vue_nuxt.svg?branch=master)](https://travis-ci.org/contentacms/contenta_vue_nuxt)

*Contenta Vue.js* is an example of decoupled Drupal with [Vue.JS](https://vuejs.org) and *Contenta* JSON API. It uses [Nuxt.js](https://nuxtjs.org/) framework to create a SEO-friendly web application thanks to server side rendering.

## OBJECTIVES  ( WHAT ARE WE DOING AND WHY ? )

1) Helping JavaScript Developers to start easily a Vue.js / Nuxt.js with Contenta CMS JSON API as a back-end
2) Mirror Vue.js values : easy to read, easy to learn, light, powerful
3) That's why we should avoid **Over-engineering** to keep a **low barrier to entry**
4) This application MUST be REFERENCABLE and SEO-friendly, because this is why **Nuxt.js** is used.
5) this project should, as far as is it possible, be used as a **starter** (by forking it) for creating a new Decoupled Drupal site with Vue.js and Nuxt.js in no-time. 

## GETTING STARTED


### REQUIREMENTS

- node v8.0.0 or >
- npm 5 or >

### BUILD SETUP

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
# service worker is disabled in dev
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# run unit tests. test resides in test/unit directory
$ npm test

# helper to deploy our app to github pages :
# you MUST have a local copy of "contentavuedemo.github.io"
$ npm run deploy
```

## How does it work ?

Start looking at the most important part of the code which is inside **pages**, **components** & **layouts** directories, this is where our *Vue components* resides.

**Components** are classic Vue single-file components.

**Pages** are special components : they are automatically rendered on server side, and accessible via an url. For example "pages/recipes.vue" can be accessed going to  "/recipes" uri. They use a special "asyncData" method which is used for server side rendering.

**Layouts** are some Vue components used as template wrappers for pages components, a little bit like "page.tpl.php" in Drupal.

**Services** directory contains cross-components business logic, this is where resides our functions and class to fetch data from Contenta public API.

## DEV CONTRIBUTION GUIDELINES

see https://github.com/contentacms/contenta_vue_nuxt/wiki

