<template>
  <div>
    <!--<AppTopBar />-->
    <AppNavigation />
    <nuxt/>
    <!--<AppFooter />-->
    <AppFooterSocket />
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation'
import AppFooter from '~/components/AppFooter'
import AppFooterSocket from '~/components/AppFooterSocket'
import AppTopBar from '~/components/AppTopBar'
export default  {
  components: { AppNavigation, AppFooter, AppFooterSocket, AppTopBar }
}
</script>
