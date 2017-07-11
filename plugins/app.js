/**
 * App logic that not belongs to any specific component
 */
if (process.BROWSER_BUILD) {
  // we want menu mobile to close when changing page.
  window.onNuxtReady((app) => {
    app.$nuxt.$on('routeChanged', (to, from) => {
      app.$store.commit('setMenuMobileIsOpened', false)
    })
  })
}