<template>
  <div class="error">
    <h1>This is an error page</h1>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      immediate: true,
      handler() {
        console.log(this.$route)
        this.$router.push(this.$route.fullPath)
      }
    }
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
