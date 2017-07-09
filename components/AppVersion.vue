<template>
   <div class="app-version">
     <small> {{packageJson.version}} </small>
   </div>
</template>

<script>
  const packageJson = require('../package.json')
  export default {
    data() {
      return { packageJson }
    }
  }
</script>
