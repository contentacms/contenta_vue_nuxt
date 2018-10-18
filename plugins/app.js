/**
 * A custom plugin for logic that not belongs to any specific component
 */
export default (context) => {
  // we want menu mobile to close when changing page.
  if (process.client) {
    window.onNuxtReady((app) => {
      app.$nuxt.$on('routeChanged', (to, from) => {
        app.$store.commit('setMenuMobileIsOpened', false)
      })
    })
  }
}
