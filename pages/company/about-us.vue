<template>
  <AboutUs :data="data" />
</template>

<script>
import AboutUs from '@/containers/AboutUs'
import meta from '@/components/meta'

export default {
  name: 'AboutUsPage',
  components: { AboutUs },
  layout: 'custom',
  async asyncData({ $prismic, i18n, error }) {
    try {
      const { data } = await $prismic.api.getSingle('about_us_page', {
        lang: i18n.localeProperties.iso,
      })
      return {
        data,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return meta(this.data)
  },
}
</script>
