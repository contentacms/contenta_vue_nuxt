import Vuex from 'vuex'

/**
 * This our global state for our app.
 */
const store = () => new Vuex.Store({
  state: {
    menuMobileIsOpened: false
  },
  mutations: {
    setMenuMobileIsOpened (state, value) {
      state.menuMobileIsOpened = value
    }
  }
})

export default store
