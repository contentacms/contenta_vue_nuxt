module.exports = {
  plugins: ['~plugins/vue-lazyload', '~plugins/app'],
  env: {
    // your JSON API server URL :
    jsonApiServer: 'https://live-contentacms.pantheonsite.io',
    jsonApiPrefix: 'api',
  },
  router: {
    // check API server is up, to avoid ugly errors pages
    // when its down or when there is no internet connection
    middleware: 'server-api-available',
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: '/css/bulma-4.3.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/app.css' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Modules
  */
  modules: [
    //  '@nuxtjs/pwa'
  ],
};
