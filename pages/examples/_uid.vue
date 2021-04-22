<template>
  <Article :post="post" :related="relatedPosts" back="examples" />
</template>

<script>
import Article from '@/containers/Article'

export default {
  name: 'ArticlePage',
  components: { Article },
  async asyncData({ $prismic, params, error, i18n }) {
    try {
      const post = await $prismic.api.getByUID('story', params.uid, {
        lang: i18n.localeProperties.iso,
      })

      const relatedPosts = await $prismic.api.query(
        [
          $prismic.predicates.similar(post.id, 5),
          $prismic.predicates.at('document.type', 'story'),
        ],
        { pageSize: 3, lang: i18n.localeProperties.iso }
      )

      return {
        post: post.data,
        relatedPosts,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
