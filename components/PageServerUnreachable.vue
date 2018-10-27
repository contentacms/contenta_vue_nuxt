<template>
  <div class="has-text-centered container">
    <appSection>
      <h1 class="title is-4">Sorry, we did not manage to reach server <strong>{{serverBaseUrl}}</strong> </h1>
      <img src="~assets/images/server-unreachable.gif" />
    </appSection>
  </div>
</template>

<script>
import AppSection from '~/components/AppSection';
export default {
  components: { AppSection },
  computed: {
    serverBaseUrl: () => process.env.serverBaseUrl,
  },
};
</script>
