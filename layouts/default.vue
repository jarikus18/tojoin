<template>
  <div class="page-layout">
    <Header />
    <main class="main"><Nuxt /></main>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
}
</script>

<style scoped>
.main {
  min-height: 100vh;
  padding-top: 200px;
  overflow: hidden;
}
</style>
