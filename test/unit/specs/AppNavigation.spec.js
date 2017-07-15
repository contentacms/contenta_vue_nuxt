import Vue from 'vue'
import AppNavigation from '~/components/AppNavigation'

// we have to mock router and our store
import Vuex from 'vuex'
import storeCreator from '~/store'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(Vuex)
const mockRouter = new VueRouter({
  routes: [
    { path: '/' }
  ]
})
import NuxtLink from '~/.nuxt/components/nuxt-link'

/**
 * An example unit test
 */
describe('AppNavigation.vue', () => {

  it('store', () => {
    
    // mock NuxtLink
    AppNavigation.components.NuxtLink = NuxtLink

    const Constructor = Vue.extend(AppNavigation)
    const vm = new Constructor({ router: mockRouter })
    vm.$store = storeCreator()
    vm.$mount()
  })

})
