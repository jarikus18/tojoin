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
  async asyncData({ $prismic, i18n }) {
    const { data } = await $prismic.api.getSingle('how_it_works', {
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
