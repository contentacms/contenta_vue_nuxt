<template>
  <div>
    <AppNavigation />
    <nuxt/>
    <AppFooterSocket />
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation';
import AppFooterSocket from '~/components/AppFooterSocket';
export default {
  components: { AppNavigation, AppFooterSocket },
};
</script>
