<template>
  <Product :product="product" />
</template>

<script>
import Product from '@/containers/Product'
import meta from '@/components/meta'

export default {
  name: 'ProductPage',
  components: { Product },
  async asyncData({ $prismic, params, error, i18n }) {
    try {
      const product = await $prismic.api.getByUID('product', params.uid, {
        lang: i18n.localeProperties.iso,
      })

      return {
        product: product.data,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return meta(this.product)
  },
}
</script>
