<template>
  <Article :post="post" />
</template>

<script>
import Article from '@/containers/Article'

export default {
  name: 'ArticlePage',
  components: { Article },
  async asyncData({ $prismic, params, error }) {
    try {
      const post = (await $prismic.api.getByUID('posts', params.uid)).data
      return {
        post,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
