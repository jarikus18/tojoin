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
  async asyncData({ $prismic, i18n }) {
    const { data } = await $prismic.api.getSingle('price_page', {
      lang: i18n.localeProperties.iso,
    })
    return {
      data,
    }
  },
  head() {
    return meta(this.data)
  },
}
</script>
