import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: '/images/loading.gif',
  attempt: 1
})
