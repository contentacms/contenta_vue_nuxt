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
const store = storeCreator()
import NuxtLink from '~/.nuxt/components/nuxt-link'

/**
 * An example unit test
 */
describe('AppNavigation.vue', () => {

  it('Mobile menu should have a is-active class when $store.state.menuMobileIsOpened == true', () => {

    // Inject Nuxt-link to avoid an error message
    AppNavigation.components.NuxtLink = NuxtLink

    const Constructor = Vue.extend(AppNavigation)
    const vm = new Constructor({ router: mockRouter })
    vm.$store = store
    vm.$mount()
    expect(vm.$el.querySelector('.nav-right').className.trim()).toBe('nav-right nav-menu')
    vm.setMenuMobileIsOpened()
    // we should now have an active class on next DOM update
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.nav-right').className.trim()).toBe('nav-right nav-menu is-active')
    }) 
    
  })

})
