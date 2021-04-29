<template>
  <Price :data="data" />
</template>

<script>
import Price from '@/containers/Price'
import meta from '@/components/meta'

export default {
  name: 'AboutUsPage',
  components: { Price },
  layout: 'custom',
  async asyncData({ $prismic, i18n }) {
    const { data } = await $prismic.api.getSingle('about_us_page', {
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
