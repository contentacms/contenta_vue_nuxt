# contenta Vuejs + Nuxt.js

[![Build Status](https://travis-ci.org/contentacms/contenta_vue_nuxt.svg?branch=master)](https://travis-ci.org/contentacms/contenta_vue_nuxt)

A headless Drupal has to be SEO-friendly. *Contenta Vue.js* is an example of decoupled Drupal with [Vue.JS](https://vuejs.org) and *Contenta* JSON API. It uses [Nuxt.js](https://nuxtjs.org/) framework to create a SEO-friendly web application thanks to automatic server side rendering.

![vue image](/static/images/icon-vue.jpg?raw=true)
![nuxt image](/static/images/icon-nuxt.png?raw=true)

*(vue drawing by https://twitter.com/hashedrock )*

## OBJECTIVES  ( WHAT ARE WE DOING AND WHY ? )

1) Helping developers to start quickly a Vue.js + Nuxt.js application with Contenta CMS as a back-office
2) Mirror Vue.js values : un-opinionated, easy to read and learn
3) That's why we should avoid **over-engineering** to focus on keeping a **low barrier to entry** to Vue.js + Nuxt.js stack. 
4) This application MUST be SEO-friendly, because this is why **Nuxt.js** is used.
5) Let's try to keep the project, as far as is it possible, easy to be used as a **starter** (by simply forking it) for creating a new Decoupled Drupal site with Vue.js, Nuxt.js and contenta in no-time. 

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

Most important parts of the code resides inside **pages**, **components** & **layouts** directories, this is where our *Vue components* resides.

**Components** are classic Vue.js single-file components.

**Pages** are special Nuxt.js components : they are automatically rendered on server side and are accessible automatically via an url. For example "pages/recipes.vue" can be accessed going to  "/recipes" uri. They use a special "asyncData" method which is used for server side rendering.

**Layouts** are some Vue components used as template wrappers for pages components, somehow like "page.tpl.php" in Drupal.

**Services** directory contains cross-components business logic, this is where resides our functions and class to fetch data from Contenta CMS public API.

## DEV CONTRIBUTION GUIDELINES

see https://github.com/contentacms/contenta_vue_nuxt/wiki

