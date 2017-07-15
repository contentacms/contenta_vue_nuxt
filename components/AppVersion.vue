<template>
   <div>
     <small class="app-version"> {{packageJson.version}} </small>
   </div>
</template>

<script>
  import packageJson from '~/package.json'
  export default {
    data() {
      return { packageJson }
    }
  }
</script>
