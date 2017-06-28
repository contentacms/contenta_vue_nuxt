<template>
  <nuxt-link class="button is-primary" :to="to" @click.native="isLoading = !isLoading" :class="{'is-loading' : isLoading}">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String | Array,
      default: '/'
    }
  },
  data () {
    return {
      isLoading: false
    }
  }
}
</script>