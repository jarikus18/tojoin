<template>
  <Affiliate :data="data" />
</template>

<script>
import Affiliate from '@/containers/Affiliate'
import meta from '@/components/meta'

export default {
  name: 'AffiliatePage',
  components: { Affiliate },
  layout: 'custom',
  async asyncData({ $prismic, i18n }) {
    const { data } = await $prismic.api.getSingle('affiliate_program', {
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
