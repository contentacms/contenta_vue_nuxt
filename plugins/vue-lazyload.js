
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  attempt: 1,
  loading:'/images/loading.gif'
})
