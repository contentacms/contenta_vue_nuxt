# contenta Vuejs + Nuxt.js

*Contenta Vue.js* is an example of decoupled Drupal with [Vue.JS](https://vuejs.org) and *Contenta* JSON API. It uses [Nuxt.js](https://github.com/nuxt/nuxt.js) framework to create a SEO-friendly web application thanks to automated server side rendering.

## OBJECTIVES GUIDELINES ( WHAT ARE WE DOING AND WHY ? )

1) Demonstrate that we can build an awesome moderne JS site on the top of  **contenta CMS** JSON API.
2) Convince Drupal and Javascript **developpers** that using **Vue.js** with **contenta** is an awesome and easy to start developper experience !
3) Mirror Vue.js values : easy-to-adopt, easy-to-read, light, powerful, documented.
4) That's why we MUST keep a *readable* and *easy to understand* code. NO **Overengineering** to keep a **low barrier to entry**. 
5) fork and start ! this project SHOULD, as far as is it possible, easily be used as a **starter** for creating a new Decoupled Drupal site with Vue.js in no-time. 
6) This application MUST be REFERENCABLE and SEO-friendly, because this is why **Nuxt.js** is used.
7) All components and services SHOULD be *unit tested* because it is one of the main advantages of modern JS front-end to be easily unit tested.

## CONTRIBUTING GUIDELINES

Contributions MUST serves project objectives. Objectives can of course be improved in a dedicated issue !

**master** branch will be delivered to github pages.
**dev** is main dev branch that should be forked to implements a new feature.

Pull request SHOULD contain related units tests.

## Getting started

```bash
$ yarn install
$ yarn dev
```

Start looking at the most important part of the code which is inside **pages**, **components** & **layouts** directories, this is where *Vue components* resides.

**Components** are classic Vue single-file components.

**Pages** are special components : they are automatically rendered on server side, and accessible via an url. For example "pages/recipes.vue" can be accessed going to  "/recipes" uri. They use a special "asyncData" method which is used for server side rendering.

**Layouts** are some Vue components used as template wrappers for pages components, a little bit like "page.tpl.php" in Drupal.

**Services** directory contains cross-components business logic, this is where resides our functions and class to fetch data from Contenta public API.

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

# run unit tests. test resides in test/unit directory
$ yarn test
```