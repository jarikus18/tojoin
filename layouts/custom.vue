<template>
  <div class="page-wrapper">
    <div
      :class="['page-layout', showContent && 'd-block']"
      :style="currentScale < 1 && `transform: scale(${currentScale})`"
    >
      <Header />
      <main class="main"><Nuxt /></main>
      <Footer />
    </div>
    <client-only>
      <portal-target name="modal" />
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware({ store }) {
    store.dispatch('changeLanguage')
  },
  data() {
    return {
      MOBILE_WIDTH: 375,
      DESKTOP_WIDTH: 1920,
      MOBILE_WIDTH_START: 767,
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
  beforeMount() {
    this.showContent = true
  },
  mounted() {
    this.getCurrentScale()
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
      this.currentScale =
        this.MOBILE_WIDTH_START >= window.innerWidth
          ? 1
          : (window.innerWidth / this.DESKTOP_WIDTH).toFixed(3)
    },
  },
}
</script>

<style scoped>
.main {
  min-height: 100vh;
  overflow: hidden;
}
.page-layout {
  transform-origin: left top;
  width: 1920px;
  height: 100vh;
  display: none;
}
.page-layout.d-block {
  display: block;
}
@media (max-width: 767px) {
  .page-layout {
    transform-origin: none;
    width: auto;
  }
}
@media (min-width: 1921px) {
  .page-layout {
    margin: auto;
    width: auto;
  }
}
</style>
