<template>
  <div>
    <AppNavigation />
    <nuxt/>
    <AppFooter />
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation'
import AppFooter from '~/components/AppFooter'
export default  {
  components: { AppNavigation, AppFooter }
}
</script>

<style scoped>

/* leave some room for the progress bar */
nav {
  margin-top: 2px;
}

/* page transitions */
.page-enter-active, .page-leave-active {
  transition: opacity .2s
}

.page-enter, .page-leave-active {
  opacity: 0
}

</style>
