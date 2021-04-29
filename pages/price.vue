<template>
  <Price :data="data" />
</template>

<script>
import Price from '@/containers/Price'
import meta from '@/components/meta'

export default {
  name: 'PricePage',
  components: { Price },
  layout: 'custom',
  async asyncData({ $prismic, i18n, error }) {
    try {
      const { data } = await $prismic.api.getSingle('price_page', {
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
