import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
  loading: '/images/loading.gif',
  attempt: 1
})
