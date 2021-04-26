<template>
  <div class="page">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink class="btn" to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
<style lang="scss" scoped>
.page {
  background: linear-gradient(
    180deg,
    #e5efff 9.72%,
    #fafbfe 92.03%,
    #fafbfe 145.03%
  );
  padding: 200px;
  text-align: center;
  margin: auto;
}
</style>
