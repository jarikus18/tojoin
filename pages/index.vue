<template>
  <Home :data="data" />
</template>

<script>
import Home from '@/containers/Home'
import meta from '@/components/meta'

export default {
  name: 'HomePage',
  components: { Home },
  layout: 'custom',
  async asyncData({ $prismic, i18n, error }) {
    try {
      const res = await $prismic.api.getSingle('home_page', {
        lang: i18n.localeProperties.iso,
      })

      return {
        data: res?.data || {},
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
