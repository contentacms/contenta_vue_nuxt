/**
 * App logic that not belongs to any specific component
 */
export default (context) => {

  if (context.isClient) {
    
    // we want menu mobile to close when changing page.
    window.onNuxtReady((app) => {
      app.$nuxt.$on('routeChanged', (to, from) => {
        app.$store.commit('setMenuMobileIsOpened', false)
      })
    })
  }

}
