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
