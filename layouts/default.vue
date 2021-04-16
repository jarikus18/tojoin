<template>
  <div class="page-layout">
    <Header />
    <main class="main"><Nuxt /></main>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
    await store.dispatch('fetchGeneralSettings', $prismic)
  },
  head() {
    return {
      ...this.$nuxtI18nHead({ addSeoAttributes: true }),
      title: this.settings.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.settings.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.settings.keywords,
        },
      ],
    }
  },
  computed: mapState(['settings']),
}
</script>

<style scoped>
.main {
  min-height: 100vh;
  padding-top: 200px;
  overflow: hidden;
}
</style>
