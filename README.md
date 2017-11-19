# Drupal 8 headless example with Contenta CMS / JSON API and Vue.js

[![Build Status](https://travis-ci.org/contentacms/contenta_vue_nuxt.svg?branch=master)](https://travis-ci.org/contentacms/contenta_vue_nuxt)

*Contenta Vue Nuxt* is a [Vue.JS](https://vuejs.org) front-end consumer example for [Contenta CMS](http://www.contentacms.org/), pulling data from its [Contenta public API example](https://live-contentacms.pantheonsite.io/api) to build a fictive recipes site. You can see it live here : https://contentanuxt.now.sh/

This project helps you to start a decoupled Drupal 8 website with JSON API and Vue.js, with a concrete and simple example. 

**We strongly believe than a good headless Drupal has to be SEO-friendly and fast**. That's why we are using the awesome [Nuxt.js](https://nuxtjs.org/) : Nuxt.js is just Vue.js with automatic Server Side Rendering and Code Splitting, so you don't have to deal yourself with all that stuff; and just enjoy your SEO-friendly site built with your Vue.js components.

![vue image](/static/images/icon-vue.jpg?raw=true)
![nuxt image](/static/images/icon-nuxt.png?raw=true)

*(vue drawing by https://twitter.com/hashedrock )*

## CONTRIBUTORS : WHAT OUR OBJECTIVES, WHY ARE WE DOING THIS ?

1) Helping developers to start quickly a Drupal 8 headless with JSON API module or Contenta CMS.
2) Mirror Vue.js values : un-opinionated, easy to read and learn. That's why we should avoid **over-engineering** to focus on keeping a **low barrier to entry** to Vue.js + Nuxt.js stack. 
4) This application MUST be SEO-friendly, because this is why **Nuxt.js** is used.
5) Let's try to do something than can be easily forked to start your own D8 headless site.

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

**Layouts** are some Vue components used as template wrappers for pages components, somehow like the "page.tpl.php" from Drupal.

**lib** directory contains cross-components library or business logic, this is where resides our functions and class to fetch data from Contenta CMS public API.

## DEV CONTRIBUTION GUIDELINES

see https://github.com/contentacms/contenta_vue_nuxt/wiki

