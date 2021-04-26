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
  async asyncData({ $prismic, i18n }) {
    const { data } = await $prismic.api.getSingle('home_page', {
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
