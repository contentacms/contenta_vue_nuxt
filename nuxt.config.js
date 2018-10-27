// change this to your own server.
const serverBaseUrl = 'https://back-end.contentacms.io';

export default {
  plugins: ['~plugins/vue-lazyload', '~plugins/app'],
  env: {
    serverBaseUrl: serverBaseUrl,
    serverApiUrl: serverBaseUrl + '/api',
  },
  router: {
    // redirect to a special page if we can't reach the API server
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
  // page loading progress bar color
  loading: { color: '#3B8070' },
};
