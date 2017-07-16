<template>
  <div>
    <AppNavigation />
    <nuxt/>
    <AppFooter />
    <AppFooterSocket />
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation'
import AppFooter from '~/components/AppFooter'
import AppFooterSocket from '~/components/AppFooterSocket'
export default  {
  components: { AppNavigation, AppFooter, AppFooterSocket }
}
</script>
