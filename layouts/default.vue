<template>
  <div
    v-if="showContent"
    class="page-layout"
    :style="`transform: scale(${currentScale})`"
  >
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
  data() {
    return {
      MOBILE_WIDTH: 375,
      DESKTOP_WIDTH: 1920,
      currentScale: 1,
      showContent: false,
    }
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

  computed: {
    ...mapState(['settings']),
  },
  mounted() {
    this.getCurrentScale()
    this.showContent = true
    this.$nextTick(function () {
      this.onResize()
    })
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize() {
      if (process.client) {
        this.getCurrentScale()
      }
    },
    getCurrentScale() {
      this.currentScale = (
        (window.innerWidth - 20) /
        this.DESKTOP_WIDTH
      ).toFixed(3)
    },
  },
}
</script>

<style scoped>
.main {
  min-height: 100vh;
  padding-top: 200px;
  overflow: hidden;
}
.page-layout {
  transform-origin: left top;
  width: 1920px;
  height: 100vh;
}
</style>
