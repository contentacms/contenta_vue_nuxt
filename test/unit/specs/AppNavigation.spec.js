import Vue from 'vue'
import AppNavigation from '~/components/AppNavigation'

// Mock our router, store and nuxt-link
import Vuex from 'vuex'
import storeCreate from '~/store'
import VueRouter from 'vue-router'
import NuxtLink from '~/.nuxt/components/nuxt-link'
Vue.use(VueRouter)
Vue.use(Vuex)

/**
 * An example unit test
 */
describe('AppNavigation.vue', () => {

  let vm = null

  beforeEach(() => {
    // Inject manually Nuxt-link to avoid an error message
    AppNavigation.components.NuxtLink = NuxtLink
    const Constructor = Vue.extend(AppNavigation)
    vm = new Constructor({ router:  new VueRouter() })
    vm.$store = storeCreate()
    vm.$mount()
  })

  it('Mobile menu should have a is-active class when $store.state.menuMobileIsOpened == true', () => {
    expect(vm.$el.querySelector('.nav-right').className.trim()).toBe('nav-right nav-menu')
    vm.setMenuMobileIsOpened()
    // we should now have an active class on next DOM update
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.nav-right').className.trim()).toBe('nav-right nav-menu is-active')
    }) 
    
  })

})
