<template>
  <Home :data="data" />
</template>

<script>
import Home from '../containers/Home'

export default {
  name: 'HomePage',
  components: { Home },
  async asyncData({ $prismic, i18n }) {
    const { data } = await $prismic.api.getSingle('home_page', {
      lang: i18n.localeProperties.iso,
    })
    return {
      data,
    }
  },
}
</script>
