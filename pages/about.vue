<template>
  <HowItWorks :data="data" />
</template>

<script>
import HowItWorks from '@/containers/HowItWorks'
import meta from '@/components/meta'

export default {
  name: 'AboutPage',
  components: { HowItWorks },
  layout: 'custom',
  async asyncData({ $prismic, i18n, error }) {
    try {
      const { data } = await $prismic.api.getSingle('how_it_works', {
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
