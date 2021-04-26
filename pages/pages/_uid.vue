<template>
  <div class="page">
    <code>{{ page }}</code>
  </div>
</template>

<script>
import meta from '@/components/meta'

export default {
  name: 'CustomPage',
  layout: 'custom',
  async asyncData({ $prismic, params, error, i18n }) {
    try {
      const page = await $prismic.api.getByUID('simple_page', params.uid, {
        lang: i18n.localeProperties.iso,
      })

      return {
        page: page.data,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return meta(this.page)
  },
}
</script>
<style lang="scss" scoped>
.page {
  padding: 200px 0;
  text-align: center;
  margin: auto;
}
</style>
