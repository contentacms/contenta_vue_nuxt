<template>
  <div>
    <Navigation />
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import SiteTitle from '~/components/SiteTitle'
export default {
  components:{ Navigation, SiteTitle }
}
</script>
