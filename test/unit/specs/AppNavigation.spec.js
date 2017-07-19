import Vue from 'vue'
import AppNavigation from '~/components/AppNavigation'

// Mock our router, store and nuxt-link
import Vuex from 'vuex'
import storeCreate from '~/store'
import NuxtLink from '../NuxtLinkMock'
Vue.use(Vuex)

/**
 * An example unit test
 */
describe('AppNavigation.vue', () => {

  let vm = null

  beforeEach(() => {
    // mock NuxtLink and create $store
    AppNavigation.components.NuxtLink = NuxtLink
    const Constructor = Vue.extend(AppNavigation)
    vm = new Constructor()
    vm.$store = storeCreate()
    vm.$mount()
  })

  it('Mobile navigation should have a "is-active" classes when $store.state.menuMobileIsOpened == true', () => {

    expect(vm.$el.querySelector('.navbar-menu').className.trim()).toBe('navbar-menu')
    // emulate a click ont the hamburger
    vm.setMenuMobileIsOpened()

    // we should now have an active class on next DOM update
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.navbar-menu').className.trim()).toBe('navbar-menu is-active')
      expect(vm.$el.querySelector('.navbar-burger').className.trim()).toBe('navbar-burger is-active')
    })

  })

  it('.navbar-burger "data-target" to be "app-menu" and to match .navbar-menu "id"', () => {
    const navbarMenuId = "app-menu"
    expect(vm.$el.querySelector('.navbar-burger').dataset.target).toBe(navbarMenuId)
    expect(vm.$el.querySelector('.navbar-menu').id).toBe(navbarMenuId)
  })

})
