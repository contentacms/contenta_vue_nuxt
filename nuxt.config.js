const util = require('util')

// alternative shortcut

module.exports = {
  env: {
    contentaJSONAPIBaseUrl: 'https://dev-contentacms.pantheonsite.io/api',
    siteTitle: 'UMAMI'
  },
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** static generation config
  */
  generate:{
    dir: "docs"
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    link: [
      /* @custom */
      { rel: 'stylesheet', type: 'text/css', href: '/css/bulma.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/app.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ]
}
