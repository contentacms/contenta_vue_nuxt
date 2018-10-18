## How does it work ?

Most important parts of the code resides inside **pages**, **components** & **layouts** directories, this is where our *Vue components* resides.

**Components** are classic Vue.js single-file components.

**Pages** are special Nuxt.js components : they are automatically rendered on server side and are accessible automatically via an url. For example "pages/recipes.vue" can be accessed going to  "/recipes" uri. They use a special "asyncData" method which is used for server side rendering.

**Layouts** are some Vue components used as template wrappers for pages components, somehow like the "page.tpl.php" from Drupal.

**lib** directory contains cross-components library or business logic, this is where resides our functions and class to fetch data from Contenta CMS public API.
